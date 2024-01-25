import React from "react";


const Hello =(props)=>{


    return (
        <div>
            <h1>i am developer</h1>
            <p>i am a pro in front-End</p>
            {props.children}
            <hr/>
        </div>
    )
}



export default Hello