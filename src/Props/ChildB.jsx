import React from 'react'
import ChildC from './ChildC'

function ChildB({name}) {
  return (
    <div>
      <h1>Child B</h1>
      <ChildC  name ={name}/>
    </div>
  )
}

export default ChildB
