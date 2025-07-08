import React from "react";

const userInput = ( { numb } ) => {
    return(
    <>
        <input
            type="search"
            placeholder="Enter the Number"
            onChange={ numb }
        />
    </>
    )
}

export default userInput;