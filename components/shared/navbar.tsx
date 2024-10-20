"use client";

import { Button } from "../ui/button";
import Image from 'next/image';
export function Navbar() {
    return (
        <header className=" w-full  py-4  bg-gradient-to-r from-softBlack to-softGreen">
            <div className="container flex justify-between items-center mx-auto w-full">
                <Image src={"/logo.svg"} width={271} height={24} alt="logo" />
                <nav className="flex items-center space-x-4">
                    <Button variant="link" className="text-softBlack">Marketplace</Button>
                    <Button variant="default" className="text-white">Rankings</Button>
                    <Button className="bg-purple text-white hover:bg-purple">Connect a wallet</Button>
                </nav>
            </div>

        </header>
    )
}