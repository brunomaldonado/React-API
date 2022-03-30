import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import axios from '../axios'
import requests from '../requests'
import { useDispatch } from 'react-redux'
import { addMovies } from '../features/Serieslice/Serieslice'
import BannerRow from '../Getlistening/BannerRow/BannerRow'


function Banner() {

  const dispath = useDispatch()

  useEffect(() => {
    async function fetchData() {
      const {data}  = await axios.get(requests.fetchRecommended);
      // const {data}  = await axios.get(
      //   `https://api.themoviedb.org/3/movie/popular?api_key=63e02ea91a0ba2b67d4f233c70b47544&language=en-US&page=1`
      // )
      // console.log(request);
      // console.log(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
      dispath(addMovies(data.results[Math.floor(Math.random() * data.results.length)]));
      // dispath(addMovies(data.results));
    }
    fetchData();
  },);

  return (
    <header>
      <BannerRow/>
    </header>
  )
}

export default Banner