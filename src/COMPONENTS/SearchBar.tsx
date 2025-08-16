import {CiSearch} from "react-icons/ci";


const SearchBar = () => {
    return (
        <div className=" relative">
            <input
            className="w-[12rem] sm:w-[22rem] md:w-[36rem] border border-zinc-700/60 rounded-full py-2 px-4 "
                type="text"
            placeholder="Search"/>
            <button className="outline-none absolute right-0 top-0 text-2xl bg-zinc-800/70 border border-zinc-700/30 text-zinc-300 py-2 px-6 rounded-r-full cursor-pointer"><CiSearch /></button>
        </div>
    )
}
export default SearchBar
