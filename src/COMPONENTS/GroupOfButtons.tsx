import Button from "./Button.tsx";
import {SlArrowRight, SlArrowLeft} from "react-icons/sl";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../REDUX/appStore.ts";
import {useEffect, useRef, useState} from "react";

import clsx from "clsx";
import {
    smallYoutubeHamburger
} from "../REDUX/UI/appSlice.ts";

const buttonLabels = [
    {label: "All", variant: "light"},
    {label: "Javascript", variant: "dark"},
    {label: "Music", variant: "dark"},
    {label: "Classrooms", variant: "dark"},
    {label: "Games", variant: "dark"},
    {label: "Functions", variant: "dark"},
    {label: "Microsoft", variant: "dark"},
    {label: "Live", variant: "dark"},
    {label: "Server", variant: "dark"},
    {label: "Podcasts", variant: "dark"},
    {label: "Microservices", variant: "dark"},
    {label: "Compiler", variant: "dark"},
    {label: "AI", variant: "dark"},
    {label: "Mixes", variant: "dark"},
    {label: "Typescript", variant: "dark"},
    {label: "Watched", variant: "dark"},
    {label: "Recently uploaded", variant: "dark"},
    {label: "Electronics", variant: "dark"},
    {label: "New to you", variant: "dark"},
    {label: "Animated films", variant: "dark"},
];

type GroupOfButtonsProps = {
    position?: 'fixed' | 'relative';
    className?: string;
}

const GroupOfButtons = ({position = 'fixed', className}: GroupOfButtonsProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const hamburger: boolean = useSelector((store: RootState) => store.app.hamburgerOpen);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);


    function handleScroll(direction: 'left' | 'right') {
        const el = scrollRef.current;
        if (!el) return;

        const scrollAmount = direction === 'left' ? -200 : 200;

        el.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleScrollEvent = () => {
            const {scrollLeft, scrollWidth, clientWidth} = el;
            setIsAtStart(scrollLeft <= 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1)
        }
        el.addEventListener('scroll', handleScrollEvent);
        handleScrollEvent();
        return () => el.removeEventListener("scroll", handleScrollEvent);

    }, [])

    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(smallYoutubeHamburger(false))
    }, [position==="relative"]);

    return (
        <div
            className={clsx(
                position === 'fixed' ? [
                    'fixed z-20',
                    hamburger ? 'top-14 left-0 w-screen' : 'top-14 left-20'
                ] : 'relative',
                'bg-black/80 backdrop-blur-2xl h-12 w-[calc(100vw-80px)] max-w-full',
                className
            )}
        >

            <div className={clsx(
                position === 'fixed' && "relative py-3",
                position === 'relative' && "-translate-x-1/10 py-3 "
            )}>

                {!isAtStart &&
                   <button className={clsx(
                       position === "fixed" && !hamburger ? "left-39" : "left-19",
                       "bg-black/90 text-zinc-300 p-2 rounded-full hover:bg-zinc-700 absolute top-3 hover:border-3 hover:border-zinc-700 z-50",
                       position === "relative" && "-translate-x-[70%]"
                   )}


                           onClick={() => handleScroll("left")}>
                      <SlArrowLeft className={clsx(
                          'text-xs'
                      )}/>
                   </button>}

                <div className={`${!hamburger ? "pl-42" : "pl-22"} flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide scroll-smooth`}
                     ref={scrollRef}>
                    {buttonLabels.map(({label, variant}) => (
                        <Button key={label} variant={variant}>
                            {label}
                        </Button>
                    ))}
                </div>

                {!isAtEnd &&
                   <button className="bg-black text-zinc-300 p-2 rounded-full hover:bg-zinc-700 absolute top-3 right-0 hover:border-3 hover:border-zinc-700"
                           onClick={() => handleScroll("right")}>
                      <SlArrowRight className="text-xs"/>
                   </button>}
            </div>
        </div>
    );
};

export default GroupOfButtons;

