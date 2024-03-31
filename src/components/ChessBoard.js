import {useEffect, useState} from 'react';

const ChessBoard = ({size}) => {

    useEffect( () => {
        let chessDummyData = [];
        for(let i=0; i<size; i++){
            let tempArray = [];
            for(let j=0; j<size; j++){
                if((j+i)%2 === 0){
                    tempArray.push(0);
                }
                else {
                    tempArray.push(1);
                }
            }
            chessDummyData.push(tempArray);
        }
        setChessData(chessDummyData);
        console.warn(chessDummyData)
    }, [])

    const [chessData, setChessData] = useState([[]])



//     let chessData = [[1,0,1,0,1,0,1,0],
//     [1,0,1,0,1,0,1,0],
//     [1,0,1,0,1,0,1,0],
//     [1,0,1,0,1,0,1,0],
//     [1,0,1,0,1,0,1,0],
//     [1,0,1,0,1,0,1,0],
//     [1,0,1,0,1,0,1,0],
//     [1,0,1,0,1,0,1,0]
// ]

    return (
        <div>
            Hi
        </div>
    )
}

export default ChessBoard