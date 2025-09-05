import VideoCard from "./VideoCard.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {
    AppDispatch,
    RootState
} from "../REDUX/appStore.ts";
import {useEffect, useRef} from "react";
import {fetchVideos} from "../REDUX/THUNK/MoviesSlice.ts";
import clsx from "clsx";
import {Link} from "react-router-dom";
import Shorts from "./Shorts.tsx";
import {
    SHORTS_VIDEO_API
} from "../CONSTANTS/YOUTUBE_VIDEO_API.tsx";
import {fetchShorts} from "../REDUX/THUNK/ShortsSlice.ts";
import {SiShortcut} from "react-icons/si";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {
    setIsAtEnd,
    setIsAtStart
} from "../REDUX/UI/appSlice.ts";


const VideoContainer = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {data, loading, error} = useSelector((store: RootState) => store.movies);
    const {data: shortsData} = useSelector((store: RootState) => store.shorts);
    const hamburger = useSelector((store: RootState) => store.app.hamburgerOpen);
    const smallYoutube = useSelector((store: RootState) => store.app.smallYoutube);
    const atStart = useSelector((store: RootState) => store.app.isAtStart)
    const atEnd = useSelector((store: RootState) => store.app.isAtEnd)
    const scrollRef = useRef<HTMLDivElement>(null);

    console.log("start",atStart);
    console.log("end",atEnd)


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

    const firstFourVideos = data?.slice(0, 4);
    const remainingVideos = data?.slice(10);
    const regularYoutubeStyles = clsx(
        'grid  px-4',
        hamburger ? 'w-[calc(100vw-6rem)] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6' :
            'w-[calc(100vw-16rem)] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6'
    );

    const smallYoutubeStyles = clsx('p-4')

    function handleScroll(direction: 'left' | 'right') {
        const el = scrollRef.current;
        if(!el) return;
        const scrollAmount = direction === 'left' ? -200 : 200;

        el.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        const el=scrollRef.current;
        if(!el) return;
        const handleScrollEvent =()=>{
            const {scrollWidth,clientWidth,scrollLeft}=el;
            dispatch(setIsAtStart(scrollLeft <= 0));
            dispatch(setIsAtEnd(scrollLeft + clientWidth/2 >= scrollWidth + 10 ));
            console.log(clientWidth)


        }
        el.addEventListener("scroll",handleScrollEvent);
        handleScrollEvent();
        return ()=>el.removeEventListener("scroll",handleScrollEvent);
    }, [dispatch]);




    return (
        <div
            className={`${smallYoutube ? smallYoutubeStyles : regularYoutubeStyles}`
            }
        >
            {loading && <p>Loading Movies ...</p>}
            {error && <p>Error : {error}</p>}
            {!loading && !error && (

                <>
                {!smallYoutube && firstFourVideos?.map((curr) => (
                    <Link key={curr.id} to={`/watch?v=${curr.id}`}>
                        <VideoCard movie={curr}/>
                    </Link>
                ))}

                {shortsData && shortsData?.length > 0 && (
                    <div className={clsx("col-span-4",
                        smallYoutube ? "py-4" : "py-18"
                    )}>
                        <div className="text-lg font-semibold text-white mb-2 px-4 pb-4 flex gap-2 items-center ">
                            <SiShortcut className="text-red-600 text-2xl font-bold"/>
                            <h3 className="text-xl">Shorts</h3>
                        </div>
                        <div className="relative ">
                            {!atStart && ( <button className={clsx(
                                "bg-black/90 text-zinc-300 p-2 rounded-full hover:bg-zinc-700 absolute top-2/5 transform -translate-y-1/2 left-0 hover:border-3 hover:border-zinc-700 z-[150]",
                            )}
                                                     onClick={() => handleScroll("left")}>
                                <SlArrowLeft className={clsx(
                                    'text-xs'
                                )}/>
                            </button>)
                              }



                                <div className="flex gap-2 pb-10 w-full overflow-x-scroll relative scrollbar-hide smooth-scroll " ref={scrollRef}>
                                    {shortsData?.map((curr,index) => (
                                        <Shorts key={index} short={curr}/>
                                    ))}
                                </div>



                            {!atEnd && ( <button className="bg-black text-zinc-300 p-2 rounded-full hover:bg-zinc-700 absolute top-2/5 right-0 hover:border-3 transform -translate-y-1/2 hover:border-zinc-700 z-50"
                                                   onClick={() => handleScroll("right")}>
                                <SlArrowRight className="text-xs"/>
                            </button>)

                              }
                        </div>


                    </div>
                )}
                {remainingVideos?.map((curr) => (
                    <Link key={curr.id} to={`/watch?v=${curr.id}`}>
                        <VideoCard movie={curr}/>
                    </Link>
                ))}
            </>

                )}


        </div>
    );
};

export default VideoContainer;