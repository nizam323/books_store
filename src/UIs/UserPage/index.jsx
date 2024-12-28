import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Outlet } from "react-router";
import UserNavbar from "../../components/UserNavbar/UserNavbar";

export default function UserPage() {
    return (
        <>
            <UserNavbar />
            <Outlet />
            <Footer />
        </>
    )
}