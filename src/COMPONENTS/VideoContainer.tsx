import VideoCard from "./VideoCard.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {
    AppDispatch,
    RootState
} from "../REDUX/appStore.ts";
import {useEffect} from "react";
import {fetchVideos} from "../REDUX/THUNK/MoviesSlice.ts";
import clsx from "clsx";


const VideoContainer = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {data, loading, error} = useSelector((store: RootState) => store?.movies)
    const hamburger = useSelector((store: RootState) => store.app.hamburgerOpen);

    useEffect(() => {
        dispatch(fetchVideos())
    }, [dispatch])

    if (loading) return <p>Loading Movies ...</p>
    if (error) return <p>Error : {error}</p>


    return (
        <div
            className={clsx(
                'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 px-4',
                hamburger ? 'w-[calc(100vw-6rem)]' : 'w-[calc(100vw-16rem)]'
            )}
        >


        {data && data.length > 0 && data?.map((curr) =>
                <VideoCard key={curr.id} movie={curr}/>)}
        </div>


    )
}
export default VideoContainer
