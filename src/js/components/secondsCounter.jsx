import React from "react";

import CounterItem from "./counterItem.jsx";
import CounterButton from "./counterButton.jsx";

const SecondsCounter = () => {
    return (
        <div>
            <div className="counter-title">
                <h1>COUNTER</h1>
            </div>
            <div className="counter-body">
                <CounterItem value={<i class="fa-regular fa-clock"></i>} />
                <CounterItem value={0} />
                <CounterItem value={0} />
                <span>:</span>
                <CounterItem value={0} />
                <CounterItem value={0} />
                <span>:</span>
                <CounterItem value={0} />
                <CounterItem value={0} />
            </div>
            <div className="counter-buttons">
                <CounterButton value={<i class="fa-solid fa-pause"></i>} />
                <CounterButton value={<i class="fa-solid fa-play"></i>} />
                <CounterButton value={<i class="fa-solid fa-stop"></i>} />
            </div>
            <div className="counter-countdown">
                <input type="number" name="countdown" />
            </div>
            <div className="counter-footer">
                <span>Desing by <a href="https://github.com/s3rtr3s" target="_blank">Pedro Peña</a> whit <i>❤</i></span>
            </div>
        </div>
    );
};

export default SecondsCounter;