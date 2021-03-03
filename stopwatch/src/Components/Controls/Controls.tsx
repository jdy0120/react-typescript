import './Controls.css'

import React, { useState } from 'react';

type Props = {
    setTimeInSeconds: Function
}

export const Controls = (props:Props) => {
    const { setTimeInSeconds } = props;
    const [intervalId, setIntervalId] = useState<number>(0);

    const handleplayButton = () => {
        let interval:any = setInterval(() => {
            setTimeInSeconds((previousState:number) => previousState + 1);
        }, 1000);
        setIntervalId(interval);
    }

    const handlestopButton = () => {
        clearInterval(intervalId);
    }

    const handleresetButton = () => {
        clearInterval(intervalId);
        setTimeInSeconds(0);
        
    }
    
    return (
        <section className='controls-container'>
            <button onClick={handleplayButton}>Play</button>
            <button onClick={handlestopButton}>Stop</button>
            <button onClick={handleresetButton}>Reset</button>
        </section>
    )
}