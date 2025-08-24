
import {YOUTUBE_VIDEO_API} from "../CONSTANTS/YOUTUBE_VIDEO_API.tsx";
import {useFetchDataFromApis} from "../HOOKS/useFetchDataFromApis.ts";
import VideoCard from "./VideoCard.tsx";
import {useDispatch} from "react-redux";
import {addMostPopular} from "../REDUX/movieSlice.ts";
import {useEffect} from "react";

const VideoContainer = () => {
    const dispatch=useDispatch()
    const {data,error,loading}=useFetchDataFromApis(YOUTUBE_VIDEO_API);
    useEffect(()=>{
        if(data?.items){
            dispatch(addMostPopular(data.items))
        }
    },[data,dispatch])


    console.log(error)
    console.log(loading)

    return (
        <VideoCard/>
    )
}
export default VideoContainer
