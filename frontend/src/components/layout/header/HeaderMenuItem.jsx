import React from "react";
import { Link } from 'react-router-dom'

export const HeaderMenuItem = ({menuItem}) => {
    return (
        <li className="list-inline-item mx-3 menu-item">
            <Link to="/" className="text-decoration-none fs-18 f-istok menu-item"><i className={menuItem.icon}></i> {menuItem.title} </Link>
        </li>
    )
}