const btn_tasks = document.getElementById("btn_tasks");


btn_tasks.addEventListener('click', ()=>{
    let input_tasks = document.getElementById("input_tasks");
    let input_tasks_value = input_tasks.value


    if (input_tasks_value == "") {
        alert("Adicione uma tarefa amigo!!!");
    } else {
        
        
        var div = document.createElement('body_tasks');
        
        div.innerHTML = 
            `<div class="box_tasks">
                <p class="text_task" onclick="isCompleted(this)">${input_tasks_value}</p>
                <button class="btn_delete" onclick="remove_tasks(this)">X</button>
            </div>`
        document.getElementById("area_tasks").appendChild(div);
        
}

input_tasks.value = '';

});

    const isCompleted = function(text){
        text.classList.toggle('style_tasks')
    }


    const remove_tasks = function(button){
        var tasksDiv = button.parentNode;

        tasksDiv.parentNode.removeChild(tasksDiv)
}

