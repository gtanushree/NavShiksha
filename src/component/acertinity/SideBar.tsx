"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
    IconPencil,
    IconTrophy,
    IconBook2,
    IconBook,
    IconBuildingCommunity,
    IconUsersGroup,
    IconPencilCheck,
    IconMessageCircle
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../../lib/utils";
import LogoImage from "../../../public/assets/logowhatsapp-removebg-preview.png"

export default function SidebarDemo({ components }: { components: any }) {
    const links = [
        // {
        //     label: "Home",
        //     href: "#",
        //     icon: (
        //         <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        //     ),
        // },
        {
            label: "Profile",
            href: "/dashboard",
            icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Learn",
            href: "#",
            icon: (
                <IconPencil className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "LeaderBoard",
            href: "#",
            icon: (
                <IconTrophy className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "My Courses",
            href: "#",
            icon: (
                <IconBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Doubt Solving Section",
            href: "#",
            icon: (
                <IconUsersGroup className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        // {
        //     label: "FeedBack And Complaints",
        //     href: "#",
        //     icon: (
        //         <IconMessageCircle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        //     ),
        // },
        // {
        //     label: "Settings",
        //     href: "#",
        //     icon: (
        //         <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        //     ),
        // },
        // {
        //     label: "Logout",
        //     href: "#",
        //     icon: (
        //         <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        //     ),
        // },
    ];
    const [open, setOpen] = useState(false);
    return (
        <div
            className={cn(
                "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        {open ? <Logo /> : <LogoIcon />}
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SidebarLink
                            link={{
                                label: "Student",
                                href: "#",
                                icon: (
                                    <Image
                                        src="/assets/product-image.png"
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
            <Dashboard components={components} />
        </div>
    );
}
export const Logo = () => {
    return (
        <Link href="#" className="font-normal flex items-center space-x-4 text-sm text-black relative z-20">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                    src={LogoImage}
                    alt="Nav Shiksha Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                />
            </div>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium text-black dark:text-white whitespace-pre text-xl"
            >
                Nav Shiksha
            </motion.span>
        </Link>
    );
};

export const LogoIcon = () => {
    return (
        <Link href="#" className="font-normal flex justify-center items-center text-sm text-black relative z-20">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                    src={LogoImage}
                    alt="Nav Shiksha Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                />
            </div>
        </Link>
    );
};

const Dashboard = ({ components }: { components: any }) => {
    return (
        <div className="flex flex-1 flex-col h-full align-middle justify-center items-center">
            <div>
                {components}
            </div>
            {/* {components} */}
        </div>
    );
};
