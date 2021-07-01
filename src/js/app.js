const tasks = document.querySelector('.tarefas__lista');

tasks.addEventListener('click', (event) => {
    const task = event.target.closest('.tarefas__item');
    const taskId = task.dataset.tarefa;
    const checkbox = document.querySelector(`#tarefa-${taskId}`)

    /**
     * Quando o evento click ocorre no checkbox, o DOM retornara o estado
     * do checkbox antes que o arvore seja atualizada com o atributo checked
     * resultando em nenhuma mudança no checkbox
     */
    console.log(checkbox.checked)
    if(checkbox && ( event.target !== checkbox )) {
      checkbox.checked = !checkbox.checked;
    }

});

