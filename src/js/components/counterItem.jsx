import React from "react";

const CounterItem = props => {
    return (
        <div className="counter-item">
            <p>{props.value}</p>
        </div>
    );
};
 
export default CounterItem;