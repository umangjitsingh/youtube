import {useSelector} from "react-redux";
import type {RootState} from "../REDUX/appStore.ts";
import clsx from "clsx";


type Item={
snippet:{
    title:string;
    thumbnails:{
        standard:{
            url:string;
        }
    }
}
}
type ShortsProps= {
    short: {
        items:Item[];
    }
}

const Shorts = ({short}:ShortsProps) => {
    const smallYoutube =useSelector((store:RootState)=>store.app.smallYoutube)

    return (
        <div className= {clsx(
            " p-0 relative ",
            smallYoutube ? " overflow-hidden min-w-[8rem] max-w-[8rem]" : "w-[24rem] h-[29vw]"
        )}>
            <img
                className={clsx(
                    "rounded-2xl object-cover",
                    smallYoutube ? "w-30 h-48" : "w-full h-full scale-[98%]"
                )}
                src={short.items[2]?.snippet?.thumbnails?.standard?.url}
                alt={short.items[2]?.snippet?.title || "Short thumbnail"}
            />

            <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-black/0 hover:bg-black/60 transition duration-300 cursor-pointer"></div>

            <h1
                className={clsx("px-2 font-bold text-zinc-300 pb-0.5 line-clamp-2",
                    smallYoutube ? " text-sm w-32 overflow-hidden pt-2" : "text-base pt-2 max-w-[400px]")}
                title={short.items[2]?.snippet.title}
            >
                {short.items[2]?.snippet.title}
            </h1>
        </div>
    )

}
export default Shorts
