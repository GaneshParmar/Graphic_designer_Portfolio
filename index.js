// function loadImage(element, imagePath, spinnerPath) {
//     element.tagName === 'img'
//       ? element.setAttribute('src', spinnerPath)
//       : (element.style.background = `url(${spinnerPath}) 50% 50% no-repeat`);
//     const image = new Image();
//     image.crossOrigin = 'Anonymous';
//     image.src = imagePath;
//     image.onload = () => {
//       element.tagName === 'img'
//         ? element.setAttribute('src', imagePath)
//         : (element.style.background = `url(${imagePath})`);
//         console.log("image loaded")
//     };
//   }

// const images_=document.getElementsByClassName("workImg")[0];

// loadImage(images_,images_.getAttribute("src"),"./Icons/Dual Ring-1s-200px.gif")


// images_.forEach(img_ => {
//     loadImage(img_,img_.getAttribute("src"),"./Icons/Dual Ring-1s-200px.gif")
// });

const navToggle=document.querySelector('#navtoggle .hamburger_icon')
const smnav=document.getElementsByClassName('smnav')[0]
const closeContact=document.querySelector('#close')
const contactF=document.querySelector('#contactForm')
const contactBtn=document.querySelector('#contactBtn')
const contactWrap=document.getElementsByClassName('contactWrap')[0]
const sm_nav=document.getElementById('sm_nav')

navToggle.addEventListener('click',()=>{
  navToggle.classList.toggle('open')
  smnav.classList.toggle('smnavh')
  
})

closeContact.addEventListener('click',()=>{
  contactWrap.style.display="none"
  contactF.style.top="-100%"
})

contactBtn.addEventListener('click',()=>{
  contactWrap.style.display="block"
  contactF.style.top="0%"
})

// sm_nav.onfocusout=()=>{
//   smnav.classList.toggle('smnavh')
// }

$(document).on("focusout","#sm_nav",function(){
  if(navToggle.classList.contains('open')){
    navToggle.classList.remove('open')
    smnav.classList.toggle('smnavh')
  }
});

