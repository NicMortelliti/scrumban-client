import React from 'react'
import CardStack from './CardStack'

function Board(tasks) {
  

  return (
    <div>
      <CardStack /> {/* Backlog */}
      <CardStack /> {/* In-Progress */}
      <CardStack /> {/* Peer Review */}
      <CardStack /> {/* Closed */}
    </div>
  )
}

export default Board