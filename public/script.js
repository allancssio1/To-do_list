const displays = ['block', 'none']
const paddings = ['0px', '0px']
let priority = document.querySelector('.drop-down-priority'),
  containerPriority = document.querySelector('.item .priority'),
  situation = document.querySelector('.drop-down-situation'),
  containerSituation = document.querySelector('.item .situation'),
  formDisplay = document.querySelector('.form'),
  buttonAddTask = document.querySelector('.change-display')

const functions = {
  dropDownPriority(params) {
    priority.style.display = displays[params]
    containerPriority.style.padding = paddings[params]
  },
  priority(params) {
    let item = document.querySelector(`#item-priority-${params}`).innerHTML
    document.querySelector('input[name="priority"]').value = item
  },
  dropDownSituation(params) {
    situation.style.display = displays[params]
    containerSituation.style.padding = paddings[params]
  },
  situation(params) {
    let item = document.querySelector(`#item-situation-${params}`).innerHTML
    document.querySelector('input[name="situation"]').value = item
  },
  formAdd() {
    formDisplay.classList.toggle('active')
    if (buttonAddTask.innerHTML == 'Adicionar Tarefa'){
      buttonAddTask.innerHTML = 'Cancelar Adicição'    
    } else {
      buttonAddTask.innerHTML = 'Adicionar Tarefa'
    }

  }
}