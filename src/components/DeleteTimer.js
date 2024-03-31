/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";

const DeleteTimer = () => {


    const [timer, setTimer] = useState(10);
    const [val, setVal] = useState(0);
    const [showButton, setShowButton] = useState(0)

    const setValHandler = () => {
        setVal(val + 1)
    }

    useEffect(() => {

        if(timer == 0){
            setShowButton(1)
            return;
        }

        const int = setInterval(() => {
            setTimer(timer-1);
        }, 1000)

        return () => {
            clearInterval(int);
        }
    }, [timer])


    return (
        <div style={{margin: "100px"}}>
            <p>{timer}</p>
            <br></br>
            <p>{val}</p>
            <button onClick={() => setValHandler()} style={{display : showButton ? 'none' : ''}}> Button to increment</button>
        </div>
    )
}

export default DeleteTimer