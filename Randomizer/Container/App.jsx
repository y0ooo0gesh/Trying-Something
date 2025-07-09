import React from "react";
import trivia from "../Components/RandomTrivia";

function App(){
    return(
        <div>
            <div className="Heading">
                <h1>Math Mage</h1>
                <h2>{trivia}</h2>
            </div>
        </div>
    )
}

export default App;