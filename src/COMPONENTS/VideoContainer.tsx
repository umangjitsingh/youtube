

import VideoCard from "./VideoCard.tsx";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../REDUX/appStore.ts";
import { useEffect } from "react";
import { fetchVideos } from "../REDUX/THUNK/MoviesSlice.ts";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Shorts from "./Shorts.tsx";
import { SHORTS_VIDEO_API } from "../CONSTANTS/YOUTUBE_VIDEO_API.tsx";
import { fetchShorts } from "../REDUX/THUNK/ShortsSlice.ts";
import {SiShortcut} from "react-icons/si";

const VideoContainer = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, error } = useSelector((store: RootState) => store.movies);
    const { data: shortsData} = useSelector((store: RootState) => store.shorts);
    const hamburger = useSelector((store: RootState) => store.app.hamburgerOpen);

    useEffect(() => {
        dispatch(fetchVideos());
    }, [dispatch]);

    useEffect(() => {
        const shortsVideos = data?.slice(4, 10);
        const shortsChannelId = shortsVideos?.map((cur) => cur?.snippet?.channelId);
        if (shortsChannelId?.length) {
            const shortsUrlArray = shortsChannelId?.map((curId: string) => SHORTS_VIDEO_API(curId));
            // @ts-ignore
            dispatch(fetchShorts(shortsUrlArray));
        }
    }, [data, dispatch]);

    if (loading) return <p>Loading Movies ...</p>;
    if (error) return <p>Error : {error}</p>;

    const firstFourVideos = data?.slice(0, 4);
    const remainingVideos = data?.slice(10);

    return (
        <div
            className={clsx(
                'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 px-4',
                hamburger ? 'w-[calc(100vw-6rem)]' : 'w-[calc(100vw-16rem)]'
            )}
        >
            {firstFourVideos?.map((curr) => (
                <Link key={curr.id} to={`/watch?v=${curr.id}`}>
                    <VideoCard movie={curr} />
                </Link>
            ))}

            {shortsData && shortsData?.length > 0 && (
                <div className="col-span-4 py-18 ">
                    <div className="text-lg font-semibold text-white mb-2 px-4 pb-4 flex gap-2 items-center ">
                    <SiShortcut className="text-red-600 text-2xl font-bold"/>
                    <h3 className="text-xl">Shorts</h3>
                    </div>
                    <div className="flex gap-2 ">
                        {shortsData?.map((curr) => (
                            <Shorts key={curr.id} short={curr} />
                        ))}
                    </div>
                </div>
            )}
            {remainingVideos?.map((curr) => (
                <Link key={curr.id} to={`/watch?v=${curr.id}`}>
                    <VideoCard movie={curr} />
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;