const ApiUrl = "https://my-json-server.typicode.com/SebastianCastellanos24/M3U2ToDoListAppSebastianCastellanos24/tareasD";

const 
    TareaPendienteLista = document.getElementById("TareaPendienteLista"),
    TareaProcesoLista = document.getElementById("TareaProcesoLista"),
    TareaFinalizadaLista = document.getElementById("TareaFinalizadaLista"),
    boton = document.getElementById('boton')

async function getData(url){
    try{
        const res = await axios.get(url);
        let data = res.data;
        console.log(data);
        printTaskDefault(data);
    }
    catch{
        console.error("Error, no se encuentran los datos");
    }
}

getData(ApiUrl);

let click = 0

moment.locale('es');
const hoy = moment();
const format = moment(hoy).format("DD/MM/YYYY");

function printTaskDefault (data){
    
    let fecha1 = data[0].deadline;
    let fecha1Format = moment.unix(fecha1).format("DD/MM/YYYY");

    let fecha2 = data[0].created;
    let fecha2Format = moment.unix(fecha2).format("DD/MM/YYYY");

    TareaPendienteLista.innerHTML = 
    `<div class="contenedortarea">
        <h4>${data[0].title}</h4>
        <div class="infotarea">
            <p>Descripción: ${data[0].descripcion}</p>
            <hr><p>Responsable: ${data[0].responsable}</p>
            <p>Deadline: ${fecha1Format}</p>
            <p>Creada el: ${fecha2Format}</p>
        </div>
        <div class="estado"></div>
    </div>`;

    let fecha3 = data[1].deadline;
    let fecha3Format = moment.unix(fecha3).format("DD/MM/YYYY");

    let fecha4 = data[1].created;
    let fecha4Format = moment.unix(fecha4).format("DD/MM/YYYY");

    TareaProcesoLista.innerHTML = 
    `<div class="contenedortarea">
        <h4>${data[1].title}</h4>
        <div class="infotarea">
            <p>Descripción: ${data[1].descripcion}</p>
            <hr><p>Responsable: ${data[1].responsable}</p>
            <p>Deadline: ${fecha4Format}</p>
            <p>Creada el: ${fecha3Format}</p>
        </div>
        <div class="estado2" ></div>
    </div>`;

    let fecha5 = data[2].deadline;
    let fecha5Format = moment.unix(fecha5).format("DD/MM/YYYY");

    let fecha6 = data[2].created;
    let fecha6Format = moment.unix(fecha6).format("DD/MM/YYYY");

    TareaFinalizadaLista.innerHTML =
    `<div class="contenedortarea">
        <h4>${data[2].title}</h4>
        <div class="infotarea">
            <p>Descripción: ${data[2].descripcion}</p>
            <hr><p>Responsable: ${data[2].responsable}</p>
            <p>Deadline: ${fecha5Format}</p>
            <p>Creada el: ${fecha6Format}</p>
        </div>
        <div class="estado3"></div>
    </div>`;
}