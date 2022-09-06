import React from "react";
import  {createRoot}  from "react-dom/client";

let list=['🍉','🍍','🍌','🥭','🥝']

let Ul=<>
{list.map((item,i)=><li key={i}>{item}</li>)}
</>
let Div=React.createElement('div',{className:'aaaa'},Ul)

createRoot(document.querySelector('#root')).render(Div)