import React from "react";
import "./Admin.css";
import Main from "../Main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegistrationPage from "../Registration/RegistrationPage";
import NavigationBar from "../NavigationBar/NavigationBar";
import ToursProvider from "../../contexts/tours/tours.context";
import Header from "../Header/Header";
import Footer from '../Footer/Footer'

function Admin() {
  return (
    <ToursProvider>
      <Router>
        <div className="Admin">
          <Switch>
            <Route path="/mainAdmin">
              <NavigationBar Admin={false} />
              <Main Admin={false} />
              <Footer/>
            </Route>
            <Route path="/registration">
              <NavigationBar Admin={false} />
              <RegistrationPage />
            </Route>
            <Route path="/">
              <Header />
            </Route>
          </Switch>
        </div>
      </Router>
    </ToursProvider>
  );
}


export default Admin;
