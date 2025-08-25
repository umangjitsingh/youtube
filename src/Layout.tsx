import Header from "./COMPONENTS/Header.tsx";
import {Outlet} from "react-router-dom"
import SideBar from "./COMPONENTS/SideBar.tsx";
import GroupOfButtons
    from "./COMPONENTS/GroupOfButtons.tsx";

const Layout = () => {
    return (
        <div className="relative h-screen font-rob overflow-x-hidden scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-black overflow-y-scroll ">
            <Header/>
            <GroupOfButtons/>
            <SideBar/>
            <Outlet/>
        </div>
    )
}
export default Layout
