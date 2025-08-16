import Button from "./Button.tsx";
import { SlArrowRight ,SlArrowLeft } from "react-icons/sl";
import {useSelector} from "react-redux";
import type {RootState} from "@reduxjs/toolkit/query";

const buttonLabels = [
    { label: "All", variant: "light" },
    { label: "Javascript", variant: "dark" },
    { label: "Music", variant: "dark" },
    { label: "Classrooms", variant: "dark" },
    { label: "Games", variant: "dark" },
    { label: "Functions", variant: "dark" },
    { label: "Microsoft", variant: "dark" },
    { label: "Live", variant: "dark" },
    { label: "Server", variant: "dark" },
    { label: "Podcasts", variant: "dark" },
    { label: "Microservices", variant: "dark" },
    { label: "Compiler", variant: "dark" },
    { label: "AI", variant: "dark" },
    { label: "Mixes", variant: "dark" },
    { label: "Typescript", variant: "dark" },
    { label: "Watched", variant: "dark" },
    { label: "Recently uploaded", variant: "dark" },
    { label: "Electronics", variant: "dark" },
    { label: "New to you", variant: "dark" },
    { label: "Animated films", variant: "dark" },
];

const GroupOfButtons = () => {

    const hamburger=useSelector((store:RootState)=>store.app.hamburgerOpen)
    return (
<div className={`${hamburger ? "fixed top-14 left-0  w-screen":"fixed top-14 left-20 "} bg-black/80 backdrop-blur-2xl z-20 h-12 w-[calc(100vw-80px)] max-w-full`} >
    <div className="relative py-3" >
        <button className=" bg-black text-zinc-300 p-2 rounded-full hover:bg-zinc-700 absolute top-3 left-29 hover:border-3 hover:border-zinc-700">
            <SlArrowLeft className="text-xs"/>
        </button>
        <div className="pl-40 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide scroll-smooth">
            {buttonLabels.map(({ label, variant }) => (
                <Button key={label} variant={variant}>
                    {label}
                </Button>
            ))}
        </div>
        <button className="bg-black text-zinc-300 p-2 rounded-full hover:bg-zinc-700 absolute top-3 right-0 hover:border-3 hover:border-zinc-700">
            <SlArrowRight className="text-xs"/>
        </button>
    </div>
</div>


    );
};

export default GroupOfButtons;

