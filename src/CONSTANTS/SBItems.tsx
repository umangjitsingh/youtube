import {
    MdOutlineSmartDisplay,
    MdOutlineSubscriptions
} from "react-icons/md";
import {SiShortcut} from "react-icons/si";
import {BiLike} from "react-icons/bi";
import {FaRegClock} from "react-icons/fa";
import {PiPlaylistDuotone} from "react-icons/pi";
import {LuHistory} from "react-icons/lu";
import {HiHome} from "react-icons/hi";


export const SB_HOME_ITEMS = [
   { name: "Home", icon: <HiHome /> },
   { name: "Shorts", icon: <SiShortcut /> },
   { name: "Subscriptions", icon: <MdOutlineSubscriptions />},
];

export const SB_YOU =[
    { name: "History", icon: <LuHistory /> },
    { name: "Playlists", icon: <PiPlaylistDuotone /> },
    { name: "Your videos", icon: <MdOutlineSmartDisplay /> },
    { name: "Watch later", icon: <FaRegClock /> },
    { name: "Liked videos", icon:<BiLike /> },
]

