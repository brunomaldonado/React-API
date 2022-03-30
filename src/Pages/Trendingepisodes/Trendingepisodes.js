import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Latestepisodes from '../Latestepisodes/Latestepisodes'

function Trendingepisodes() {
  const [content, setContent] = useState([]);
  const [limit, setLimit] = useState(12);

  useEffect(() => {
     const fetchData = async() => {
      const  {data}  = await axios.get(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=63e02ea91a0ba2b67d4f233c70b47544&language=en-US&page=1`
      )
      // console.log(data);
      // console.log(data.results[id]);
      setContent(data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="aside_content">
     <div className="top__title">Latest Episodes</div>
     <div className="latest_scrollbar">
       <div id="progress_bar" className="progress_bar"></div>
       <div id="scroll_path" className="scroll_path"></div>
      {content.slice(0, limit ? limit : content.length).map((c) => {
        //  console.log(c)
        return <Latestepisodes
            id={c?.id}
            key={c}
            name={c?.name}
            poster={c?.poster_path}
            backdrop={c?.backdrop_path}
            date={c?.first_air_date}
          />
      })}
     </div>
    </div>
  )
}

export default Trendingepisodes
















// const render = content;
// const getRender = Object.values(render).map((c) => {
//   console.log(c.id);
//   console.log(c);
//   return (
//     <div className="right__content">
//       <div className="card_image">
//         <img className="content_rightImg" src={c?.poster_path ? `${img_300}/${c?.poster_path}` : unavailable}></img>
//         <div className="chapters"><span>5x4</span></div>
//       </div>
//       <h2 className="film_title">{c?.original_name}</h2>
//     </div>
//   )
// })

// return (
//   <div className="aside_content">
//     <div className="top__title">Latest Latestepisodes</div>
//     {getRender.slice(0, limit ? limit : content.length)}
//     {content.slice(0, limit ? limit : content.length).map((c) => (
//       <div className="right__content">
//         <div className="card_image">
//           <img className="content_rightImg" src={c?.poster_path ? `${img_300}/${c?.poster_path}` : unavailable}></img>
//           <div className="chapters"><span>5x4</span></div>
//         </div>
//         <h2 className="film_title">{c?.title}</h2>
//       </div>
//     ))}
//   </div>
// )


// return (
//   <div className="aside_content">
//     <div className="top__title">Latest Latestepisodes</div>
//     {getRender.slice(0, limit ? limit : content.length)}
//     {content && content.slice(0, limit ? limit : content.length).map((c)=> (
//       <Latestepisodes
//         id={c?.id}
//         key={c}
//       />
//     ))}
//   </div>
// )