import React from "react";
import { createPopper } from "@popperjs/core";
import userPicture from "../../../assets/img/team-1-800x800.jpg"
import { Link } from '@inertiajs/inertia-react';

const UserDropdown = () =>
{
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () =>
    {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () =>
    {
        setDropdownPopoverShow(false);
    };
    return (
        <>
            <a
                className="text-slate-500 block"
                href="#pablo"
                ref={btnDropdownRef}
                onClick={(e) =>
                {
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
            >
                <div className="items-center flex">
                    <span className="w-12 h-12 text-sm text-white bg-slate-200 inline-flex items-center justify-center rounded-full">
                        <img
                            alt="..."
                            className="w-full rounded-full align-middle border-none shadow-lg"
                            src={userPicture}
                        />
                    </span>
                </div>
            </a>
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                }
            >
                <Link
                    href={route('logout')}
                    method="post"
                    as="button"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                >
                    Log Out
                </Link>

            </div>
        </>
    );
};

export default UserDropdown;
