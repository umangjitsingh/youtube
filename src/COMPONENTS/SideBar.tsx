import SbHomeSubscribe from "./SB_Home_Subscribe.tsx";
import LineBreak from "./LineBreak.tsx";
import SbYou from "./SB_You.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "../REDUX/appStore.ts";
import SideBarLists from "./SideBar_Lists.tsx";
import {HiOutlineUserCircle} from "react-icons/hi";



const SideBar = () => {
    const hamburger = useSelector((store: RootState) => store.app.hamburgerOpen);

    return (
        <aside className="absolute top-0 left-0 z-20">
            <div className={`${hamburger ? "w-[82px] h-screen bg-zinc-950" : "w-60 h-screen bg-zinc-950"}`}>

                {hamburger ? <>
                        <SbHomeSubscribe/>
                         <SideBarLists name={'You'} icon={<HiOutlineUserCircle />}   />
                    </>
                    :
                    <><SbHomeSubscribe/>
                        <LineBreak/>
                        <SbYou/>
                        <LineBreak/></>}


            </div>
        </aside>
    )
}
export default SideBar
