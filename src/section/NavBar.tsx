// NavbarDemo.tsx
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../component/ui/navbar-menu";
import { cn } from "../../lib/utils";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function NavbarDemo({ onLoginClick }: { onLoginClick: any }) {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar onLoginClick={onLoginClick} className="" />
        </div>
    );
}

function Navbar({ className, onLoginClick }: { className?: string, onLoginClick: any }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className="fixed top-3 inset-x-0 mx-auto z-50 max-w-4xl px-4"> 
            <Menu setActive={setActive}>
                <div className="flex items-center px-6 gap-6 text-lg font-bold">
                        <Link href='#login-section'>
                            <MenuItem 
                                setActive={setActive} 
                                active={active} 
                                item="Login"
                            >
                                <HoveredLink href="#login-section" onClick={onLoginClick}>
                                    Join Us Now
                                </HoveredLink>
                            </MenuItem>
                        </Link>
                        
                        <MenuItem setActive={setActive} active={active} item="Traditional Skills">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/web-dev" onClick={onLoginClick}>Sewing</HoveredLink>
                                <HoveredLink href="/interface-design">Wood Crafting Art</HoveredLink>
                                <HoveredLink href="/branding">Management</HoveredLink>
                            </div>
                        </MenuItem>

                        <MenuItem setActive={setActive} active={active} item="Theoritical Courses">
                            <div className="text-sm grid grid-cols-2 gap-10 p-4">
                                <ProductItem
                                    title="Mathematics"
                                    href=""
                                    src="/assets/mathsnav.jpeg"
                                    description="Prepare for world of maths from class 1st to class 12th and Higher"
                                />
                                <ProductItem
                                    title="Chemistry"
                                    href=""
                                    src="/assets/physicsnav.jpeg"
                                    description="Chemistry for elementry and higher levels"
                                />
                                <ProductItem
                                    title="Physics"
                                    href=""
                                    src="/assets/chemnav.jpeg"
                                    description="Never learn complex physics with our teachers who makes physics understandable and easy"
                                />
                                <ProductItem
                                    title="English"
                                    href=""
                                    src="/assets/englishnav.jpeg"
                                    description="Learn Better English Especially Designed For Rural Areas"
                                />
                            </div>
                        </MenuItem>

                        <MenuItem setActive={setActive} active={active} item="Technical Courses">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                                <HoveredLink href="/interface-design">Designing</HoveredLink>
                                <HoveredLink href="/seo">Artificial Intellegence Machine Learning</HoveredLink>
                                <HoveredLink href="/branding">Branding</HoveredLink>
                                <HoveredLink href="/branding">Teaching</HoveredLink>
                            </div>
                        </MenuItem>

                        <MenuItem setActive={setActive} active={active} item="Contribute">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/hobby">Host Seminar</HoveredLink>
                                <HoveredLink href="/individual">Donation Camps</HoveredLink>
                                <HoveredLink href="/team">Upload Your Course</HoveredLink>
                                <HoveredLink href="/enterprise">Tech Non Tech Fair</HoveredLink>
                            </div>
                        </MenuItem>
                        <ThemeToggle className="ml-2" />
                </div>
            </Menu>
        </div>
    );
}