const tasks = document.querySelector('.tarefas__lista');

tasks.addEventListener('click', (event) => {
  
  const task = event.target.closest('.tarefas__item');
  const taskId = task.dataset.tarefa;
  const checkbox = document.querySelector(`#tarefa-${taskId}`);
  const riscado = document.querySelector(`.riscado--tarefa-${taskId}`);
  const taskTitle = task.textContent.trim().split('\n')[4].trim().replace(/ /g,'').length
  const pxPorCaractere = taskTitle * 9;
  /**
   * Quando o evento click ocorre no checkbox, o DOM retornara o estado
   * do checkbox antes que o arvore seja atualizada com o atributo checked
   * resultando em nenhuma mudança no checkbox
   */
  console.log(checkbox.checked)
  if(checkbox && ( event.target !== checkbox )) {
    checkbox.checked = !checkbox.checked;
    riscado.style.width = checkbox.checked ? `${pxPorCaractere}px` : 0;
  }

});

