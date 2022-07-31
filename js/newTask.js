const 
    buttonNewTask = document.getElementById('buttonNewTask'),
    toDoTask = document.getElementById('toDoTask'),
    title = document.getElementById('title'),
    description = document.getElementById('description'),
    taskOwner = document.getElementById('taskOwner'),
    deadLine = document.getElementById('deadLine')

const today = moment();

buttonNewTask.addEventListener('click', function(){
    if(title.value == '' || description.value == '' || taskOwner.value == '' || deadLine.value == ''){
        alert('Todos los campos son obligatorios');
    } else{
        taskProcess.innerHTML += 
        `<div class="containerNewTask">
            <h4>${title.value}</h4>
            <div class="infoTask">
                <p>Descripción: ${description.value}</p>
                <hr><p>Responsable: ${taskOwner.value}</p>
                <p>Deadline: ${moment(deadLine.value).format("DD/MM/YYYY")}</p>
                <p>Creada el: ${moment(today).format("DD/MM/YYYY")}</p>
            </div>
            <div class="stateTaskProcess"></div>
        </div>`
    }
})