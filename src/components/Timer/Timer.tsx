import React, { FC } from "react";
import './Timer.scss'

interface TimerProps {
    gap: number
}

const Timer: FC<TimerProps> = ({ gap }) => {

    const messageCompleted = (
        <div className="completed-message">
            <span>c</span>
            <span>o</span>
            <span>m</span>
            <span>p</span>
            <span>l</span>
            <span>e</span>
            <span>t</span>
            <span>e</span>
            <span>d</span>
        </div>
    )

    const timer = (
        <>
            <div className="timer__unit">{Math.floor(gap/1000/60/60/24)}</div>
            <div className="timer__unit">{Math.floor(gap/1000/60/60)%24}</div>
            <div className="timer__unit">{Math.floor(gap/1000/60)%60}</div>
            <div className="timer__unit">{Math.floor(gap/1000)%60}</div>
        </>
    )

    return (
        <div className="timer">
            { gap < 0 ? messageCompleted : timer}
        </div>
    )
}

export default Timer