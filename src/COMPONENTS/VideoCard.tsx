import {useSelector} from "react-redux";
import type {RootState} from "../REDUX/appStore.ts";
import {formatNumber,getRelativeTime,formatDuration} from "../HELPERS/helperFunctions.ts"
import {GoDotFill} from "react-icons/go";

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
    const hamburger = useSelector((store: RootState) => store.app.hamburgerOpen);
    const{title,thumbnails,channelTitle,publishedAt}=movie?.snippet;
    const{viewCount}=movie?.statistics;
    const {duration}=movie?.contentDetails;

    return (
        <div className=" p-1  ">
           <div className="relative">
               <img className={`${hamburger ? "rounded-2xl w-full p-1 " : "rounded-2xl  w-full p-1 "} `} src={thumbnails.medium.url} alt=""/>
               <span className="text-zinc-200 px-1 py-0.5 rounded bg-black/80 text-xs font-semibold absolute right-4 bottom-4 z-10">{formatDuration(duration)}</span>
           </div>
            <h1 className="text-base pt-2 max-w-[400px] pl-8 font-bold text-zinc-300 pb-0.5">{title}</h1>
            <p className="text-zinc-400 text-[13px] font-medium pl-8 pb-0.5">{channelTitle}</p>
            <div className="flex gap-1.5 pl-8 text-zinc-200">
                <p className="text-zinc-400 text-xs  flex items-center justify-center gap-1.5">{formatNumber(Number(viewCount))} views  <GoDotFill className="text-[6px]"/></p>
                <p className="text-zinc-400 text-xs ">{getRelativeTime(publishedAt)}</p>
            </div>
        </div>
    )
}
export default VideoCard


