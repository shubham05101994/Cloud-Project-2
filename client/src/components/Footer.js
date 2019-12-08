import React, { Component } from "react";
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <footer class="page-footer font-small blue" style={{backgroundColor:'#455a64',color:'white',width:'100%',position:'absolute'}}>

        <div class="text-center" style={{paddingTop:'0.5%',paddingBottom:'0.5%'}}>© 2019 Copyright:
          <a href="https://shubhamkatariya.com" style={{color:'white',textDecoration:'underline'}}> shubhamkatariya.com</a>
        </div>
       
      
      </footer> );
    }
}
 
export default Footer;