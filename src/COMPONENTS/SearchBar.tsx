import {CiSearch} from "react-icons/ci";
import {type ChangeEvent, useEffect, useState} from "react";
import {
    SEARCH_API
} from "../CONSTANTS/YOUTUBE_VIDEO_API.tsx";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../REDUX/appStore.ts";
import {
    setCacheSearch,

    setSearch
} from "../REDUX/UI/appSlice.ts";

export type SearchCache = {
    [key: string]: string[]; // or whatever type your suggestions are
};

const SearchBar = () => {
    const dispatch = useDispatch();
    const search: string = useSelector((store: RootState) => store?.app.search)
    const cache: SearchCache = useSelector((store: RootState) => store?.app.cacheSearch);


    const [suggestions, setSuggestions] = useState<string[]>([])


    useEffect(() => {
        const timer = setTimeout(() => {
            getSearchResults(search)
        }, 200)

        return () => {
            clearTimeout(timer)
        }
    }, [search]);


    const getSearchResults = async (search: string) => {
        try {

            if (cache[search]) {

                setSuggestions(cache[search]);
                return;
            }

            const response = await axios.get(SEARCH_API(search));
            const suggestedData = response?.data[1];
            setSuggestions(suggestedData);


            dispatch(setCacheSearch({ [search]: suggestedData }));
        } catch (e) {
            // @ts-ignore
            console.log(e.message);
        }
    };

    return (
        <div className=" relative">
            <input
                onBlur={() => {
                    dispatch(setSearch(""))
                }}
                value={search}
                onChange={(e: ChangeEvent<HTMLInputElement>) => [dispatch(setSearch(e.target.value)), dispatch(setCacheSearch(e.target.value))]}
                className="w-[12rem] sm:w-[22rem] md:w-[36rem] border border-zinc-700/60 rounded-full py-1.5 px-8 outline-none h-10 "
                type="text"
                placeholder="Search"/>
            <button className=" outline-none absolute right-0 top-0 text-2xl bg-zinc-800/70   text-zinc-300 py-2 px-6 rounded-r-full cursor-pointer">
                <CiSearch/></button>
            {search &&
               <div className="h-[46vh] w-[7rem] sm:w-[17rem] md:w-[31rem] bg-zinc-800 text-zinc-300 absolute top-11 left-2 rounded-lg overflow-y-auto scrollbar-hide">
                  <ul>
                      {suggestions?.map((curr, index) =>
                          <li key={index} className="flex gap-3 px-6 py-1 sm:py-2 text-[14px] font-semibold items-center hover:bg-zinc-700">
                              < CiSearch className="text-slate-300 text-xl"/> {curr}
                          </li>)}
                  </ul>
               </div>}
        </div>
    )
}
// @ts-ignore
export default SearchBar
