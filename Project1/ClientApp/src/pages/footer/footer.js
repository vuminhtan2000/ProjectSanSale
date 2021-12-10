import React from "react";
import "./footer.css";
import { BsCursor, BsEnvelope, BsBriefcase } from "react-icons/bs";

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
export default function footer() {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 footer-header">
      <MDBContainer fluid className="text-center text-md-left footer-home">
        <MDBRow>
          <MDBCol md="4" className="logo-footer">
            <h5 className="title-footer">Hợp tác cùng</h5>
            <div className="logo-footer-logo">
              <img className="logo1" src="../img/logosp.png"></img>
              <img className="logo1" src="../img/logoLazada.png"></img>
              <img className="logo1" src="../img/logo-sendo.png"></img>
            </div>
            <div className="logo-footer-logo1">
              <img className="logo2" src="../img/logoactrade.png"></img>
            </div>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title-footer">Hổ trợ</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!" className="list-unstyled">
                  Thẻ ưu đãi
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="list-unstyled">
                  Trung tâm hổ trợ{" "}
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="list-unstyled">
                  Hướng dẫn sử dụng
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="list-unstyled">
                  Link vào Group hổ trợ
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title-footer">Liên hệ</h5>
            <ul className="list">
              <li className="list-unstyled">
                <a className="list-unstyled" href="#!">
                  <BsCursor /> 098999999
                </a>
              </li>
              <li className="list-unstyled">
                <a className="list-unstyled" href="#!">
                  <BsEnvelope /> sansalehot@gmail.com{" "}
                </a>
              </li>
              <li className="list-unstyled" className="list-unstyled">
                <a href="#!" className="list-unstyled">
                  <BsBriefcase /> Nhóm DT
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title-footer">Group</h5>
            <div className="logo-footer-logo-mxh">
              <img className="logo-mxh" src="../img/facebook.png"></img>
              <img className="logo-mxh" src="../img/instagram.png"></img>
              <img className="logo-mxh" src="../img/telegram.png"></img>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 footer-home-bot">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href=""> sansalehot@gmail.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
