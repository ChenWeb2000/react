import React from "react";
import  {createRoot}  from "react-dom/client";
import './css/index.css'

import Sssub from './components/Sssub'
let list=['🍉','🍍','🍌','🥭','🥝']

let Ssub=()=>{
    return list.map((item,i)=><li key={i}>{item}<Sssub/></li>)
}


class Sub extends React.Component{
    render(){
        return <ul>
            <Ssub/>
        </ul>
    }
}


class Div extends React.Component{
    render(){
        return <div>
            <h1>类组件</h1>
            <Sub/>
        </div>
    }
}

createRoot(document.querySelector('#root')).render(<Div />)