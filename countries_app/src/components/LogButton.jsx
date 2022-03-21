import { click } from "@testing-library/user-event/dist/click";
import React from "react";

const LogButton = (WrappedComponent,info) => {
    
    const clickHandler=(e)=>{
        console.log('Bilesen LogButton HOC ile gelistirildi')
    }
    
    
    return(props) =>{
        return(
       
        <div>
            <button onClick={clickHandler}>Log yaz</button>
            <WrappedComponent{...props}/>
        </div>

        )
    }
}

export default LogButton;