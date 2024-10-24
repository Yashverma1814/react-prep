import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement,incrementByAmount } from '../../redux/counter/counterSlice'

const CompForRedux = () => {
    const count = useSelector((store)=>store.counter.value)
    const dispatch = useDispatch();
    const [amount,setAmount] = useState(0)
    const incAmt =()=>{
        let val = +amount;
        dispatch(incrementByAmount(val))
        setAmount(0);
    }
  return (
    <div>
        <center>
            <p>This Component is accessing the redux name of this is CompForRedux</p>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <span>The value of Counter is {count}</span>
            <button onClick={()=>dispatch(increment())}>+</button>
            <br />
            <br />
            <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            <button onClick={()=>{incAmt()}}>Add</button>
        </center>
    </div>
  )
}

export default CompForRedux
