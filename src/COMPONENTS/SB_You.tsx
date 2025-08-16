
import {SB_YOU} from "../CONSTANTS/SBItems.tsx";
import SideBarLists from "./SideBar_Lists.tsx";
import {IoIosArrowForward} from "react-icons/io";

const SbYou = () => {
    return (
        <section aria-label="shorts-subscriptions">
            <div className="text-zinc-300 flex gap-2 text-[16px] font-bold px-6 pb-2 pt-5 items-center">You <IoIosArrowForward className="text-zinc-400"/> </div>
            <ul className="text-zinc-300 flex flex-col   font-medium gap-0.5">
                {SB_YOU.map((item,index)=>(
                    <SideBarLists key={index} name={item.name} icon={item.icon} />
                ))}
            </ul>
        </section>
    )
}
export default SbYou
