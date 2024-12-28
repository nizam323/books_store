import React from "react";
import Footer from "../../components/Footer";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";

export default function PublicMainPageUI() {

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}