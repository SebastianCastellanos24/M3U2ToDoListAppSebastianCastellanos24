const 
    boton2 = document.getElementById('boton2'),
    tareaHacer = document.getElementById('tareaHacer'),
    title = document.getElementById('title'),
    descripcion = document.getElementById('descripcion'),
    responsable = document.getElementById('responsable'),
    fecha = document.getElementById('fecha')


moment.locale('es');
const hoy = moment();
const format = moment(hoy).format("DD/MM/YYYY");



boton2.addEventListener('click', function(){
    if(title.value == '' || descripcion.value == '' || responsable.value == '' || fecha.value == ''){
        alert('Todos los campos son obligatorios');
    } else{
        tareaHacer.innerHTML += 
        `<div class="contenedortarea">
            <h4>${title.value}</h4>
            <div class="infotarea">
                <p>Descripción: ${descripcion.value}</p>
                <hr><p>Responsable: ${responsable.value}</p>
                <p>Deadline: ${moment(fecha.value).format("DD/MM/YYYY")}</p>
                <p>Creada el: ${format}</p>
            </div>
            <div class="estado"></div>
        </div>`
    }
    
})