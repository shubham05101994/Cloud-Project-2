import React, { Component } from "react";
import {Iotdata} from './UserFunctions';
import "./sh.css"
class Iot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iotfiles:[]
          };
    }


    componentDidMount() {

        Iotdata().then(res => {
            console.log(res);
            if (res) {
              this.setState({
                iotfiles: res.data
              });
            } else {
              console.log("no data");
            }
          });

    }

    render() { 
        return ( 
            <div class="container" style={{paddingLeft:'17%'}}>
                {this.state.iotfiles.map(response => (
                      <div
                      class="card1 col-md-3"
                      style={{
                        
                        border: "1px solid brown",
                        boxShadow: "1px 1px 10px 2px",
                        marginRight:'3%',
                        marginBottom:'3%',
                        marginTop:'3%'
                      }}
                    >
                      
                      <ul class="list-group list-group-flush">
                       
                        <li class="list-group-item">Device ID :{response.device_id}</li>
                        <li class="list-group-item">Playlist ID :{response.playlist_id}</li>
                        <li class="list-group-item">
                          Timestamp :{response.time_Stamp}
                        </li>
                      
                      </ul>
                    </div>
                        
                ))}
            </div>
         );
    }
}
 
export default Iot;