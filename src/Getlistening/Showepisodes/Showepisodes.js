import React, { useState, useEffect} from 'react'
const base_url = "https://image.tmdb.org/t/p/w500/";
// import './Showepisodes.css'

function Showepisodes({
  id,
  date,
  name,
  poster,
  episode,
  season
}) {

  return (
    <div className="card">
      <div className="card_banner">
        <div className="card_img">
          <img className="card_imgLarge" src={`${base_url}${poster}`} alt="" />
          <div className="chapters"><span>{`${season}x${episode}`}</span></div>
        </div>
        <h2 className="Title">{name}</h2>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default Showepisodes
