export const  formatNumber =(num: number): string => {
    if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1_000) {
        return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
}

 export const getRelativeTime = (timestamp: string): string => {
    const now = new Date();
    const past = new Date(timestamp);
    const diffMs = now.getTime() - past.getTime();

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours   = Math.floor(minutes / 60);
    const days    = Math.floor(hours / 24);

    if (days >= 1) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours >= 1) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes >= 1) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
}

export const formatDuration =(iso:string):string=>{
let mins:number=0;
let hours:number=0;
let secs:number=0;

let duration ="";
let removedPT :string=iso.slice(2)

    for(let char of removedPT){
        if(!isNaN(Number(char))){
            duration += char;
        }else{
            if(char === "H"){
                hours=parseInt(duration)
            }
            else if(char === "M"){
                mins=parseInt(duration)
            }
            else if(char ==="S"){
                secs=parseInt(duration)
            }
            duration="";
        }
    }
    if (hours > 0) {
        return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    } else {
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }


}
