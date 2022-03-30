import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

const percentage = 1000;

function Movies({
  poster,
  name,
  vote,
  date,
  overview,
  language
}) {

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


  return (
    <div className="banner">
      <div className="banner__backgroundImage">
        <figure>
          <img src={`http://image.tmdb.org/t/p/original/${poster}`} alt="" />
        </figure>
      </div>
      <div className="banner__content">
        <h1 className="banner__title">{name}</h1>
        <p className="banner__info">
          <span>
          <div className="banner__filmVote">
            <div className="banner__filmProgress">
              <CircularProgressbarWithChildren
                value={vote * 10}
                styles={buildStyles({
                  pathColor: `${getClassByRate(vote)}`,
                  trailColor: `rgba(255, 255, 255, 0.5)`,
                })}
                >
                <div className="banner__filmAverage"><p className={`${getClassByRate(vote)}`}>{vote * 10}<span className="banner__percentage">%</span></p></div>
              </CircularProgressbarWithChildren>
            </div>
            </div>
            </span>
          <span>{date}</span>
          <span>{language}</span>
        </p>
        <p className="banner__overview">{truncate(overview, 218)}</p>
      </div>
    </div> 
  )
}

export default Movies
