import React from 'react'
import ChidA from './ChidA'

function ChildC({name}) {
  return (
    <div>
      <h1>Child C</h1>
      <ChidA name = {name}/>
    </div>
  )
}

export default ChildC
