const tabla = document.getElementById("data");
let data, url = 'http://127.0.0.1:5500/web/modulos/Bebidas/';

const obtenerDatos= async ()=>{
    const data = await fetch(url+'Bebidas.json');
    let newData = await data.json();
    let html="";
    newData.forEach(element => {
        html+=`<tr class="cuerpo">
                  <td>${element.nombre} </td>
                  <td>${element.descripcion} </td>
                  <td>${element.categoria} </td>
                  <td></td>
                </tr>`;
    });
    tabla.innerHTML =html;
}

obtenerDatos();