// import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
// import { loadHuts } from '../apis/doc-hikes.ts'
// const {data, error, isPending } = useQuery({queryKey: ['huts'], queryFn: loadHuts})
import { Link } from "react-router-dom"

import data from '../data/data.json'

export default function HutsInRegion() {

  const { region } = useParams()

  const hutsInRegion = data.huts.filter((huts) => huts.region === region) 

  if (!region || region === undefined) {
    return 'Sorry region does not exist'
  }

  if (hutsInRegion.length === 0) {
    return 'sorry could not find huts'
  }

  return (
    <div>
      <h1>Huts in the {region} Region</h1>
      <ul>
        {hutsInRegion.map((hut) => (
          <li key={hut.assetId}>
            <Link to={`/huts/${region}/${hut.name}`}>{hut.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}