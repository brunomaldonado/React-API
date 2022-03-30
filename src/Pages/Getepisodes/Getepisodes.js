import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Showepisodes from '../../Getlistening/Showepisodes/Showepisodes';
// import './Getepisodes.css';

function Getepisodes() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const {data}  = await axios.get(
        `https://api.themoviedb.org/3/tv/1418/season/8?api_key=63e02ea91a0ba2b67d4f233c70b47544&language=en-US`
      )
      // console.log(data);
      setContent(data.episodes)
    }
    fetchData();
  })

  const render = content;
  const getRender = Object.values(render).map((s) => {
    // console.log("map", s)
    return <Showepisodes
      key={s}
      id={s?.id}
      date={s?.air_date}
      name={s?.name}
      episode={s?.episode_number}
      season={s?.season_number}
      poster={s?.still_path}
    />
  })

  return (
    <main>
       <section>
        <div className="main_section">
          <span>Select Season</span>
          <select id="select_season">
            <option value="3" selected>Season 3</option>
            <option value="2">Season 2</option>
            <option value="1">Season 1</option>
          </select>
        </div>
        <div className="container">{getRender}</div> 
       </section>
     </main>
  )
}

export default Getepisodes