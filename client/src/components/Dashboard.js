import React, { Component } from 'react';
import {Bar, Pie,Doughnut} from 'react-chartjs-2';
import { dashboard } from "./UserFunctions";
import { CountryWisedashboard } from "./UserFunctions";
import { UnitedStatesdashboard } from "./UserFunctions";
import { Indiadashboard } from "./UserFunctions";
import { Japandashboard } from "./UserFunctions";
import { Chinadashboard } from "./UserFunctions";
import { Singaporedashboard } from "./UserFunctions";
import './sh.css';
class Dashboard extends Component {
    constructor() {
        super();
        this.state = {  
            chartData:{},
              filename: [],
              countBar: [],
            CountrywisepieChart:{},
              Countryname:[],
              Countrywisecount: [],
            UnitedStatesPieChart:{},
              USsongsname:[],
              USsongscount:[],
            IndiaPieChart:{},
              Indiasongsname:[],
              Indiasongscount:[],
            ChinaPieChart:{},
              Chinasongsname:[],
              Chinasongscount:[],
            JapanPieChart: {},
              Japansongsname:[],
              Japansongscount:[],
            SingaporePieChart:{},
              Singaporesongsname:[],
              Singaporesongscount:[],
            
            
            
            displayTitle:""
        }
    }

    componentDidMount(){
      
      dashboard().then(res => {
        if (res) {
          res.data.forEach(element => {
            this.state.filename.push(element.File_description);
          });
          //console.log('filename array',this.state.filename,this.state.count);
          res.data.forEach(element => {
            this.state.countBar.push(parseInt(element.count));
            //this.state.CountrywisecountPie.push(parseInt(element.count));
          });
          this.getChartData();
          this.setState({
            trendingData: res.data
          });
        } else {
          alert("noe able to set data in trandingData array");
        }
      });
// Country Wise pie chart
      CountryWisedashboard().then(res => {
        if (res) {
          res.data.forEach(element => {
            this.state.Countryname.push(element.Country);
          });
          //console.log('filename array',this.state.filename,this.state.count);
          res.data.forEach(element => {
            this.state.Countrywisecount.push(parseInt(element.count));
          });
          this.getCountryPieChartData();
          console.log('Countrywisecount',this.state.Countrywisecount);
        } else {
          alert("noe able to set data in trandingData array");
        }
      });

      UnitedStatesdashboard().then(res => {
        if (res) {
          res.data.forEach(element => {
            this.state.USsongsname.push(element.File_description);
          });
          //console.log('filename array',this.state.filename,this.state.count);
          res.data.forEach(element => {
            this.state.USsongscount.push(parseInt(element.count));
          });
          this.getUSPieChartData();
          //console.log('USwisecount',this.state.Countrywisecount);
        } else {
          alert("noe able to set data in trandingData array");
        }
      });

      Indiadashboard().then(res => {
        if (res) {
          res.data.forEach(element => {
            this.state.Indiasongsname.push(element.File_description);
          });
          //console.log('filename array',this.state.filename,this.state.count);
          res.data.forEach(element => {
            this.state.Indiasongscount.push(parseInt(element.count));
          });
          this.getIndiaPieChartData();
          //console.log('USwisecount',this.state.Countrywisecount);
        } else {
          alert("not able to set data in trandingData array");
        }
      });
      
      Japandashboard().then(res => {
        if (res) {
          res.data.forEach(element => {
            this.state.Japansongsname.push(element.File_description);
          });
          //console.log('filename array',this.state.filename,this.state.count);
          res.data.forEach(element => {
            this.state.Japansongscount.push(parseInt(element.count));
          });
          this.getJapanPieChartData();
          //console.log('USwisecount',this.state.Countrywisecount);
        } else {
          alert("not able to set data in trandingData array");
        }
      });

      Chinadashboard().then(res => {
        if (res) {
          res.data.forEach(element => {
            this.state.Chinasongsname.push(element.File_description);
          });
          //console.log('filename array',this.state.filename,this.state.count);
          res.data.forEach(element => {
            this.state.Chinasongscount.push(parseInt(element.count));
          });
          this.getChinaPieChartData();
          //console.log('USwisecount',this.state.Countrywisecount);
        } else {
          alert("not able to set data in trandingData array");
        }
      });

      Singaporedashboard().then(res => {
        if (res) {
          res.data.forEach(element => {
            this.state.Singaporesongsname.push(element.File_description);
          });
          //console.log('filename array',this.state.filename,this.state.count);
          res.data.forEach(element => {
            this.state.Singaporesongscount.push(parseInt(element.count));
          });
          this.getSingaporePieChartData();
          //console.log('USwisecount',this.state.Countrywisecount);
        } else {
          alert("not able to set data in trandingData array");
        }
      });

      }
    
