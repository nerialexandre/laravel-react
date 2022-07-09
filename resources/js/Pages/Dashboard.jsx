import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

import CardLineChart from "@/Components/Cards/CardLineChart.jsx";
import CardBarChart from "@/Components/Cards/CardBarChart.jsx";
import CardPageVisits from "@/Components/Cards/CardPageVisits.jsx";
import CardSocialTraffic from "@/Components/Cards/CardSocialTraffic.jsx";

export default function Dashboard(props)
{
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <>
                <div className="flex flex-wrap">
                    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                        <CardLineChart />
                    </div>
                    <div className="w-full xl:w-4/12 px-4">
                        <CardBarChart />
                    </div>
                </div>
                <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                        <CardPageVisits />
                    </div>
                    <div className="w-full xl:w-4/12 px-4">
                        <CardSocialTraffic />
                    </div>
                </div>
            </>
        </Authenticated>
    );
}
