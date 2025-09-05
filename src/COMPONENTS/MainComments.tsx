import Chat from "./Chat.tsx";
import ShareAndLike from "./ShareAndLike.tsx";


const MainComments = () => {
    return (
        <div className="bg-indigo-800 h-[160vh] col-span-4 z-10">
            <ShareAndLike/>
            <Chat/>
        </div>
    )
}
export default MainComments
