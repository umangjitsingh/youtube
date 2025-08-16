import Header from "./COMPONENTS/Header.tsx";
import {Outlet} from "react-router-dom"
import SideBar from "./COMPONENTS/SideBar.tsx";
import GroupOfButtons
    from "./COMPONENTS/GroupOfButtons.tsx";

const Layout = () => {
    return (
        <div className="relative font-rob">
            <Header/>
            <GroupOfButtons/>
            <SideBar/>
            <Outlet/>
        </div>
    )
}
export default Layout
