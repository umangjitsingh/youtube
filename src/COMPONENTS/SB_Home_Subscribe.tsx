
import {SB_HOME_ITEMS } from "../CONSTANTS/SBItems.tsx";
import SideBarLists from "./SideBar_Lists.tsx";

const SbHomeSubscribe = () => {
    return (
        <section aria-label="shorts-subscriptions">
            <ul className="text-zinc-300 pt-16 flex flex-col  font-medium gap-0.5">
                {SB_HOME_ITEMS.map((item,index)=>(
                    <SideBarLists key={index} name={item.name} icon={item.icon} />
                ))}
            </ul>
        </section>
    )
}
export default SbHomeSubscribe
