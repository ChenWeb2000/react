import React from "react";
import  {createRoot}  from "react-dom/client";
import './css/index.css'

import Sssub from './components/Sssub'
let list=['🍉','🍍','🍌','🥭','🥝']

let Ssub=()=>{
    return list.map((item,i)=><li key={i}>{item}<Sssub/></li>)
}

let Sub=()=><ul>
    <Ssub />
</ul>

let Div=()=>{
    return <div>
        <h1>父组件</h1>
        <Sub />
    </div>
}

createRoot(document.querySelector('#root')).render(<Div />)