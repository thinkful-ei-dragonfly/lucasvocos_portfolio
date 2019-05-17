import $ from 'jquery';
import slick from 'slick-carousel';
import 'normalize.css';
require('./style/index.css');

function main(){
  console.log("hello world");

  $('.contact').on('click', event => {
    event.preventDefault();
    $('.sidePanelContainer, .sidePanel').addClass('nav-open');
  })
  $('.close').on('click',event => {
    event.preventDefault();
    $('.sidePanelContainer, .sidePanel').removeClass('nav-open');
  })
  // $('.project').slick();
}
$(main);
