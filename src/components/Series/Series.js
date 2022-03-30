import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { img_300, unavailable } from '../../Config/Config';

function Series({
  id,
  name,
  poster,
  date, 
  media
}) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();
    async function fetchData() {
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=63e02ea91a0ba2b67d4f233c70b47544&language=en-US`
      )
      // console.log(data)
      setContent(data)
    }
    fetchData();

    return () => {
      abortController.abort();
    }
  }, [])

  const strDate = date.split('-')[0];
  // console.log("String date", strDate);

  return (
    <div className="card card_serie">
      <div className="card_banner">
        <a href="" className="basic_card">
          <div className="card_img">
            <img src={poster ? `${img_300}/${poster}` : unavailable}></img>
            <div className="chapters"><span>{strDate}</span></div>
            <div className="serie"><span>{media == "tv" ? "Tv Serie" : "serie"}</span></div>
          </div>
        </a>
        <h2 className="Title">{name}</h2>
        <p><span>{content?.number_of_seasons}</span> Season</p>
      </div>
    </div>
  )
}

export default Series