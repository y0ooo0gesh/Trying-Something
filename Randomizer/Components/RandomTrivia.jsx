import React from "react";

const GetApiData = async function () {
	const response = await fetch.("https://jsonplaceholder.typicode.com/users");
	const apidata = await response.json();
	return console.log(apidata); 
}

export default GetApiData ;