const tasks = document.querySelector('.tarefas__lista');
const sombra = document.querySelector('.sombra');
const options = document.querySelectorAll('.tarefas__item__opcoes');

tasks.addEventListener('click', (event) => {
  
  const task = event.target.closest('.tarefas__item__conteudo');

  if(task !== null) {
    const taskTitle = task.textContent.trim().split('\n')[4].trim().replace(/ /g,'').length
    const taskId = task.dataset.tarefa;
    const checkbox = document.querySelector(`#tarefa-${taskId}`);
    const riscado = document.querySelector(`.riscado--tarefa-${taskId}`);
    const pxPorCaractere = taskTitle * 9;
    
    /**
     * Quando o evento click ocorre no checkbox, o DOM retornara o estado
     * do checkbox antes que o arvore seja atualizada com o atributo checked
     * resultando em nenhuma mudança no checkbox
     */
    const efeitoConcluido = () => {
      task.style.backgroundColor =  checkbox.checked ? '#9C3D54' : '#FFE6C5'
      task.classList.toggle('concluido')
      riscado.style.width = checkbox.checked ? `${pxPorCaractere}px` : 0;
    }


    if(event.target !== checkbox) {
      
      checkbox.checked = !checkbox.checked;
      efeitoConcluido();

    } 

    if(event.target === checkbox) {
      efeitoConcluido();
    }

  }

});

let scrollOn = false;

tasks.addEventListener('wheel', () => { 
  /**
   * Garante que o efeito seja chamado uma vez 
   * quando o usuario parar o scroll 
   */
  if(!scrollOn) {
    sombra.classList.add('sombra-expandir')
    
    //Função será executada de forma assincrona
    setTimeout(() => {
      sombra.classList.remove('sombra-expandir');
      scrollOn = false;
    },1000)
    scrollOn = true;
  }
});  

let animado = false;

const toggleOption = (hide=false) => {
  return (event) => {
    const botaoExpansivel = event.target.childNodes[1];
    const opcoesContainer = event.target.childNodes[3];

    if(!animado) {
      setTimeout(() => {
        const expandir  = hide ? 'remove' : 'add';
        botaoExpansivel.classList[expandir]('btn--expansivel-expandir');
        opcoesContainer.classList[expandir]('opcoes--expandir');

        animado = false;
      }),230};

      animado = true;
  }
}

options.forEach(option => { 
    option.addEventListener('mouseenter', toggleOption());
    option.addEventListener('mouseleave', toggleOption(true));
  
   /*option.addEventListener('mouseenter', event => {
  
    const botaoExpansivel = event.target.childNodes[1];
    const opcoesContainer = event.target.childNodes[3];

    if(!animado) {
      setTimeout(() => {
        
        botaoExpansivel.classList.add('btn--expansivel-expandir');
        opcoesContainer.classList.add('opcoes--expandir');

        animado = false;
      }),230}

      animado = true;
  })  

  option.addEventListener('mouseleave', event => {
    const botaoExpansivel = event.target.childNodes[1];
    const opcoesContainer = event.target.childNodes[3];

    if(!animado) {
      setTimeout(() => {
        
        botaoExpansivel.classList.remove('btn--expansivel-expandir');
        opcoesContainer.classList.remove('opcoes--expandir');

        animado = false;
      }),200}

      animado = true;
  });*/
});
