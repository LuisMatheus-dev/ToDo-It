const tasks = document.querySelector('.tarefas__lista');

tasks.addEventListener('click', (event) => {
    const task = event.target.closest('.tarefas__item');
    const taskId = task.dataset.tarefa;
    const checkbox = document.querySelector(`#tarefa-${taskId}`)

    /**
     * Quando o click ocorre no checkbox, o estado muda depois que 
     * o javascript lê a propriedade checked, antes que o evento seja lançado,
     * com a exeção do checkbox (!== checkbox)
     * delegando a função de marcar para o proprio checkbox 
     */
    console.log(checkbox.checked)
    if(checkbox && ( event.target !== checkbox )) {
      checkbox.checked = !checkbox.checked;
    }

});

