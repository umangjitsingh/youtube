import GroupOfButtons from "./GroupOfButtons.tsx";
import VideoContainer from "./VideoContainer.tsx";



const SmallYoutube = () => {

    return (
        <div >
            <div className=" bg-black-600 h-14 w-full z-[200]  ">
                <GroupOfButtons position="relative" className="top-0"/>
            </div>
            <VideoContainer />
        </div>



    )
}
export default SmallYoutube
