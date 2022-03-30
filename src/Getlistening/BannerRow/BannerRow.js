import React, { useState, useEffect } from 'react'
// import Slider from 'react-slick'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/Serieslice/Serieslice'

// const base_url = "https://image.tmdb.org/t/p/w500/";
const percentage = 1000;

function BannerRow() {
  // const [limit, setLimit] = useState(12);

  // const settings = {
  //   dots: true,
  //   arrows: false,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   speed: 500,
  //   slidesToShow: 1, 
  //   slidesToScroll: 1,
  //   appendDots: (dots) => <li className="banner_dots">{dots}</li>,
  // };

  const getClassByRate = (vote) => {
    let p = (vote * percentage) / 100

    if (p >= 80) {
      return "green";
    } else if(p >=60) {
      return "orange";
    } else {
      return "red";
    }
  }

  function truncate(str, n) {
    return str?.length > n ? str?.substr(0, n - 1) + "[...]" : str;
  }
  
  const render = useSelector(getAllMovies);
  // console.log("render", render)
  // const getRender = Object.values(render).map((m) => {
  //   // console.log(m);
  //   return <Movies
  //     key={m}
  //     poster={m?.backdrop_path}
  //     name={m?.name || m?.title || m?.original_title}
  //     vote={m?.vote_average}
  //     date={m?.release_date}
  //     language={m?.original_language}
  //     overview={m?.overview}
  //   />
  // })
  // <Slider {...settings}>{getRender.slice(0, limit ? limit : render.length)}</Slider>

  return (
    <div className="banner">
      <div className="banner__backgroundImage">
        <figure>
          <img src={`http://image.tmdb.org/t/p/original/${render?.backdrop_path}`} alt="" />
        </figure>
      </div>
      <div className="banner__content content">
        <div className="banner__info">
          <h1 className="banner__title">{render?.name || render?.original_title || render?.title}</h1>
          <div className="banner_release">
            <span>
              <div className="banner__filmVote">
                <div className="banner__filmProgress">
                  <CircularProgressbarWithChildren
                    value={render?.vote_average * 10}
                    styles={buildStyles({
                      pathColor: `${getClassByRate(render?.vote_average)}`,
                      trailColor: `rgba(255, 255, 255, 0.5)`,
                    })}
                    >
                    <div className="banner__filmAverage"><span className={`${getClassByRate(render?.vote_average)}`}>{render?.vote_average * 10}<span className="banner__percentage">%</span></span></div>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </span>
            <span>{render?.release_date || render?.first_air_date}</span>
            <span>{render?.original_language}</span>
          </div>
          <p className="banner__overview">{truncate(render?.overview, 218)}</p>
          <button className="serie__button">Play Movie</button>
        </div>
      </div>
    </div> 
  )
}

export default BannerRow


{/*   
  <div className="banner">
      <div className="banner__backgroundImage">
        <figure>
          <img src={`http://image.tmdb.org/t/p/original/${render?.backdrop_path}`} alt="" />
        </figure>
      </div>
      <div className="banner__content">
        <h1 className="banner__title">{render?.name || render?.original_title || render?.title}</h1>
        <p className="banner__info">
          <span>
          <div className="banner__filmVote">
            <div className="banner__filmProgress">
              <CircularProgressbarWithChildren
                value={render?.vote_average * 10}
                styles={buildStyles({
                  pathColor: `${getClassByRate(render?.vote_average)}`,
                  trailColor: `rgba(255, 255, 255, 0.5)`,
                })}
                >
                <div className="banner__filmAverage"><p className={`${getClassByRate(render?.vote_average)}`}>{render?.vote_average * 10}<span className="banner__percentage">%</span></p></div>
              </CircularProgressbarWithChildren>
            </div>
            </div>
            </span>
          <span>{render?.release_date || render?.first_air_date}</span>
          <span>{render?.original_language}</span>
        </p>
        <p className="banner__overview">{truncate(render?.overview, 218)}</p>
      </div>
    </div> 
  
  

    <div className="banner">
    <Slider {...settings}>{Object.values(render).slice(0, limit ? limit : render.length).map((m) => (
      <div className="">
        <div className="banner__backgroundImage">
          <figure>
            <img src={`http://image.tmdb.org/t/p/original/${m?.backdrop_path}`} alt="" />
          </figure>
        </div>
        <div className="banner__content">
          <h1 className="banner__title">{m?.name || m?.original_title || m?.title}</h1>
          <p className="banner__info">
            <span>
            <div className="banner__filmVote">
              <div className="banner__filmProgress">
                <CircularProgressbarWithChildren
                  value={m?.vote_average * 10}
                  styles={buildStyles({
                    pathColor: `${getClassByRate(m?.vote_average)}`,
                    trailColor: `rgba(255, 255, 255, 0.5)`,
                  })}
                  >
                  <div className="banner__filmAverage"><p className={`${getClassByRate(m?.vote_average)}`}>{m?.vote_average * 10}<span className="banner__percentage">%</span></p></div>
                </CircularProgressbarWithChildren>
              </div>
              </div>
              </span>
            <span>{m?.release_date || m?.first_air_date}</span>
            <span>{m?.original_language}</span>
          </p>
          <p className="banner__overview">{truncate(m?.overview, 218)}</p>
        </div>
      </div>
    ))}
    </Slider>
    </div>
  
  
  
  
  */}