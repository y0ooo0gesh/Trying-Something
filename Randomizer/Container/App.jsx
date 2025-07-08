import React from "react";
import RandNum from "../Components/RandomTrivia";

function App(){
    return(
        <div>
            <div className="Heading">
                <h1>Math Mage</h1>
            </div>
            <h2><RandNum /></h2>
        </div>
    )
}

export default App;