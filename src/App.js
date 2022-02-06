import logo from './logo.svg';
import './App.css';
import React, {Component, useState} from "react";
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
const INITIAL_OPTIONS = {
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
    start: "2018-01-01",
    end: "2018-01-05",
    stack: true,
    stackSubgroups: false,
    type: "range",
    width: "100%",
    zoomable: true,
    zoomKey: 'ctrlKey',
    zoomMin: 600000, // one minute
    zoomMax: 51840000000
};
const INITIAL_ITEMS = [
    {
        start: "2018-01-02",
        end: "2018-01-03", // end is optional
        content: "<img src=\"https://www.w3schools.com/images/w3schools_green.jpg\" style=\"width:128px;height:128px;\"><p>Hello World</p>",
        group: "a1"
    },
    {
        start: "2018-01-02",
        end: "2018-01-03", // end is optional
        content: "<p>Hi what's up</p> " +
            "<p>How is it</p>" +
            "<p>WoW</p>" +
            "<p>Asadasd</p>" +
            "<p>asdasdasd</p>",
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

function createMessageFromItem(item) {
    return '<h5>'+ item.authorName + '</h5>'
        // + item.text; //TODO
}

const App = () => {
    const [items, setActions] = useState(INITIAL_ITEMS);
    const [options, setOptions] = useState(INITIAL_OPTIONS);
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

    const rangeChangeHandler = (change) => {
        const new_options = {
            ...INITIAL_OPTIONS,
            start: change.start,
            end: change.end,
        };

        const request = {
            start: change.start,
            end: change.end
            // start: "2018-01-02",
            // end: "2018-01-03"
        };
        fetch("http://localhost:8080/get/messages/", {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            const transformedItems = data.map(item => {
                return {
                    start: item.msgDate,
                    end: moment(item.msgDate).add(50000000),
                    content: createMessageFromItem(item),
                    group: 'a1'
                }
            });
            setActions(transformedItems);
        });
        // setActions([item]);
        setOptions(new_options);
    }

    const addActionHandler = (action) => {
      const request = {
        // start: change.start,
        // end: change.end
        start: "2018-01-02",
        end: "2018-01-03"
      };
      fetch("http://localhost:8080/get/messages/", {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        return response.json();
      }).then(data => {
          console.log(data);
        const transformedItems = data.map(item => {
          return {
            start: item.msgDate,
            end: "2018-01-03",
            content: item.authorName,
            group: 'a1'
          }
        });
        setActions(transformedItems);
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
                    <Timeline options={options} items={items} groups={groups} rangechangeHandler={rangeChangeHandler}/>
                </CardBody>{" "}
            </Card>
        </div>
    );
}

export default App;
