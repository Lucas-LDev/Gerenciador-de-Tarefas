function addTask() {
    //capturando a caixa da message
    let message = document.getElementById("message");
    message.textContent = "Tarefa adicionada";

    //capturando input da task
    let taskInput = document.getElementById("task-input");
    let task = taskInput.value.trim();

    //verificação de tarefa vazia
    if (!task) {
        message.textContent = "A tarefa não pode ser nula";
        //trocando a cor do texto para rosa
        message.style.color = "#FF79C6";
    } else {
        //pegando a ul(lista de tarefas)
        let ul = document.getElementById("tasks-ul");

        //criando a li(tarefa)
        let li = document.createElement("li");
        li.classList.add("task-li");

        //criando o span para o texto da tarefa
        let taskSpan = document.createElement("span");
        taskSpan.textContent = task[0].toUpperCase() + task.slice(1);

        //criando o botão de concluir tarefa
        let btnComplete = document.createElement("button");
        btnComplete.classList.add("btn-complete");
        btnComplete.innerHTML = `<i class="fa-solid fa-check"></i>`;
        //marcando como concluído
        btnComplete.addEventListener("click", () => {
            li.classList.toggle("completed");
        })

        //criando o botão de apagar tarefa
        let btnRemove = document.createElement("button");
        btnRemove.classList.add("btn-remove");
        btnRemove.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        //removendo a tarefa da ul ao apagar
        btnRemove.addEventListener("click", () => {
            li.classList.toggle("removing");
            li.remove();
        })

        //adicionando o span e os botões no li
        li.appendChild(taskSpan);
        li.appendChild(btnComplete);
        li.appendChild(btnRemove);
        //adicionando o li na ul
        ul.appendChild(li);

        //trocando cor do texto para verde
        message.style.color = "#00ff40";
    }
    //limpando o input ao adicionar uma tarefa
    taskInput.value = "";
}