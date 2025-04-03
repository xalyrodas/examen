function cargarMenu(){
    let header = document.createElement('header');
    header.className ="header";

    let tittle= document.createElement ('div');
    tittle.textContent= "Total X ="


    let title2 = document.createElement ('div');
    title2.textContent = "Total / = ";
    
    header.appendChild(tittle);
    header.appendChild(title2);
}
export{cargarMenu}