
const ObjectChangeEg = () => {
    let obj = {
        firstName : "Parth",
        secondName : "Shukla",
        address : {
            firstLine : "test1",
            secondLine :"test2"
        }
    }

    // {...obj,address:{...obj.address,secondLine:'test3'}}

    return (
        <div className="App">
            Hello 
            <h1>{obj['firstName']}</h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
        </div>
    )


}