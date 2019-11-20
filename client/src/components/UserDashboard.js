import React, { Component } from "react";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import { dashboard } from "./UserFunctions";
import "./sh.css";
class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
      filename: [],
      countBar: []
    };
  }
  componentDidMount() {
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
  }
  getChartData = () => {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: this.state.filename,
        datasets: [
          {
            // label:this.state.filename[0],
            data: this.state.countBar,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ],
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      }
    });
  };
  render() {
    return (
      <div>
        
        <div className="margin_pie">
          <Bar
            data={this.state.chartData}
            width={500}
            height={200}
            options={{
              title: {
                display: true,
                text: "Top Most 5 Trending Songs in the World",
                fontSize: 25
              },
              legend: {
                display: false,
                position: "right"
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true
                    }
                  }
                ]
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default UserDashboard;
