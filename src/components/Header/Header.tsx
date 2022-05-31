import React, { FC, useRef, useState } from "react";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import './Header.scss'

interface HeaderProps {
    setDate: (value: string) => void;
}

const Header: FC<HeaderProps> = ({ setDate }) => {
    const [ valueDate, setValueDate ] = useState<string>(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`)
    const valueTime = useRef<HTMLInputElement | null>(null)

    const onChange = (value: any, stringValue: string) => setValueDate(stringValue)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const date = `${valueDate} ${valueTime.current?.value}`;
        setDate(date);
    }

    return (
        <header className="header">
            <h1 className="header__title">until the date left</h1>
            <form 
                className="header__date-time"
                onSubmit={handleSubmit} >
                <DatePicker className="header__date" onChange={onChange} />
                <input
                    className="header__time"
                    type="time"
                    ref={valueTime}
                    defaultValue={'00:00'} />
                <button className="header__button-submit" type="submit"></button>
            </form>
        </header>
    )
}

export default Header