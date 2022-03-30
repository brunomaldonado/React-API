import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import { getAllSeries } from '../../features/Serieslice/Serieslice'
import Series from '../../components/Series/Series'

function Seriesrow() {
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
        slidesToShow: 5,
        slidesToScroll: 5,
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
  const getRender = Object.values(render).map((s) => {
    // console.log("series", s);
    return <Series
      key={s}
      id={s?.id}
      name={s?.title || s?.name || s?.original_name}
      poster={s?.poster_path}
      vote={s?.vote_average}
      date={s?.first_air_date}
      media={s?.media_type}
    />
  })
  return (
    <div>
      <div className="serie__container">
        <Slider {...settings}>{getRender.slice(0, limit ? limit : render.length)}</Slider>
      </div>
    </div>
  )
}

export default Seriesrow
