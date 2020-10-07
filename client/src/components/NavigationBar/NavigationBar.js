import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import Modal from "../ModalAdd/ModalAdd";
import ModalAuth from "../ModalAuth/ModalAuth";
import { BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SeachBar/SearchBar";
import DropdownInfo from "../Dropdown/DropdownInfo";
import AboutUs from "../AboutUs/AboutUs";

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  console.log(props);
  let isAdmin = props.Admin; //TODO Доделать админ панель

  function logOutHandler() {
    localStorage.setItem("admin", "");
    localStorage.setItem("user", "");
    window.location.reload();
  }

  return (
    <div>
      <Router>
        <Navbar color="white" light expand="md" fixed="top">
          <NavbarBrand href="/">
            <img
              width="70px"
              height="70px"
              src="https://static10.tgstat.ru/channels/_0/9d/9d54ff8ed2e13b5285647d021a9abe9e.jpg"
              alt="Здесь изображение логотипа Mountclub"
            ></img>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                {isAdmin ? (
                  <Modal
                    buttonLabel={
                      <FontAwesomeIcon color="black" icon={faPlus} />
                    }
                  />
                ) : null}
              </NavItem>

              <NavItem style={{ marginLeft: "10px" }}>
                <DropdownInfo />
              </NavItem>
              <NavItem style={{ marginLeft: "10px" }}>
                <AboutUs />
              </NavItem>
              {props.User ? (
                <Button
                  style={{ marginLeft: "20px" }}
                  onClick={() => logOutHandler()}
                  color="info"
                >
                  <FontAwesomeIcon color="black" icon={faSignOutAlt} />
                </Button>
              ) : null}
              {isAdmin ? (
                <Button
                  style={{ marginLeft: "20px" }}
                  onClick={() => logOutHandler()}
                  color="info"
                >
                  <FontAwesomeIcon color="black" icon={faSignOutAlt} />
                </Button>
              ) : props.User ? null : (
                <NavItem style={{ marginLeft: "10px" }}>
                  <ModalAuth
                    buttonLabel={
                      <FontAwesomeIcon color="black" icon={faSignInAlt} />
                    }
                  />
                </NavItem>
              )}
            </Nav>
            <SearchBar />
            {/* <Input placeholder="Поиск" style={{ width: "20%" }} />
            <Button color="success">Искать</Button> */}
          </Collapse>
        </Navbar>
      </Router>
    </div>
  );
};

export default NavigationBar;
