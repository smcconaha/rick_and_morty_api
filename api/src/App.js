import React, { useState , useEffect} from "react";
import axios from "axios";
import "./App.css"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Character from "./components/Character";
import Filter from "./components/Filter";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [charData, setCharData] = useState([]);
  const [page, setPage] = useState(1);
  const endpoint = `https://rickandmortyapi.com/api/character/?page=${page}`
  //I could destructure the returned data and pass results as props to a component
  // let { info, results } = charData;

  useEffect(() => {
    axios.get(endpoint)
        .then(function(response) {
            // handle success
            setCharData(response.data)
            //turn loading mode off
            setLoading(false);
            // console.log(response.data.results.map(result => result.name))
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
  }, [endpoint]);
  //above, I put a watch on endpoint
  //if (!post) return null;
  //check if charData and charData.results are truthy before accessing the name property

  if (isLoading) {
    return <div className="Load">Loading...</div>;
  }

  return (
    <div className="container">
        <h1 className="text-center mb-3">Characters</h1>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <Character charData={charData}/>
            <Filter charData={charData} setPage={setPage} page={page}/>
          </div>
        </div>
    </div>
  );
}

export default App;
