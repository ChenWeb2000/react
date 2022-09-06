import React from "react";
import  {createRoot}  from "react-dom/client";

let Ul=<>
<li>4516</li>
<li>4516</li>
<li>4516</li>
<li>4516</li>
<li>4516</li>
</>
let Div=React.createElement('div',{className:'aaaa'},Ul)

createRoot(document.querySelector('#root')).render(Div)