import {useDispatch,} from "react-redux";
import {useEffect} from "react";
import {closeMenu} from "../REDUX/UI/appSlice.ts";
import {useSearchParams} from "react-router-dom";
import SmallYoutube from "../COMPONENTS/SmallYoutube.tsx";
import MainComments from "../COMPONENTS/MainComments.tsx";



const Watch = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const searchP = searchParams.get("v")


    useEffect(() => {
        dispatch(closeMenu())
    }, []);

    return (
        <div className=" min-h-screen w-screen h-screen overflow-x-auto bg-zinc-950  absolute z-30left-2">
            <div className="w-full flex items-center justify-center flex-col">
                <iframe className="h-[74vh] w-full aspect-video  mt-14 " src={"https://www.youtube.com/embed/" + searchP +"&modestbranding=0&rel=0&showinfo=0"}
                          title="YouTube video player"
                          allow="autoplay"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen></iframe>
                <div className="h-[200vh] w-full  grid grid-cols-6 ">
                    <MainComments></MainComments>
                  <div className=" h-full col-span-2 relative w-full"><SmallYoutube/></div>
                </div>
            </div>

        </div>
    )

}

export default Watch;
