import React from 'react'
import './Background.css'
import Tvepisodes from '../Pages/Tvepisodes/Tvepisodes'
import Navmovies from '../Main/Navmovies/Navmovies'
import Banner from '../Banner/Banner'

function Background() {
  return (
    <div className="background">
      {/* <header>banner list MovieList</header> */}
      {/* <section>list tv episode cont</section>
      <div className="con">popular cont</div> */}
      <Banner/>
      <Tvepisodes/>
      <Navmovies/>
    </div>
  )
}

export default Background
