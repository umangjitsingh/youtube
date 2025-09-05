import SbHomeSubscribe from "./SB_Home_Subscribe.tsx";
import LineBreak from "./LineBreak.tsx";
import SbYou from "./SB_You.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../REDUX/appStore.ts";
import SideBarLists from "./SideBar_Lists.tsx";
import {HiOutlineUserCircle} from "react-icons/hi";
import {useEffect} from "react";
import {
    smallYoutubeHamburger
} from "../REDUX/UI/appSlice.ts";



const SideBar = () => {
    const hamburger = useSelector((store: RootState) => store.app.hamburgerOpen);
    const dispatch= useDispatch();


    useEffect(() => {
        dispatch(smallYoutubeHamburger(true))
    }, []);

    return (
        <aside className="absolute top-0 left-0 z-20">
            <div className={`${hamburger ? "w-[82px] h-screen bg-zinc-950 fixed" : "w-60 h-screen bg-zinc-950 fixed"}`}>

                <SbHomeSubscribe />
                {hamburger ? (
                    <SideBarLists name="You" icon={<HiOutlineUserCircle />} />
                ) : (
                    <>
                        <LineBreak />
                        <SbYou />
                        <LineBreak />
                    </>
                )}

            </div>
        </aside>
    )
}
// @ts-ignore
export default SideBar
