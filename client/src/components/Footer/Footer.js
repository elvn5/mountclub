import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";
import {
  faTelegram,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterPage = () => {
  return (
    <div className="footer__page">
      <MDBFooter color="blue" className="font-small pt-4 mt-4 footer">
        <MDBContainer className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Описание:</h5>
              <p>
                Туризм в Кыргызстане <br/> Пеший поход (горы и озера) <br/> Кемпинг <br/>
                Восхождения на пики свыше 4000м <br/> Скалолазание <br/> Туры по Кыргызстану
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Контакты:</h5>
              <ul className="Footer__contacts">
                <li className="list-unstyled">Телефон: +996 708 97 02 42</li>
                <ul>
                  <li>Способы оплаты</li>
                  <li>ЭЛСОМ: 0708970242</li>
                  <li>Balance.kg: 0773970242</li>
                  <li>Demir Bank Visa: Карта 4215 8901 1495 8926</li>
                  <li>KICB Visa 4446 7445 2691 3899</li>
                  <li>(Получатель: Жунусалы Маметов)</li>
                </ul>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <hr></hr>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            <div className="social">
              <ul
                style={{
                  display: "flex",
                  justifyContent: "center",
                  listStyle: "none",
                  padding: "0px",
                }}
              >
                <a href="https://t.me/mount_club" target="_blank">
                  <li style={{ marginLeft: "0px" }}>
                    <FontAwesomeIcon
                      size="2x"
                      color="rgb(26, 71, 217)"
                      icon={faTelegram}
                    />
                  </li>
                </a>

                <a href="https://t.me/mount_club" target="_blank">
                  <li>
                    <FontAwesomeIcon size="2x" color="blue" icon={faFacebook} />
                  </li>
                </a>

                <a href="https://www.instagram.com/mountclub/" target="_blank">
                  <li>
                    <FontAwesomeIcon
                      size="2x"
                      color="pink"
                      icon={faInstagram}
                    />
                  </li>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCU5N9lfFOWZ0N6iIdAjNF3Q"
                  target="_blank"
                >
                  <li>
                    <FontAwesomeIcon size="2x" color="red" icon={faYoutube} />
                  </li>
                </a>
              </ul>
            </div>
            <div>&copy; {new Date().getFullYear()} Copyright: MountClub </div>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default FooterPage;
