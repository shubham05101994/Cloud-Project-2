import React, { Component } from "react";
import Footer from "./Footer";
class Landing extends Component {
  render() {
    return (
      <div className="">
        <div className="jumbotron color_back mt-4">
          <div className="col-sm-8 mx-auto">
          
            <h4 className="text-center">WELCOME TO</h4>
            <div>
            
            <h1 className="text-center name_app"><img src="flash.png" alt="Smiley face" height="42" width="42"></img>Trending Music Dashboard</h1>
            </div>
          </div>
        </div>
        <div className="jumbotron mt-4" style={{marginLeft:'16%',marginRight:'16%'}}>
          <div className="col-sm-8 mx-auto">
            <p>**NOTE: Short Feature List:</p>
            
            <p className="">1. User Login</p>
            <p className="">2. Admin Login</p>
            <p className="">3. Social login (Facebook)</p>
            <p className="">4. Application provides feature for Uploading Songs .</p>
            <p className="">5. Application provides feature for Deleting Songs.</p>
            <p className="">6. Application dashboard provides details of top Trending Songs.</p>
            <p className="">7. Application dashboard provides details of Country wise Trending Songs.</p>
            <p className="">8. Application implements Amazon Chatbot</p>
            <p className="">9. Application implements IOT</p>
            <p className="">10.Application provides Admin Panel</p>
           



          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
