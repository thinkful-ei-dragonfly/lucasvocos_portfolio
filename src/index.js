import $ from 'jquery';
import eventHandler from './eventHandler'
import 'normalize.css';
import Project from './store.js'

require('./style/index.css');

function main(){
  eventHandler.handleContact();
  eventHandler.handleClose();
  eventHandler.handleNavigation();

  const store = new Project();
  store.init();
}
$(main);
