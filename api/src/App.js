import React, { useState , useEffect} from "react";
import axios from "axios";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Character from "./components/Character";
import ApiCall from "./components/ApiCall";

function App() {

  const [charData, setCharData] = useState([]);
  const endpoint = "https://rickandmortyapi.com/api/character"

  useEffect(() => {
    let response = axios.get(endpoint)
        .then(function(response) {
            // handle success
            setCharData(response.data)
            console.log(response.data)
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
          })
          .then(function () {
            // always executed
          });
  }, []);
  //if (!post) return null;
  
  return (
    <div className="container">
      <Character char=/>
    </div>
  );
}

export default App;
