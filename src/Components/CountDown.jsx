import React, { useEffect, useState } from "react";
import './style.css'

export default function CountDown() {
    const [seconds, setSeconds] = useState(0);
    const [minuts, setMinuts] = useState(0);
    const [hours, setHours] = useState(0);
    const [active, setActive] = useState(false);

    const start = () => {
        setActive(true);
    }

    if (active === true) {
        if (seconds <= 59) {
            setTimeout(() => {
                setSeconds(seconds + 1);
            }, 1000);
        } else {
            setSeconds(0);
            setMinuts(minuts + 1);
            if (minuts === 59) {
                setMinuts(0);
                setHours(hours + 1);
            }
        }
    }

    const stop = () => {
        setActive(false);
    }

    return <>
        <div>
            <div className="container">
                <h3 className="text-center fw-bolder">Count Down</h3>
                <div className="text-center fw-bolder mt-3">
                    <span className="fs-5">Hours :</span>
                    <input type="text" className="hours p-1 col-1 bg-warning-subtle rounded text-center fs-5 mx-2" readOnly value={hours} />
                    <span className="fs-5">Minuts :</span>
                    <input type="text" className="minuts p-1 col-1 bg-warning-subtle rounded text-center fs-5 mx-2" readOnly value={minuts} />
                    <span className="fs-5">Seconds :</span>
                    <input type="text" className="seconds p-1 col-1 bg-warning-subtle rounded text-center fs-5 mx-2" readOnly value={seconds} />
                </div>
                <div className="text-center mt-3">
                    <button className="btn btn-success" onClick={start}>Start</button>
                    <button className="btn btn-danger ms-3" onClick={stop} >Stop</button>
                </div>
            </div>
        </div>
    </>
}