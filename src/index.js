import React from "react";
import  {createRoot}  from "react-dom/client";
import './css/index.css'
let list=['🍉','🍍','🍌','🥭','🥝']

const Css={color:'#000'}
let Ul=<>
{list.map((item,i)=><li style={{backgroundColor:'yellow',...Css}} key={i}>{i}{item}</li>)}
</>
let Div=React.createElement('div',{className:'aaaa'},Ul)

createRoot(document.querySelector('#root')).render(Div)