let productosAgregados = 0;
function agregarcruz(){
    productosAgregados++;
    document.getElementById('contador').textContent = productosAgregados;
}
function agregarCheck(){
    CheckAgregados++;
    document.getElementById('contador').textContent = CheckAgregados;
}
function eliminarBloque(bloque){
    const checkbox = bloque.querySelector(".checkbox");
        bloque.addEventListener("click", () => {
        checkbox.checked = !checkbox.checked; 
        bloque.classList.toggle("tachado"); 
    });

}
export{agregarcruz,agregarCheck,eliminarBloque}