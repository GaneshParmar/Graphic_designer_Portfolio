const books=document.getElementsByClassName('bookcover');
const banner=document.getElementsByClassName('adbanner');
const ytbanner=document.getElementsByClassName('ytbanner');
const other_=document.getElementsByClassName('other');
const design_=document.getElementsByClassName('design');
const logo_=document.getElementsByClassName('logo');
const works=document.getElementsByClassName('work_');
const list_=document.querySelectorAll("li")
const loader=document.querySelector("#loader")

// OwlCarosel
$(document).ready(function() {
  

  $("#banner-area .owl-carousel").owlCarousel({
      items:1,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true
  });

  var dots = $('.owl-dots').css('position', 'absolute').css('bottom', '5px');
dots.css('left', 'calc(50% - ' + dots.width()/2+'px)');

$("#imgBtn").on('click',(e)=>{
  $("#imgBtn").hide()
  document.querySelector("#photoGallery").classList.toggle('show');
})



});


// For toggling nav bar in small

const navToggle=document.querySelector('#navtoggle .hamburger_icon')
const smnav=document.getElementsByClassName('smnav')[0]


navToggle.addEventListener('click',()=>{
  navToggle.classList.toggle('open')
  smnav.classList.toggle('smnavh')
})

// 

function showWork(e,cls) {

  for (const child of works) {
    child.classList.add('hide')
  }
  loader.classList.remove('hide')

  setTimeout(() => {
  loader.classList.add('hide')
  for (const child of works) {
    child.classList.add('hide')
  }
  remClasses()
    if(cls!="work_"){
      let selectednav=document.querySelectorAll(cls)
        
        // works.forEach(work => {
        //     work.classList.add('hide')
        // });


          for (const child of selectednav) {
            child.classList.remove('hide')
          }
    }
    else{
        for (const child of works) {
            child.classList.remove('hide')
          }
    }
    e.classList.add('active')
  }, 500);
}


function remClasses(params) {
  for (const child of works) {
    child.classList.add('hide')
    
  }

  for (const child of list_) {
    child.classList.remove('active')
    
  }
}

