import { tareasD } from "./appi.js"

const
    boton = document.getElementById('boton')

let click = 0
boton.addEventListener('click', () => {
    if(click === 0){
        document.getElementById("nueva_tarea").innerHTML = 
        '<label for="nombre" class="ctrlform">Titulo</label>'+
        '<input id="nombre" class="ctrlform imputctrl" type="text" placeholder="Titulo de la tarea">' +
        '<label for="descripcion class="ctrlform">Descripcion</label>'+ 
        '<textarea id="descripcion" class="ctrlform imputctrl" placeholder="Describe la tarea"></textarea>' +
        '<select class="ctrlform imputctrl"><option value="0">Responsable</option><option value="1">Usuario 1</option>'+
        '<option value="2">Usuario 2</option><option value="3">Usuario 3</option></select>'+
        '<label for="fecha" class="ctrlform">Fecha</label>'+
        '<input id="fecha" class="ctrlform imputctrl" type="date">'+
        '<input class="controlbtn ctrlform " type="button" id="boton2" value="Agregar">'        
        click = 1;
    }   
    else{
        null;
    }
})

document.getElementById("TareaPendienteLista").innerHTML = 
    `<div class="contenedortarea">
        <h4>${tareasD[0].name}</h4>
        <div class="infotarea">
            <p>Descripción: ${tareasD[0].descripcion}</p>
            <hr><p>Responsable: ${tareasD[0].responsable}</p>
            <p>Fecha: ${tareasD[0].fecha}</p>
        </div>
        <div class="estado" id="estado"></div>
    </div>`;
document.getElementById("TareaProcesoLista").innerHTML = 
    `<div class="contenedortarea">
        <h4>${tareasD[1].name}</h4>
        <div class="infotarea">
            <p>Descripción: ${tareasD[1].descripcion}</p>
            <hr><p>Responsable: ${tareasD[1].responsable}</p>
            <p>Fecha: ${tareasD[1].fecha}</p>
        </div>
        <div class="estado2" id="estado2"></div>
    </div>`;
document.getElementById("TareaFinalizadaLista").innerHTML = 
    `<div class="contenedortarea">
        <h4>${tareasD[2].name}</h4>
        <div class="infotarea">
            <p>Descripción: ${tareasD[2].descripcion}</p>
            <hr><p>Responsable: ${tareasD[2].responsable}</p>
            <p>Fecha: ${tareasD[2].fecha}</p>
        </div>
        <div class="estado3" id="estado3"></div>
    </div>`;

