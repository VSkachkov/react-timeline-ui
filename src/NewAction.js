import React from "react";
import ActionForm from "./ActionForm";



const NewAction = (props) => {
    const saveActionDataHandler = (enteredActionData) => {
        const actionData = {
            ... enteredActionData
        }
        console.log("In saveActionDataHandle")
        console.log(actionData);
        props.onAddNewAction(actionData);
    }


    return <div>
        <ActionForm onSaveAction = {saveActionDataHandler}>
        </ActionForm>
    </div>

};

export  default NewAction;