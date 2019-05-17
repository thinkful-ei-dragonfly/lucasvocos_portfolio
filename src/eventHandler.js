import $ from 'jquery';
import Project from './store.js';
let store = new Project();

function handleContact(){
  $('.contact').on('click', event => {
    event.preventDefault();
    $('.sidePanelContainer, .sidePanel').addClass('nav-open');
  })
}
function handleClose(){
  $('.close').on('click',event => {
    event.preventDefault();
    $('.sidePanelContainer, .sidePanel').removeClass('nav-open');
  })
}
function handleNavigation(){
  $('#right').on('click', event => {
    event.preventDefault();
    store.findNext();
  })
  $('#left').on('click', event => {
    event.preventDefault();
    store.findPrev();
  })
}
export default {
  handleContact,
  handleClose,
  handleNavigation
}
