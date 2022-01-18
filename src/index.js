import React, { Component } from "react";
import ReactDOM from "react-dom";
import Timeline from "react-visjs-timeline";
import moment from "moment";
import App from './App';

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
import DisplayComponent from "./App";



const rootElement = document.getElementById("root");
ReactDOM.render(<DisplayComponent />, rootElement);
// ReactDOM.render(<App />, rootElement);
