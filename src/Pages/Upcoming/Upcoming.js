import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { img_300, unavailable } from '../../Config/Config';

function Upcoming() {
  const [content, setContent] = useState([]);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
     const fetchData = async() => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=63e02ea91a0ba2b67d4f233c70b47544&language=en-US&page=5`
      )
      // console.log(data);
      setContent(data.results);
    }
    fetchData();
  }, [])
  return (
    <div className="aside_content">
      <div className="top__title">Recommended Movies</div>
      {content.slice(0, limit ? limit : content.length).map((c, index) => (
          <div key={index} className="right__content">
            <div className="card_image">
              <img className="content_rightImg" src={c?.poster_path ? `${img_300}/${c?.poster_path}` : unavailable}></img>
            </div>
            <div className="info">
              <h2 className="film_title">{c?.title}</h2>
              <p>{c?.release_date}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Upcoming
