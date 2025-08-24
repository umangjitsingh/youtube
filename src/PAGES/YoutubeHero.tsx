import VideoContainer
    from "../COMPONENTS/VideoContainer.tsx";
import type {RootState} from "../REDUX/appStore.ts";
import {useSelector} from "react-redux";


const YoutubeHero = () => {
    const hamburger=useSelector((store:RootState)=>store?.app.hamburgerOpen)
    return (
        <main className={`${hamburger ? "bg-zinc-950 absolute left-20 top-0 pt-30 px-3 " : "bg-zinc-950 pt-30 left-60 absolute top-0 px-3 "}`}>
            <VideoContainer/>
        </main>
    )
}
export default YoutubeHero
