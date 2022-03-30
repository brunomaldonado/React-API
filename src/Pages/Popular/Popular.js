import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Singlecontent from '../../Getlistening/Singlecontent/Singlecontent'
import './Popular.css'
import '../Aside/Clickposterserie/Clickposterserie.css'
import Tvseries from '../Tvseries/Tvseries'
function Popular() {
  const [content, setContent] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=63e02ea91a0ba2b67d4f233c70b47544&language=en-US&page=2`
      )
        // console.log(data.results);
        setContent(data.results);
    }
    fetchData();
  })

  const render = content;
  const getRender = Object.values(render).map((c) => {
    // console.log(c);
    return <Singlecontent
      id={c?.id}
      key={c?.id}
      name={c?.name || c?.original_title || c?.title}
      poster={c?.poster_path || c?.backdrop_path}
      overviw={c?.overview}
      vote={c?.vote_average}
      date={c?.release_date}
    />
  })


  return (
    <main>
       <section className="section_movies">
        <div className="section_top">
          <span>Online Movies</span>
          <button>Popular</button>
          <button>Top Rated</button>
          <button>Now Playing</button>
        </div>
        <div className="container">{getRender}</div> 
       </section>
       <Tvseries/>
     </main>
  )
}

export default Popular