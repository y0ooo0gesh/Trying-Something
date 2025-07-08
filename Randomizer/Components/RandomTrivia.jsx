import React from "react";

const randNum = async function() {
	try { 
        const wanted = await fetch("http://numbersapi.com/random/trivia");
        const response =await wanted.text();
        console.log(response);
	} catch(err) {
		console.log('Well That didnt went well', err )
	}
}

export default randNum;