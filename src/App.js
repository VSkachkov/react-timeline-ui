import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from "react";
import moment from "moment";
import {
  Button,
  ButtonDropdown,
  ButtonGroup,
  Card, CardBody,
  CardHeader,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import Timeline from "react-visjs-timeline";
import NewAction from "./NewAction";
const groups = [
  {
    id: "a1",
    content: "Study"
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
    content: "Work",
    subgroupOrder: "sborder"
  },
  {
    id: "a3",
    content: "Life",
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
  stack: true,
  stackSubgroups: false,
  type: "range",
  width: "100%",
  zoomable: true,
  zoomKey: 'ctrlKey',
  zoomMin: 147600000,
  zoomMax: 51840000000
};
const INITIAL_ITEMS = [
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
        .subtract(4, "days")
        .format(),
    end: moment()
        .subtract(2, "days")
        .format(), // end is optional
    content: "Hi what's up",
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
const DisplayComponent = () => {
    const [items, setActions] = useState(INITIAL_ITEMS);
    let actionButtons;
    actionButtons = (
        <div className="card-header-actions">

          <ButtonGroup className="float-right">
            <ButtonDropdown isOpen={true}>
              <DropdownToggle className="p-0 btn btn-setting" color="transparent">
                <i
                    className="card-header-action btn btn-setting icon-settings"
                    title="Timeline actions"
                />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem disabled>{"Combine Systems"}</DropdownItem>
                <DropdownItem>Generate New PM's</DropdownItem>
                <DropdownItem>{"Show Action Plans"}</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
        </div>
    );

    const addActionHandler = (action) => {
      console.log("in saveNewActionHandler in App")
      console.log(action);
      setActions((prevActions)  => {
        return [action, ...prevActions];
      });
    };
    return (
        <div>
          <Card>
            <CardHeader>
              <strong>Timeline</strong>
              {actionButtons}
            </CardHeader>
            <NewAction onAddNewAction={addActionHandler}></NewAction>
            <CardBody>
              <Timeline options={options} items={items} groups={groups} />
            </CardBody>{" "}
          </Card>
        </div>
    );
}

export default DisplayComponent;
