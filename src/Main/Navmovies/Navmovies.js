import React from 'react'
import Popular from '../../Pages/Popular/Popular'
import Homecontent from '../../Pages/Aside/Homecontent/Homecontent'
import './Navmovies.css'

function Navmovies() {
  return (
    <div className="content">
      <Popular/>
      <Homecontent/>
    </div>
  )
}

export default Navmovies
