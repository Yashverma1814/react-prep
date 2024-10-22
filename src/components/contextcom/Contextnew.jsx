import React,{useContext} from 'react'
import { cubeContext } from '../../context/context'

const Contextnew = () => {
    const val = useContext(cubeContext)
  return (
    <div>
      <h2>{val.cube}</h2>
    </div>
  )
}

export default Contextnew
