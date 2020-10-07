import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RegistrationPage from "./components/Registration/RegistrationPage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ToursProvider from "./contexts/tours/tours.context";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <ToursProvider>
      <Router>
        <div className="App">
          <NavigationBar
            Admin={!!localStorage.getItem("admin")}
            User={!!localStorage.getItem("user")}
          />
          <Switch>
            <Route path="/main"/>
            <Route path="/registration">
              <RegistrationPage />
            </Route>
            <Route path="/">
              <Main Admin={!!localStorage.getItem("admin")} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ToursProvider>
  );
}


export default App;
