import React from "react";
import headerMenuLink from "../../../constants/headerMenuLink"
import { HeaderMenuItem } from "./HeaderMenuItem";

export const HeaderMenu = () => {
    return (
        <ul className="list-unstyled list-inline col-10 pt-3 text-end">
            {headerMenuLink.map((menuItem, index) => (
                <React.Fragment key={index}>
                    <HeaderMenuItem menuItem={menuItem} />
                    {index !== headerMenuLink.length - 1 && (
                        <span className="menu-item-divider">|</span>
                    )}
                </React.Fragment>
            ))}
        </ul>
    )
}
