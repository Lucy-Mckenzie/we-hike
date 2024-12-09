import MapHuts from '../components/MapHuts'
import data from '../data/data.json'
import { Link } from 'react-router-dom'
import { Huts } from '../../models/huts'

type data = {
  huts: Huts[]
}

export default function DisplayRegions() {
  
  const filteredRegions = [...new Set(data.huts.map(hut => hut.region))]

  return (
    <div className="flex flex-col items-start px-5 py-10 text-left mx-auto max-w-[900px]">
      <h1 className="text-4xl text-left mb-5 font-light">Hiking Huts</h1>
      <MapHuts />
      <div className="flex flex-col items-center max-w-[900px] m-auto pb-6">
      <h1 className="text-4xl text-left mb-5 font-light font-lato m-5">Find by Regions below</h1>
      <ul>
     {filteredRegions.map((region, index) => {
      return (
        <li key={index} className="bg-grey-300 border border-grey transition-transform duration-200 hover:scale-105 px-4 m-1">
          <Link to={`/huts/${region}`}>
            {region}
          </Link>
        </li>
      )
     })}
     </ul>
     </div>
    </div>
  )
}