import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../../Components/Header";

const AppLayout = () => {
    return (
        <>
            <div style={{ zIndex: 1 }}>
                <Header />
            </div>

            <div style={{ height: "100%" }}>
                <Outlet />
            </div>

        </>
    );
};

export default AppLayout;
