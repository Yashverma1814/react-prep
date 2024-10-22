import React,{useContext} from 'react'
import Contextnew from './Contextnew'
import { cubeContext } from '../../context/context'

const Button = () => {
    const cubefn = useContext(cubeContext)
  return (
    <div>
      <button onClick={cubefn.incCube}><span><Contextnew /></span>this is Button</button>
    </div>
  )
}

export default Button
