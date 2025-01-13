function addTask() {
    let message = "Tarefa adicionada";

    //capturando input da task
    let taskInput = document.getElementById("task-input");
    let task = taskInput.value.trim();

    //verificação de tarefa vazia
    if (!task) {
        message = "A tarefa não pode ser nula";
    } else {
        //pegando a ul(lista de tarefas)
        let ul = document.getElementById("tasks-ul");

        //criando a li(tarefa)
        let li = document.createElement("li");
        li.classList.add("task-li");

        //criando o span para o texto da tarefa
        let taskSpan = document.createElement("span");
        taskSpan.textContent = task;

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
    }

    //printando mensagem ao tentar adicionar uma tarefa
    document.getElementById("message").textContent = message;
    //limpando o input ao adicionar uma tarefa
    taskInput.value = "";
}