import React, { useState } from "react";

import CounterItem from "./counterItem.jsx";
import CounterButton from "./counterButton.jsx";

const SecondsCounter = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    const timeId = setTimeout(() => {
        setSeconds(seconds + 1);
    }, 1000);

    const pauseCounter = () => {
        clearTimeout(timeId);
    };

    const startCounter = () => {
        setTimeout(() => {
            setSeconds(seconds + 1);
        }, 1000);
    };

    const resetCounter = () => {
        pauseCounter();
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    };

    if (minutes == 60) {
        setSeconds(0);
        setMinutes(0);
        setHours(hours + 1)
    } else if (seconds === 60) {
        setSeconds(0);
        setMinutes(minutes + 1)
    }

    let arrSeconds = Array.from(String(seconds), Number);
    let arrMinutes = Array.from(String(minutes), Number);
    let arrHours = Array.from(String(hours), Number);

    return (
        <div>
            <div className="counter-title">
                <h1>COUNTER</h1>
            </div>
            <div className="counter-body">
                <CounterItem value={<i className="fa-regular fa-clock"></i>} />
                <CounterItem value={arrHours.length > 1? arrHours[arrHours.length -2] : 0} />
                <CounterItem value={arrHours[arrHours.length - 1]} />
                <span>:</span>
                <CounterItem value={arrMinutes.length > 1? arrMinutes[arrMinutes.length -2] : 0} />
                <CounterItem value={arrMinutes[arrMinutes.length - 1]} />
                <span>:</span>
                <CounterItem value={arrSeconds.length > 1? arrSeconds[arrSeconds.length -2] : 0} />
                <CounterItem value={arrSeconds[arrSeconds.length - 1]} />
            </div>
            <div className="counter-buttons">
                <CounterButton event={pauseCounter} value={<i className="fa-solid fa-pause"></i>} />
                <CounterButton event={startCounter} value={<i className="fa-solid fa-play"></i>} />
                <CounterButton event={resetCounter} value={<i className="fa-solid fa-rotate-left"></i>} />
            </div>
            <div className="counter-footer">
                <span>Desing by <a href="https://github.com/s3rtr3s" target="_blank">Pedro Peña</a> whit <i>❤</i></span>
            </div>
        </div>
    );
};

export default SecondsCounter;