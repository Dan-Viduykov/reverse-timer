import React, { FC } from "react";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import './Header.scss'

interface HeaderProps {
    setDate: (value: any) => void;
}

const Header: FC<HeaderProps> = ({ setDate }) => {

    const handleChange = (value: any, dateString: string) => {
        setDate(dateString)
    };

    return (
        <div className="header">
            <h1 className="header__title">until the date left</h1>
            <DatePicker className="header__date" onChange={handleChange}/>
        </div>
    )
}

export default Header