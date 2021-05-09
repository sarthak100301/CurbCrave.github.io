
window.onscroll=()=>{

document.getElementById("navigationbar").style.height="100px";
}

new TypeIt("#simpleUsage", {
  speed: 50,
  loop: true,
  waitUntilVisible: true,
})
  .type(
    "<b>Hi! This is Sarthak Gulati. I am a Student at Vellore Institute of Technology eager to gain new insights and experience. Personally, enjoys learning and does not fail, either wins or learns. On my pathway to success. A never quit attitude and want to break ceilings and the only thing that bothers is mediocrity. </b>"
  )
  .break({ delay: 500 })
  .type(
    "<br><i>''Design is not just what it looks like and feels like.<br>Design is how it works.Innovation distinguishes between leader and a follower''</i>",
    { delay: 300 }
  )
  .pause(500)
  .break({ delay: 500 })
  .type("<em>-Steve Jobs</em>")
  .go();

function show(check) {
  switch (check) {
    case "front":
      swal({
        title: "Front End",
        text: "React Js, Angular Js, Pure Js, Jquery",
        icon: "info",
        button: "Want to hire me?",
      });

      break;
    case "app":
      swal({
        title: "Mobile",
        text: "Flutter + Dart",
        icon: "info",
        button: "Want to hire me?",
      });
      break;
    default:
      swal({
        title: "Back End",
        text: "Spring boot,Nodejs,Php ,Laravel",
        icon: "info",
        button: "Want to hire me?",
      });
      break;
  }
}



$(document).ready(function () {

var flutter =[
  {

    topic:"Zoomath",
    description:"ZooMath is an application that will provide an interactive environment for the children of the upcoming modern generation to learn and practice multiplication tables and attend quizzes according to their mindset to improve their knowledge and to make learning fun and easy",
    link:"https://devwadhwa01.github.io/ZooMath/home/page.html"
  },
]

var back = [
{
  topic:"INFINITI Caller",
  description:"A phonebook application using data structures and algorithms.",
  link:"https://github.com/sarthak100301/INFINITI-Caller"
},
]

var front =[
 {
  topic:"Plastevolve",
  description:"A plastic recycling plant with a novel conveyer belt used to segregate plastic according to the different densities. Secured IIIrd position and a grant of Rs. 20000/- from CISCO.",
  link:"https://drive.google.com/file/d/0BwegsjWhPjrrb0xaOC1SNFdzc2ZnTTFRbWplMTlQeFZKRTh3/view?usp=drivesdk"
},
]

flutter.forEach((data)=>{
  console.log(data.topic);
    $('#flutter').append(`<div class='card box-shadow text-center' style='width: 18rem;'>`+
    `<div class='card-body'>`+
        `<h5 class='card-title'>${data.topic}</h5>`+
     ` <p class='card-text'>${data.description} </p>`+
          `<a href='${data.link}'  target='popup' class='d-inline-flex btn btn-primary'>View Project</a>`+
      `</div>`+
    `</div>`+`<br>`);
  
  })
  front.forEach((data)=>{
    console.log(data.topic);
      $('#frontend').append(`<div class='card box-shadow text-center' style='width: 18rem;'>`+
      `<div class='card-body'>`+
          `<h5 class='card-title'>${data.topic}</h5>`+
       ` <p class='card-text'>${data.description} </p>`+
            `<a href='${data.link}'  target='popup' class='d-inline-flex btn btn-primary'>View Project in Github</a>`+
        `</div>`+
      `</div>`+`<br>`);
    
    })
    back.forEach((data)=>{
      console.log(data.topic);
        $('#backend').append(`<div class='card box-shadow text-center' style='width: 18rem;'>`+
        `<div class='card-body'>`+
            `<h5 class='card-title'>${data.topic}</h5>`+
         ` <p class='card-text'>${data.description} </p>`+
              `<a href='${data.link}'  target='popup' class='d-inline-flex btn btn-primary'>View Project</a>`+
          `</div>`+
        `</div>`+`<br>`);
      
      })



})

