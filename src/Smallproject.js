import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './font-awesome/css/font-awesome.min.css';
import AmCharts from "@amcharts/amcharts3-react";
import Smalldescription from "./Smalldescription";
import WireframesPanel from "./Wireframespanel";
import WebDevPanel from "./Webdevpanel";
import ApprovalPanel from "./Approvalpanel";

let slice = null;

class Smallproject extends Component {
  constructor(props) {
  super(props);
  this.state = {
    sliceValue: null
  };

  this.handleRender = this.handleRender.bind(this);
}

handleRender(e) {
  let value = e.dataItem.value;
  let sliceColor = e.dataItem.color;

  this.setState({
    sliceValue: value
  })

  if ( document.getElementById("chartPanel").firstChild != null && document.getElementById("chartPanel").firstChild != undefined   ) {
    let $chartPanel = document.getElementById("chartPanel").firstChild;
    document.getElementById("chartPanel").firstChild.style.backgroundColor = sliceColor;
    document.getElementById("chartPanel").firstChild.style.color = 'white';
    document.getElementById("chartPanel").firstChild.style.fontWeight = 900;
  }
}

  render() {

    let description = null;

    switch(this.state.sliceValue) {
      case 2:
          description = <Smalldescription />;
          break;
      case 6:
          description = <WireframesPanel />;
          break;
      case 25:
          description = <WebDevPanel />;
          break;
      case 5:
          description = <ApprovalPanel />;;
          break;
    }

    const config = {
      "type": "pie",
      "listeners": [{
         "event": "clickSlice",
         "method": this.handleRender
      }],
      "theme": "dark",
      "dataProvider": [ {
        "title": "Project Outline",
        "value": 2
      },
     {
       "title": "Wireframes",
       "value": 6
     },
     {
       "title": "Website Development",
       "value": 25
     },
     {
       "title": "Client Approval",
       "value": 5
     }],
      "titleField": "title",
      "valueField": "value",
      "labelRadius": 20,
      "labelTickColor": "black",
      "color": "black",
      "radius": "42%",
      "innerRadius": "70%",
      "labelText": "[[title]]",
      "export": {
        "enabled": false
      }
    };

    return (
      <div className="Smallproject">
        <div id="alignCenter">
          <h1 id="experienceHeaders" className="title is-2">Small Project</h1>
          <h1 className="subtitle is-6">Click a slice to get more information</h1><br />
        </div>
        {description}
        <div className="content">
          <AmCharts.React style={{ width: "100%", height: "500px" }} options={config} />
        </div>
      </div>
    );
  }
}

export default Smallproject;