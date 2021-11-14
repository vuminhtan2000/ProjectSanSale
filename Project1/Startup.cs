/*using eWebAPISanSale.Handlers;*/
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Project1.Models;
using System;
using System.IO;
using System.Text;

namespace Project1
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            /*services.AddControllers();*/
            services.AddControllersWithViews();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });

            services.AddMvc(option => option.EnableEndpointRouting = false)
            .SetCompatibilityVersion(CompatibilityVersion.Version_3_0)
            .AddNewtonsoftJson(opt => opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);

            services.AddDbContext<SanSaleContext>(options =>
                   options.UseSqlServer(Configuration.GetConnectionString("SansaleDB")));
/*
            services.AddAuthentication("BasicAuthentication")
                .AddScheme<AuthenticationSchemeOptions, BacsicAuthenticationHandler>("BasicAuthentication", null);*/



            var jwSection = Configuration.GetSection("JWTSettings");
            services.Configure<JWTSettings>(jwSection);

            //to validate the token which has been sent by clients
            var appSettings = jwSection.Get<JWTSettings>();
            var key = Encoding.ASCII.GetBytes(appSettings.SecretKey);
            services.AddCors();
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = true;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                };
            });

            services.AddSwaggerGen(gen =>
            {
                gen.SwaggerDoc("v1.0", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "San sale ", Version = "v1.0" });
            });
            //swagger/v1.0/swaggerjson
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            //veritoken
            app.UseSpaStaticFiles();

            app.UseRouting();
            
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseCors(options => options

                .WithOrigins("http://localhost:5001", "http://localhost:3001", "http://localhost:3000", "http://sansale.somee.com", "http://www.sansale.somee.com/")
                .AllowAnyHeader()
               .AllowAnyMethod()
               .AllowCredentials()
                                  );
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, "Images")),
                RequestPath = "/Images"
            });
            /*app.UseSwagger();*/
            app.UseSwaggerUI(ui =>
            {
                ui.SwaggerEndpoint("/swagger/v1.0/swagger.json", "San sale Api Endpoint");
            });
            
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
        });
            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
