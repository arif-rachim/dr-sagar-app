import {useEffect, useState} from "react";

export function useViewportDimension(){
    const [dimension,setDimension] = useState({width:window.innerWidth,height:window.innerHeight});
    useEffect(() => {
        window.addEventListener('resize',() => {
            setDimension(old => {
                if(old.width !== window.innerWidth){
                    return {width: window.innerWidth,height: window.innerHeight};
                }
                return old;
            })
        })
    },[]);
    return dimension;
}