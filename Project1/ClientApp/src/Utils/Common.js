// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('name');
    if (userStr) return JSON.parse(userStr);
  
    else return null;
  }
   
  // return the token from the session storage
  export const getToken = () => {
    return sessionStorage.getItem('accessToken') || null;
  }
  export const getrfToken = () => {
    return sessionStorage.getItem('refreshToken') || null;
  }

   
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('name');
  }
   
  // set the token and user from the session storage
  export const setUserSession = (accessToken, name) => {
    sessionStorage.setItem('accessToken', accessToken);
    
    sessionStorage.setItem('name', JSON.stringify(name));
  }