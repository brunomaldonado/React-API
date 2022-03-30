import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addSeries } from '../../features/Serieslice/Serieslice'
import Seriesrow from '../../Getlistening/Seriesrow/Seriesrow'
import axios from 'axios'

function Tvseries() {

  const dispath = useDispatch();
  
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        // `https://api.themoviedb.org/3/tv/top_rated?api_key=63e02ea91a0ba2b67d4f233c70b47544&language=en-US&page=1`
        `https://api.themoviedb.org/3/tv/airing_today?api_key=63e02ea91a0ba2b67d4f233c70b47544&language=en-US&page=1`
      )

      dispath(addSeries(data.results));
    }
    fetchData();
  })

  return (
    <section className="section_series">
      <div className="section_top">
        <span>Online Series</span>
        <button>Popular</button>
        <button>Top Rated</button>
        <button className="serie__button">See More</button>
      </div>
      <Seriesrow/>
    </section>
  )
}

export default Tvseries
