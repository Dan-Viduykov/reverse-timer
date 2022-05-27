import React, { FC, useState, useEffect } from "react";
import Header from "../Header";
import Timer from "../Timer";
import './App.scss'


const App: FC = () => {
    const [ date, setDate ] = useState(new Date('01 01 2023 00:00:00'))
    const [ gap, setGap ] = useState(date.getTime() - new Date().getTime())

    useEffect(() => {
        setTimeout(() => {
            setGap(date.getTime() - new Date().getTime());
        }, 1000);
    }, [gap])

    const onChange = (value: string) => {
        setDate(new Date(value))
    }

    return (
        <div className="main">
            <div className="wrap">
                <Header setDate={onChange} />
                <Timer gap={gap}/>
            </div>
        </div>
    )
}

export default App