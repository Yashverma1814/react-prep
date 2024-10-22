import React, { useEffect, useRef, useState } from 'react'

const Hooks = () => {

    const [input,setInput] = useState("")
    const [count,setCount] = useState(0)
    const cc = useRef(0)

    const inc = () =>{
        setCount(count+1)
        cc.current = cc.current+1
    }

    const dec = () =>{
        setCount(count-1)
        cc.current = cc.current+1
    }
    useEffect(()=>{
        console.log(`button click ${cc.current} times`)
    },[count])
  return (
    <div>
        <input type="text" classname="textInput" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
        <h1>{input}</h1>
        <h2>Age: {count}</h2>
        <button onClick={inc}>+</button>
        <button disabled={count===0} onClick={dec}>-</button>
    </div>
  )
}

export default Hooks