      getChartData = () =>{
        // Ajax calls here
        this.setState({
          chartData:{
            labels: this.state.filename,
            datasets:[
              {
               // label:this.state.filename[0],
                data:this.state.countBar,
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ],
            options : {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
          }
        });
      }


      getCountryPieChartData = () =>{
        // Ajax calls here
        this.setState({
          CountrywisepieChart:{
            labels: this.state.Countryname,
            datasets:[
              {
                label:'Country Total songs',
                data:this.state.Countrywisecount,
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
           
          }
        });
      }

      getUSPieChartData = () =>{
        // Ajax calls here
        this.setState({
          UnitedStatesPieChart:{
            labels: this.state.USsongsname,
            datasets:[
              {
                label:'Country Total songs',
                data:this.state.USsongscount,
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
           
          }
        });
      }

      getIndiaPieChartData = () =>{
        // Ajax calls here
        this.setState({
          IndiaPieChart:{
            labels: this.state.Indiasongsname,
            datasets:[
              {
                label:'Country Total songs',
                data:this.state.Indiasongscount,
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
           
          }
        });
      }

      getJapanPieChartData = () =>{
        // Ajax calls here
        this.setState({
          JapanPieChart:{
            labels: this.state.Japansongsname,
            datasets:[
              {
                label:'Country Total songs',
                data:this.state.Japansongscount,
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
           
          }
        });
      }

      getChinaPieChartData = () =>{
        // Ajax calls here
        this.setState({
          ChinaPieChart:{
            labels: this.state.Chinasongsname,
            datasets:[
              {
                label:'Country Total songs',
                data:this.state.Chinasongscount,
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
           
          }
        });
      }

      getSingaporePieChartData = () =>{
        // Ajax calls here
        this.setState({
          SingaporePieChart:{
            labels: this.state.Singaporesongsname,
            datasets:[
              {
                label:'Country Total songs',
                data:this.state.Singaporesongscount,
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
           
          }
        });
      }


    render() { 
        return ( 
            <div>
            
            <div className="margin_pie">
        <Bar
          data={this.state.chartData}
          width={500}
          height={200}
          options={{
            title:{
              display:true,
              text:'Top Most 5 Trending Songs in the World',
              fontSize:25
            },
            legend:{
              display:false,
              position:'right'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
          }}
        />
</div>
        
<div className="margin_pie">
        <Doughnut
          data={this.state.CountrywisepieChart}
          width={500}
          height={500}
          options={{
            responsive: true,
    maintainAspectRatio: false,
            title:{
              display:true,
              text:'Country Wise Data',
              fontSize:25
            },
            legend:{
              display:true,
              position:'top'
            }
          }}
        />
      </div>
      <div className="margin_pie">

      <Pie
          data={this.state.UnitedStatesPieChart}
          width={500}
          height={500}
          options={{
            responsive: true,
    maintainAspectRatio: false,
            title:{
              display:true,
              text:'United States Trending Songs',
              fontSize:25
            },
            legend:{
              display:true,
              position:'top'
            }
          }}
        />
      </div>

      <div className="margin_pie">

      <Pie
          data={this.state.IndiaPieChart}
          options={{
            title:{
              display:true,
              text:'India Trending Songs',
              fontSize:25
            },
            legend:{
              display:true,
              position:'top'
            }
          }}
        />
      </div>
      <div className="margin_pie">
        <Pie
            data={this.state.JapanPieChart}
            options={{
              title:{
                display:true,
                text:'Japan Trending Songs',
                fontSize:25
              },
              legend:{
                display:true,
                position:'top'
              }
            }}
          />
      </div>
      <div className="margin_pie">
        <Pie
            data={this.state.ChinaPieChart}
            options={{
              title:{
                display:true,
                text:'China Trending Songs',
                fontSize:25
              },
              legend:{
                display:true,
                position:'top'
              }
            }}
          />
      </div>
      <div className="margin_pie">
        <Pie
            data={this.state.SingaporePieChart}
            
            options={{
              title:{
                display:true,
                text:'Singapore Trending Songs',
                fontSize:25
              },
              legend:{
                display:true,
                position:'top'
              }
            }}
          />
      </div>
      </div>
         );
    }
}
 
export default Dashboard;