import axios from "axios";
import React from "react";
import { useEffect } from "react";

async function ApiCall() {
    let endpoint = "https://rickandmortyapi.com/api/character"

    React.useEffect(() => {
        let response = axios.get(endpoint);
        console.log("New API Caller Iteration: ", response.data);
        
    }, []);
    //if (!post) return null;

};

export default ApiCall;