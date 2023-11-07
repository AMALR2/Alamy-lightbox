import React from "react";
import { BrowserRouteWrapper } from "./BrowserRouteWrapper";
import {Home} from "../public/Home"
import {Route} from 'react-router-dom'

export const RouterHandler = () => {
    return (
        <BrowserRouteWrapper>
            <Route path="/" element={<Home/>}/> 
        </BrowserRouteWrapper>
    )
} 