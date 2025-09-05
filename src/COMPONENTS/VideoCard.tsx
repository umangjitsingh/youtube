import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../REDUX/appStore.ts";
import {formatNumber,getRelativeTime,formatDuration} from "../HELPERS/helperFunctions.ts"
import {GoDotFill} from "react-icons/go";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import clsx from "clsx";
import {setSmallYoutube} from "../REDUX/UI/appSlice.ts";

type videoCardProps={
    movie:{snippet:{
        title:string;
        thumbnails:{
            medium:{
                url:string;
            };
        };
        channelTitle:string;
        publishedAt:string;

        }
        statistics:{viewCount:string;};
        contentDetails:{duration:string;};
    }
}

const VideoCard = ({movie}:videoCardProps) => {
    const location = useLocation();
    const smallYoutube =useSelector((store:RootState)=>store.app.smallYoutube)
    const dispatch=useDispatch();
    const{title,thumbnails,channelTitle,publishedAt}=movie?.snippet;
    const{viewCount}=movie?.statistics;
    const {duration}=movie?.contentDetails;

    useEffect(() => {
        if(location.pathname === '/watch'){
          dispatch(setSmallYoutube(true));
        }else{
          dispatch(setSmallYoutube(false));
        }
    }, [location]);

    const regularYTStyle={
        img:clsx("rounded-2xl  w-full p-1 "),
        title:clsx("text-base pt-2 max-w-[400px] pl-8 font-bold text-zinc-300 pb-0.5")

    }

    return (
        <div className={clsx(
            "pb-1 pt-4"
        )}>
            <div className={`${smallYoutube && "flex items-center "}`}>
                <div className="relative">
                    <img className={`${smallYoutube ? " h-28 w-48 rounded-2xl": regularYTStyle.img} `} src={thumbnails.medium.url} alt=""/>
                    <span className="text-zinc-200 px-1 py-0.5 rounded bg-black/80 text-xs font-semibold absolute right-4 bottom-4 z-10">{formatDuration(duration)}</span>
                </div>
                <div className={`${smallYoutube ? "w-1/2" : "w-full"}`}>
                    <h1 className={`${smallYoutube ? "text-sm pl-4 pt-2 font-bold text-zinc-300 pb-0.5" : regularYTStyle.title}`}>{title}</h1>
                    <p className={clsx("text-zinc-400 text-[13px] font-medium  pb-0.5",
                        smallYoutube ? "pl-4" : "pl-8")}>{channelTitle}</p>
                    <div className={clsx("flex gap-1.5  text-zinc-200",
                        smallYoutube ? "pl-4" : "pl-8")}
                        >
                        <p className="text-zinc-400 text-xs  flex items-center justify-center gap-1.5">{formatNumber(Number(viewCount))} views  <GoDotFill className="text-[6px]"/></p>
                        <p className="text-zinc-400 text-xs ">{getRelativeTime(publishedAt)}</p>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default VideoCard


