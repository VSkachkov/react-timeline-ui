import React, { Component } from "react";
import ReactDOM from "react-dom";
import Timeline from "react-visjs-timeline";
import moment from "moment";

import "./scss/style.css";
import "react-toastify/dist/ReactToastify.css";
import "spinkit/css/spinkit.css";
import "./fleet.css";
import 'font-awesome/css/font-awesome.min.css';

import {
    ButtonGroup,
    Button,
    ButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Card,
    CardHeader,
    CardBody,
    icon
} from "reactstrap";
import App from "./App";

const groups = [
    {
        id: "a1",
        content: "Sergei Action Plan"
        /*     subgroupOrder: (a, b) => {
          console.log("What are we doing here??");
          console.log("A:", a, "B:", b);
          let r = 0;
          if (a.subgroup === 2) return (r = 1);
          if (b.subgroup === 5) return (r = -1);
          console.log("Result:", r);
          return r;
        } */
    },
    {
        id: "a2",
        content: "Group 2",
        subgroupOrder: "sborder"
    }
];
const options = {
    editable: {
        add: true,
        remove: false,
        updateGroup: false,
        updateTime: true
    },
    horizontalScroll: true,
    margin: {
        axis: 5,
        item: {
            vertical: 5,
            horizontal: 0
        }
    },
    moveable: true,
    orientation: {
        axis: "both",
        item: "top"
    },
    start: moment()
        .subtract(4, "days")
        .format(),
    end: moment()
        .add(4, "weeks")
        .format(),
    stack: false,
    stackSubgroups: false,
    type: "range",
    width: "100%",
    zoomable: true,
    zoomKey: 'ctrlKey',
    zoomMin: 147600000,
    zoomMax: 51840000000
};
const items = [
    {
        start: moment()
            .subtract(7, "days")
            .format(),
        end: moment()
            .subtract(1, "days")
            .format(), // end is optional
        content: "<img src=\"https://www.w3schools.com/images/w3schools_green.jpg\" alt=\"W3Schools.com\" style=\"width:128px;height:128px;\"><p>Hello World</p>",
        group: "a1"
    },
    {
        start: moment()
            .subtract(5, "days")
            .format(),
        end: moment().format(), // end is optional
        content: "Step2",
        group: "a2"
    }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<App wait={1000}/>, rootElement);
