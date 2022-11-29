import React from "react";

const CounterButton = props => {
    return (
        <button onClick={props.event} className="button">{props.value}</button>
    );
};
 
export default CounterButton;