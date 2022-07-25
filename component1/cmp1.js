import React from 'react'
import { Resizable } from 're-resizable'
import doulath from './imgofdou.jpg'
import './cmp1.css'
const Cmp1=()=>{
    return (
        
 <Resizable
      className="imgstyle"
      defaultSize={{
        width: "30%",
        height: "50vh",
      }}
    >
      <img className='img' src={doulath}/>
      {/* <Clock value={time} /> */}
    </Resizable>
        
    )
}
export default Cmp1;