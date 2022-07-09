import React, { useState } from 'react';
// components

import AdminNavbar from "@/Components/Navbars/AdminNavbar.jsx";
import Sidebar from "@/Components/Sidebar/Sidebar.jsx";
import HeaderStats from "@/Components/Headers/HeaderStats.jsx";
import FooterAdmin from "@/Components/Footers/FooterAdmin.jsx";

//


export default function Authenticated({ auth, header, children })
{
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (

        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-slate-100">
                <AdminNavbar />
                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    {children}
                    <FooterAdmin />
                </div>
            </div>
        </>

    );
}


