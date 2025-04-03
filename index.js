
import { cargarMenu } from "./componentes/header/header.js";

function cargarDOM(){
    let DOM=document.querySelector("#root")
    DOM.appendChild(cargarMenu);
    DOM.appendChild(cargarBloques)

    
    return DOM;
}
cargarDOM();