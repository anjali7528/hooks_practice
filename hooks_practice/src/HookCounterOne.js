import React,{useState} from 'react'

function HookCounterOne() {
    const [count,countin] = useState(0);
  return (
    <div>
        <button onClick={()=> countin(count+1)}>Count {count} </button>
    </div>
  )
}

export default HookCounterOne
