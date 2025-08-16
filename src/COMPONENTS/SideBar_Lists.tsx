import * as React from "react";
import {useSelector} from "react-redux";
import type {RootState} from "../REDUX/appStore.ts";

type SideBarListsProps ={
    name:string;
    icon:React.ReactNode;
    onClick ?:()=> void;

}

const SideBarLists  = ({name,icon,onClick}:SideBarListsProps) => {
    const hamburger=useSelector((store:RootState)=>store.app.hamburgerOpen)
    return (
<li onClick={onClick}
    className={`${hamburger ? " w-[66px]  gap-1  hover:bg-zinc-700/60 py-3 rounded-lg text-[11px] flex flex-col items-center justify-center text-zinc-300" : "flex items-center   hover:bg-zinc-600/60 py-2 rounded-lg text-sm px-6 "  }`}>
    <div className={`${hamburger ? "text-2xl pl-3"  : "text-2xl pr-6"} `}>{icon}</div>
    <div className={`${hamburger ? "pl-3": "pl-0"}`}>{name}</div>
</li>
    )
}
export default SideBarLists

