import {useState, useEffect} from 'react';


const useResizeHook = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    const handleResize = () => {
        
    }
    
    useEffect(() => {
      
        window.addEventListener("resize", handleResize())
    
      return () => {
        window.removeEventListener("resize", handleResize())
      }
    }, [])
    
}

const WindowResizeHook = () => {

}

export default WindowResizeHook