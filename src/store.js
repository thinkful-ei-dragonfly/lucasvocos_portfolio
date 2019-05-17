'use strict';
import $ from 'jquery';
class Project {
  constructor() {
    this.projects = [
      {
        active: true,
        title: "Quiz App",
        img: "./src/img/Quiz.png",
        github: "https://github.com/thinkful-ei-dragonfly/robert-lucas_quiz-app/tree/master",
        url: "",
        desc: "This was a project worked on with Rob Wiggins. The quiz leverages the Open Trivia DB API to gather trivia questions.",
        skills: [
          "HTML", "CSS", "Javascript", "jQuery", "Node", "NPM", "Webpack"
        ],
      },
      {
        active: false,
        title: "B_KS_T",
        img: "./src/img/bkst.png",
        github: "https://github.com/lucasvocos/bks-at",
        url: "https://books-at.myshopify.com",
        desc: "I designed and developed a webshop and blog for a local independent bookseller.",
        skills: [
          "HTML", "CSS", "Javascript", "jQuery", "AJAX", "Liquid (Shopify PHP-based templating language)"
        ],
      }
    ]
  }

  render(project){
    let techStack = '';
    let i = 0;
    while (i < project.skills.length) {
      techStack += `<li>${project.skills[i]}</li>`
      i++;
    }
    let url = `<p><a href="${project.url}" target="_blank">Live Site</a></p>`;
    if (!project.url) {
      url = '';
    }
    let html = `
    <li class="project" role="listitem">
      <div class="projectContent">
        <img src="${project.img}" alt="">
        <div class="projectInfo">
          <div class="projectTitle">
            <h2>${project.title}</h2>
            <p><a href="${project.github}" target="_blank">Github</a> </p>
            ${url}
          </div>
          <div class="projectDesc">
            <p>${project.desc}</p>
            <ul>
              <p class="caps">Skills</p>
              ${techStack}
            </ul>
          </div>
        </div>
      </div>
    </li>`
    $('.projects').html(html);
  }

  findNext(){
    let currentProj = this.projects.find(project => project.active === true);
    let nextProj;

    for (var i = 0; i < this.projects.length; i++) {
      this.projects.indexOf(currentProj);
      nextProj = this.projects[i +1];

      break;
    }
    currentProj.active = false;
    nextProj.active = true;

    this.render(nextProj);
  }
  findPrev(){
      let currentProj = this.projects.find(project => project.active === true);
      let prevProj;
      debugger;
      for (var i = 0; i < this.projects.length; i++) {
        this.projects.indexOf(currentProj);
        prevProj = this.projects[0];
        debugger;
        break;
      }
      currentProj.active = false;
      prevProj.active = true;


      this.render(prevProj);
  }

  init(){
    let firstProj = this.projects.find(project => project.active === true);
    this.render(firstProj);
  }
}

export default Project;
