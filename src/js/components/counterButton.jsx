import React from "react";

const CounterButton = props => {
    return (
        <button className="button">{props.value}</button>
    );
}
 
export default CounterButton;