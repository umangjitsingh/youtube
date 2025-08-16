
type ButtonProps = {
    children: string;
    variant: string;
};

const Button = ({ children, variant }: ButtonProps) => {
    return (
        <button className={`${variant === 'light' ? "bg-zinc-300 text-black " : "bg-zinc-700/60 text-zinc-300 "} px-3 py-1 rounded-lg text-sm font-medium cursor-pointer`}>
            {children}
        </button>
    );
};

export default Button;
