import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom';
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import { getAllSeries } from '../../features/Serieslice/Serieslice'
import Episodes from '../../components/Episodes/Episodes'

function Episodesrow(props) {
  const [limit, setLimit] = useState(12);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    dotsClass: "button__bar",
    responsive: [
      {
        breakpoint: 2800,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1600,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1200,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        }
      },
      {
        breakpoint: 991 ,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        }
      },
      {
        breakpoint: 869,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 425,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        }
      },
      {
        breakpoint: 424,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
      }
    ]
  };

  const render = useSelector(getAllSeries);
  const getRender = Object.values(render).map((e) => {
    // console.log(e)
    return <Episodes
      key={e}
      id={e?.id}
      poster={e?.backdrop_path}
      name={e?.name}
      date={e?.first_air_date}
    />
  })

  return (
    <div className="serie__list">
      <div className="serie__top">
        <h2>Episodes</h2>
        <button className="serie__button">See More</button>
      </div>
      <div className="serie__container">
        <Slider {...settings}>{getRender.slice(0, limit ? limit : render.length)}</Slider>
      </div>
    </div>
  )
}

export default Episodesrow

