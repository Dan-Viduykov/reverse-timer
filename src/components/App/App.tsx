import React, { FC, useState, useEffect } from "react";
import Header from "../Header";
import Timer from "../Timer";
import './App.scss'


const App: FC = () => {
    const [ date, setDate] = useState(new Date());
    const [ gap, setGap ] = useState(0);
    
    useEffect(() => {
        setTimeout(() => {
            setGap(date.getTime() - new Date().getTime());
        }, 1000);
        console.log(gap);
    }, [gap])

    const onChangeDate = (date: Date) => setDate(date);

    return (
        <div className="main">
            <div className="wrap">
                <Header setDate={onChangeDate} />
                <Timer gap={gap}/>
            </div>
        </div>
    )
}

export default App