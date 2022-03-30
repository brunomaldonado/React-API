import React, { useState, useEffect}from 'react'
import axios from 'axios'
import { img_300, notAvailable } from '../../Config/config';

function Episodes({
  id,
  poster,
  name,
  date,
}) {
  const [content, setContent] = useState([]);
  // const [value, setValue] = useStateIfMounted('checking value...');

  useEffect(() => {
    let abortController = new AbortController();
    // fetchValue().then(() => {
    //   setValue("done");
    // }); 

    async function fetchData() {
      const {data}  = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=63e02ea91a0ba2b67d4f233c70b47544&language=en-US`
      )
      // console.log(data);
      setContent(data.last_episode_to_air);
    }
    fetchData();

    return () => {
      abortController.abort();
    }
  }, [])

  return (
    <div className="card card_serie">
      <div className="card_banner">
        <a href="#" className="basic_card">
          <div className="card_img">
            <img src={poster ? `${img_300}/${poster}` : notAvailable}></img>
            <div className="chapters"><span>{`${content.season_number}x${content.episode_number}`}</span></div>
          </div>
        </a>
        <h2 className="Title">{name}</h2>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default Episodes