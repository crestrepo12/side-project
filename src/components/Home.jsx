import React, { Component } from "react";
// import BChart from "./LineChart";
// import BillboardChart from 'react-billboardjs';
// import 'react-billboardjs/lib/billboard.css';
import ReCharts from "./ReCharts";



class Home extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     data: this.props.data
        // }
    }

  render() {
//    const billboardStyle ={
//        backgroundColor: 'beige'
//    }

   const ReChartsStyle = {
       backgroundColor: "lightBlue",
       margin: "40px"
   }
    return (
      <div>
        <h1>Hello There!</h1>
       
       {/* <div style={billboardStyle}>
        <BChart />
       </div> */}

       <div style={ReChartsStyle}>
           <ReCharts />
       </div>

      </div>
    );
  }
}

export default Home;
