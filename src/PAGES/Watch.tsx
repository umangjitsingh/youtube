import {useDispatch,} from "react-redux";
import {useEffect} from "react";
import {closeMenu,} from "../REDUX/UI/appSlice.ts";
import {useSearchParams} from "react-router-dom";



const Watch = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const searchP = searchParams.get("v")


    useEffect(() => {
        dispatch(closeMenu())
    }, [dispatch]);

    return (
        <div className="h-full  w-full bg-zinc-950  absolute z-50 ">
            <iframe className="h-[70%] w-2/3 absolute top-16 left-4 rounded-md " src={"https://www.youtube.com/embed/" + searchP}
                    title="YouTube video player"
                    allow="autoplay"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
        </div>
    )

}

export default Watch;
