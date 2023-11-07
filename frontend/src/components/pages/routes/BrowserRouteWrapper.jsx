import React from "react";
import { BrowserRouter, Routes } from 'react-router-dom'
import Header from "../../layout/header";
import { Layout } from "../../layout/index";

export const BrowserRouteWrapper = ({ children }) => {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        {children}
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    )
}