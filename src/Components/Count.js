import React,{useState,useEffect} from "react";



const Count =()=>{

    const [count,setCount] = useState({gold:0,silver:0,bronze:0})
    
    useEffect(()=>{
        document.title=`GOld :${count.gold} | silver:${count.silver} | bronze :${count.bronze}`
        console.log("hey man")
    },[count.silver])
    
    return (
        <div>
            <h1>My Gold count is :{count.gold}</h1>
            <h1>My Silver count is :{count.silver}</h1>
            <h1>My Bronze count is :{count.bronze}</h1>
            <button onClick={()=>setCount({...count,gold:count.gold+1})}>Inc:g</button>
            <button onClick={()=>setCount({...count,silver:count.silver+1})}>Inc:s</button>
            <button onClick={()=>setCount({...count,bronze:count.bronze+1})}>Inc:b</button>
        </div>
    )
}

export default Count