import React from "react";
import GetApiData from "../Components/RandomTrivia";

function App(){
    return(
        <div>
            <div className="Heading">
                <h1>Ancient Mage</h1>
                <h2>{GetApiData()}</h2>
            </div>
        </div>
    )
}

export default App;