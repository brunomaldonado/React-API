import React from 'react'
import Nowplaying from '../../Nowplaying/Nowplaying'
import Upcoming from '../../Upcoming/Upcoming'

function Home() {
  return (
    <aside>
      <Nowplaying/>
      <Upcoming/>
    </aside>
  )
}

export default Home
