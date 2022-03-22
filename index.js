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


navToggle.addEventListener('click',()=>{
  navToggle.classList.toggle('open')
  smnav.classList.toggle('smnavh')
})
