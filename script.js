//criando um array de tarefas
let tasks = [];

//salvando o array de tarefas em JSON mesmo que o array esteja vazio
tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//exibindo tarefas
createTask();

//função de adicionar tarefas no array
function addTask() {
    //capturando a caixa da message
    let message = document.getElementById("message");
    message.textContent = "Tarefa adicionada";

    //capturando input da task
    let taskInput = document.getElementById("task-input");
    let task = taskInput.value.trim();

    //verificação de tarefa vazia
    if (!task) {
        //trocando o texto da mensagem em caso de erro
        message.textContent = "A tarefa não pode ser nula";
        
        //trocando a cor do texto para rosa
        message.style.color = "#FF79C6";
        showMessage();
    } else {
        //adicionando a tarefa no array de tarefas
        tasks.push({"name": task, "status": false});

        //salvando o nome e o estado da tarefa no array de tarefas
        localStorage.setItem("tasks", JSON.stringify(tasks));

        //trocando cor do texto para verde
        message.style.color = "#00ff40";
        showMessage();

        createTask();
    }
    //limpando o input ao adicionar uma tarefa
    taskInput.value = "";
}

//função de criar as tarefas
function createTask() {
    //pegando a ul(lista de tarefas)
    let ul = document.getElementById("tasks-ul");

    //limpando a ul para não duplicar toda vez que recarregar
    ul.innerHTML = "";

    tasks.forEach(t => {
        //criando a li(tarefa)
        let li = document.createElement("li");
        li.classList.add("task-li");

        //criando o span para o texto da tarefa
        let taskSpan = document.createElement("span");
        taskSpan.textContent = t.name[0].toUpperCase() + t.name.slice(1);

        //adicionando a classe "completed" se a tarefa estiver marcada como concluída anteriormente
        if (t.status) {
            li.classList.add("completed");
        }

        //criando o botão de concluir tarefa
        let btnComplete = document.createElement("button");
        btnComplete.classList.add("btn-complete");
        btnComplete.innerHTML = `<i class="fa-solid fa-check"></i>`;
        //marcando como concluído
        btnComplete.addEventListener("click", () => {
            li.classList.toggle("completed");

            //atualizando o status da tarefa, nesse caso, ele apenas inverte o valor do status
            t.status = !t.status;
            localStorage.setItem("tasks", JSON.stringify(tasks));
        })

        //criando o botão de apagar tarefa
        let btnRemove = document.createElement("button");
        btnRemove.classList.add("btn-remove");
        btnRemove.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        //removendo a tarefa da ul ao clicar no botão de apagar
        btnRemove.addEventListener("click", () => {
            li.classList.toggle("removing");
            li.remove();

            //atualizando o array e adicionando nele somente as tasks que forem diferente da qual eu cliquei no botão de excluir
            tasks = tasks.filter(task => task !== t);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        })

        //adicionando o span e os botões no li
        li.appendChild(taskSpan);
        li.appendChild(btnComplete);
        li.appendChild(btnRemove);
        //adicionando o li na ul
        ul.appendChild(li);
    });
}

//função de adicionar tarefas pressionando a tecla enter
function addTaskWithEnter(event) {
    if (event.key === "Enter") {
        addTask();
    }
}

//função de temporizador na exibição da mensagem de tarefa adicionada/erro
let messageTimer;
function showMessage() {
    //limpando o timer
    clearTimeout(messageTimer);
    //exibindo a mensagem
    message.style.display = "block";
    //ocultando a mensagem após 5 segundos
    messageTimer = setTimeout(() => {
        message.style.display = "none";
    }, 5000)
}