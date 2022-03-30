import React from 'react'
import './Singlecontent.css'
import { img_300, notAvailable } from '../../Config/Config';

function singlecontent({
  name,
  poster,
  date,
  overview,
  vote
}) {
  return (
    <div className="card">
      <div className="card_banner">
        <div className="card_img">
          <img src={poster ? `${img_300}/${poster}` : notAvailable} alt="" />
        </div>
          <h2 className="card_title">{name}</h2>
      </div>
    </div>
  )
}

export default singlecontent