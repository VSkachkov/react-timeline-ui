import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Timeline from "react-visjs-timeline";

const options = {
    width: "100%",

    stack: true,
    stackSubgroups: false,
    showMajorLabels: false,
    showCurrentTime: false,
    zoomMin: 100 * 5 * 60,
    zoomMax: 1000 * 5 * 60,
    zoomable: false,
    start: new Date("October 14, 2018 10:56:00"),
    end: new Date("October 14, 2018 11:00:00"),
    min: new Date("October 14, 2018 10:56:00"),
    max: new Date("October 14, 2018 11:00:00"),
    type: "background",
    selectable: true,
    orientation: {
        item: "top"
    }
};
const items = [
    {
        start: new Date("October 14, 2018 10:56:00"),
        end: new Date("October 14, 2018 10:57:20"), // end is optional
        content: "Block A",
        group: "a1",
        title: "Title A",
        subgroup: 2,
        type: "range",
        sborder: 1
    },
    {
        start: new Date("October 14, 2018 10:56:30"),
        end: new Date("October 14, 2018 10:57:00"), // end is optional
        content: "Block B",
        group: "a1",
        title: "Title B",
        subgroup: 1,
        type: "range",
        sborder: 5
    },
    {
        start: new Date("October 14, 2018 10:57:10"),
        end: new Date("October 14, 2018 10:58:20"), // end is optional
        content: "Block C",
        group: "a1",
        title: "Title C",
        subgroup: 1,
        type: "range",
        sborder: 2
    },
    {
        start: new Date("October 14, 2018 10:57:25"),
        end: new Date("October 14, 2018 10:59:20"), // end is optional
        content: "Block D",
        group: "a1",
        title: "Title D",
        subgroup: 2,
        type: "range",
        sborder: 2
    }
];

const groups = [
    {
        id: "a1",
        content: "Sergei Action Plan",
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

const customTimes = {
    marker: new Date("October 14, 2018 10:56:30")
};

function App() {
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
        </div>
    );
}
function clickHandler(props) {
    console.log(props);
}
function selectHandler(props) {
    console.log("selected");
    console.log(props);
}

console.log("Starting this shit");
const rootElement = document.getElementById("root");
//ReactDOM.render(<Timeline selectHandler={selectHandler} clickHandler={clickHandler} options={options} items={items} />, rootElement);
//groups={groups}
ReactDOM.render(
    <Timeline
        selectHandler={selectHandler}
        options={options}
        items={items}
        groups={groups}
        customTimes={customTimes}
    />,
    rootElement
);
