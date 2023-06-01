import React from 'react'
import PlayerCard from './PlayerCard'

const PlayerList = (props) => {
  return (
    <div>
        {
            props.list.map((players,i)=><PlayerCard  item={players} key={i} />)
        }
    </div>
  )
}

export default PlayerList