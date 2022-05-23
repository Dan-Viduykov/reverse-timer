import React, { FC } from "react";
import './Timer.scss'

interface TimerProps {
    gap: number
}

const Timer: FC<TimerProps> = ({ gap }) => {
    return (
        <div className="timer">
            <div className="timer__unit">{Math.floor(gap/1000/60/60/24)}</div>
            <div className="timer__unit">{Math.floor(gap/1000/60/60)%24}</div>
            <div className="timer__unit">{Math.floor(gap/1000/60)%60}</div>
            <div className="timer__unit">{Math.floor(gap/1000)%60}</div>
        </div>
    )
}

export default Timer