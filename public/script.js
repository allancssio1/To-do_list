const displays = ['block', 'none']
const paddings = ['0px', '0px']
let dropDown = document.querySelector('.drop-down')
let container = document.querySelector('.item .priority')
const functions = {
  dropdown(params) {
    dropDown.style.display = displays[params]
    container.style.padding = paddings[params]
  },
  priority(params) {
    let item = document.querySelector(`#item-${params}`).innerHTML
  document.querySelector('input[name="priority"]').value = item
  }
}