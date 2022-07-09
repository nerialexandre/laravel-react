import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

import FooterSmall from "@/Components/Footers/FooterSmall.jsx";

export default function Guest({ children })
{
    return (
            <main>
                <section className="relative w-full h-full py-40 min-h-screen">
                    <div
                        className="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"
                    >

                    </div>
                    {children}
                    <FooterSmall absolute />
                </section>
            </main>
    );
}
