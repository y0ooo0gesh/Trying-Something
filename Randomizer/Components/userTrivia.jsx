import React from "react";
import userInput from "intake"

const userNom =async function ({id}) {
    try { 
        const wanted = await fetch(`http://numbersapi.com/${id}/trivia`);
        const response =await wanted.text();
        console.log(response);
	} catch(err) {
		console.log('Well That didnt went well', err )
	}
}

export default userNom;