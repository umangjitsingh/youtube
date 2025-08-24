import {useSelector} from "react-redux";
import type {RootState} from "../REDUX/appStore.ts";

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
        statistics:{viewCount:string;}
    }
}

const VideoCard = ({movie}:videoCardProps) => {
    const hamburger = useSelector((store: RootState) => store.app.hamburgerOpen);
    const{title,thumbnails,channelTitle,publishedAt}=movie?.snippet;
    const{viewCount}=movie?.statistics;

    function formatNumber(num: number): string {
        if (num >= 1_000_000) {
            return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1_000) {
            return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num.toString();
    }

    function getRelativeTime(timestamp: string): string {
        const now = new Date();
        const past = new Date(timestamp);
        const diffMs = now.getTime() - past.getTime();

        const seconds = Math.floor(diffMs / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours   = Math.floor(minutes / 60);
        const days    = Math.floor(hours / 24);

        if (days >= 1) return `${days} day${days > 1 ? 's' : ''} ago`;
        if (hours >= 1) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        if (minutes >= 1) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }


    return (
        <div className=" p-1 ">
            <img className={`${hamburger ? "rounded-2xl w-full p-1 " : "rounded-2xl  w-full p-1 "}`} src={thumbnails.medium.url} alt=""/>
            <h1 className="text-base pt-2 max-w-[400px] pl-8 font-bold text-zinc-300 pb-0.5">{title}</h1>
            <p className="text-zinc-400 text-[13px] font-medium pl-8 pb-0.5">{channelTitle}</p>
            <div className="flex gap-2 pl-8 text-zinc-200">
                <p className="text-zinc-400 text-xs font-medium">{formatNumber(Number(viewCount))}</p>
                <p className="text-zinc-400 text-xs font-medium">{getRelativeTime(publishedAt)}</p>
            </div>
        </div>
    )
}
export default VideoCard
