const books=document.getElementsByClassName('bookcover');
const banner=document.getElementsByClassName('adbanner');
const ytbanner=document.getElementsByClassName('ytbanner');
const other_=document.getElementsByClassName('other');
const design_=document.getElementsByClassName('design');
const logo_=document.getElementsByClassName('logo');
const works=document.getElementsByClassName('work_');
const list_=document.querySelectorAll("li")


// For toggling nav bar in small

const navToggle=document.querySelector('#navtoggle .hamburger_icon')
const smnav=document.getElementsByClassName('smnav')[0]


navToggle.addEventListener('click',()=>{
  navToggle.classList.toggle('open')
  smnav.classList.toggle('smnavh')
})

// 

function showWork(e,cls) {
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
}


function remClasses(params) {
  for (const child of works) {
    child.classList.add('hide')
    
  }

  for (const child of list_) {
    child.classList.remove('active')
    
  }
}

