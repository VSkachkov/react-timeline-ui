import moment from "moment";
import React from "react";

const ActionForm = (props) => {
    const submitHandler=(event) => {
        event.preventDefault();
        const action =   {
            start: moment()
                .format(),
            end: moment()
                .add(2, "days")
                .format(), // end is optional
            content: "Brand new element",
            group: "a3"
        }
        props.onSaveAction(action);
    };

    return <div>
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label>Activity</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Start Date</label>
                    <input type="date"/>
                </div>
                <div>
                    <button type="submit">Add expense</button>
                </div>
            </div>
        </form>
    </div>
}

export default ActionForm;