import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addSeries } from '../../features/Serieslice/Serieslice'
import Episodesrow from '../../Getlistening/Episodesrow/Episodesrow'
import axios from 'axios'
// const base_url = "https://i.ibb.co/KrNRgTt/187766263-4562153663811949-429579143513079721-n.jpg"
// const base_url = "https://i.ibb.co/X3XX1fz/cyrus.jpg"
const base_url = "https://i.ibb.co/Mkt96WN/miley.jpg"

function Tvepisodes() {
  // const [content, setContent] = useState([])
  const dispath = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const {data}  = await axios.get(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=63e02ea91a0ba2b67d4f233c70b47544&language=en-US&page=1`
        // `https://api.themoviedb.org/3/tv/latest?api_key=63e02ea91a0ba2b67d4f233c70b47544&language=en-US`
      )
      // console.log("request", request)
      // console.log(data.results)
      // setContent(data.results)
      dispath(addSeries(data.results));
    }
    fetchData();
  },[])

  return (
    <section className="content">
      <Episodesrow/>
      <aside className="other_content">
        <img src={base_url} alt="" />
      </aside>
    </section>
  )
}

export default Tvepisodes
