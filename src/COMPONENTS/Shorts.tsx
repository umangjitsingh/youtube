


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

    return (
        <div className="relative p-0 w-[24rem] h-[29vw]">
            <img
                className="rounded-2xl w-full h-full object-cover scale-[98%]"
                src={short.items[2]?.snippet?.thumbnails?.standard?.url}
                alt={short.items[2]?.snippet?.title || "Short thumbnail"}
            />

            <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-black/0 hover:bg-black/60 transition duration-300 cursor-pointer"></div>

            <h1
                className="text-base pt-2 max-w-[400px] px-2 font-bold text-zinc-300 pb-0.5 line-clamp-2"
                title={short.items[2]?.snippet.title}
            >
                {short.items[2]?.snippet.title}
            </h1>
        </div>
    )

}
export default Shorts
