import React from "react";
import {HeaderTitle} from "./HeaderTitle";
import { HeaderMenu } from "./HeaderMenu";
import './header.css'

const Header=()=>{
    return(
        <>
            <div className="row bg-black align-items-center px-1 py-1">
                <HeaderTitle/>
                <HeaderMenu/>
                
            </div>
        </>
    )
}

export default Header