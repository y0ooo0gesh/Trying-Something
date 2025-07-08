import React from "react";

const randNum = async function() {
	try { 
        const response = await fetch("http://numbersapi.com/random/trivia");
        const about =await response.text();
        return(console.log(about))
	} catch(err) {
		console.log('Well That didnt went well', err )
	}
}

export default randNum;