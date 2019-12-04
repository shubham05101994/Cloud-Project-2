import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard";
import Chatbot from "./components/ChatBot";
import UserDashboard from "./components/UserDashboard";
import Iot from "./components/Iot";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/chatbot" component={Chatbot}/>
            <Route exact path="/userdashboard" component={UserDashboard}/>
            <Route exact path="/iot" component={Iot}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
