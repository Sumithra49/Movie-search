import movieTrailer from 'movie-trailer';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import './App.css';

function App() {
  //movie search app
  const [videos,setVideos]=useState("");
  const[url,setUrl]=useState("https://www.youtube.com");

  function handleSearch(){
    movieTrailer(videos).then((res)=>{
      setUrl(res)
    });
  }
  
  return(
    <>
    <div className="hea">Search for any movies/shows:{" "}
        <br/>
    <input type="text" onChange={(e)=>{setVideos(e.target.value)}} />
    <button onClick={()=>{handleSearch()}} >Search</button>
    </div> 
    <div>
    <ReactPlayer url={url} controls={true}  className="vide"/>     
    </div>
    
    </>
  )




}
export default App
