import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { img_300, unavailable } from '../../Config/config';
// import { img_300, notAvailable } from '../../Config/config';

function Latestepisodes({
  id,
  name,
  date,
  poster,
  backdrop
}) {

  const [content, setContent] = useState([])

  useEffect(() => {
    async function fetchData() {
      const {data}  = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=63e02ea91a0ba2b67d4f233c70b47544&language=en-US`
      );
      // console.log("get data", data);
      // console.log("date", data.first_air_date)
      // console.log("vote", data.vote_average)
      // console.log("get", data.last_episode_to_air);

      setContent(data.last_episode_to_air);
    }
    fetchData();
  }, []);

  return (
    <div className="right__content">
    <div className="card_image">
      <img className="content_rightImg" src={poster ? `${img_300}/${poster}` : unavailable}></img>
      {/* <img className="content_rightImg" src={backdrop ? `${img_300}/${backdrop}` : notAvailable}></img> */}
      <div className="chapters"><span>{`${content.season_number}x${content.episode_number}`}</span></div>
    </div>
    <div className="info">
      <h2 className="film_title">{name}</h2>
      <p>{date}</p>
    </div>
  </div>
  )
}

export default Latestepisodes
