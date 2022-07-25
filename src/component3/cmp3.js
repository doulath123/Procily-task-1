import { Resizable } from "re-resizable";
import React from "react";
import './cmp3.css'
const Cmp3=()=>{
    return (
        <Resizable className="cmp3style"
        defaultSize={{
            width: "50%",
            height: "50vh",
          }}
          >
Component 3
        </Resizable>
    )
}
export default Cmp3;