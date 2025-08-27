export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=NP&maxResults=48&key=" + import.meta.env.VITE_API_KEY;

export const SHORTS_VIDEO_API = (channelId: string):string => {
    const updatedChannelId = `UUSH${channelId.slice(2)}`
    return `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${updatedChannelId}&key=${import.meta.env.VITE_API_KEY}`;
}
