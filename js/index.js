const ApiUrl = "https://my-json-server.typicode.com/SebastianCastellanos24/M3U2ToDoListAppSebastianCastellanos24/tareasD";

const 
    toDoTaskList = document.getElementById("toDoTaskList"),
    taskProcessList = document.getElementById("taskProcessList"),
    taskEndedList = document.getElementById("taskEndedList")

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

function printTaskDefault(data){
    for (let i = 0; i <= data.length; i++) {
        toDoTaskList.innerHTML += 
        `<div class="containerNewTask" id="containerNewTask">
            <h4>${data[i].title}</h4>
            <div class="infoTask">
                <p>Descripción: ${data[i].descripcion}</p>
                <hr><p>Responsable: ${data[i].responsable}</p>
                <p>Deadline: ${moment.unix(data[i].deadline).format("DD/MM/YYYY")}</p>
                <p>Creada el: ${moment.unix(data[i].created).format("DD/MM/YYYY")}</p>
            </div>
            <div class="stateTask"></div>
        </div>`;
    }
}