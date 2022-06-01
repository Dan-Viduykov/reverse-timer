import React, { FC, useEffect, useState } from "react";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import './Header.scss'

interface HeaderProps {
    setDate: (date: Date) => void;
}

const Header: FC<HeaderProps> = ({ setDate }) => {
    const currentDate = new Date()
    
    const [ time, setTime ] = useState('00:00');
    const [ valueDate, setValueDate ] = useState(`${currentDate.getDate()} ${currentDate.getMonth()} ${currentDate.getFullYear()}`);

    const onChangeDate = (value: any, stringValue: string) => setValueDate(stringValue);
    const onChangeTime = (event: React.ChangeEvent<HTMLInputElement>) => setTime(event.target.value);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        setDate(new Date(`${time} ${valueDate}`));
    }

    return (
        <header className="header">
            <h1 className="header__title">until the date left</h1>
            <form className="header__date-time" onSubmit={handleSubmit} >
                <DatePicker className="header__date input" onChange={onChangeDate} />
                <input
                    className="header__time input"
                    type="time"
                    value={time}
                    onChange={onChangeTime}/>
                <button className="header__button-submit input" type="submit">Choose</button>
            </form>
        </header>
    )
}

export default Header