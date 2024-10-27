

let navHeader = document.querySelector ('.nav-own')

window.addEventListener ('scroll' , () => {
    console.log(pageYOffset);
   if(pageYOffset > 20){
       navHeader.style.top = '0'
       navHeader.style.width = '100%'
   } else {
    navHeader.style.top = '2rem'
    navHeader.style.width = '95%'
   }
})


function slideShow(item) {
    let headerImg = document.querySelector ('.main-img')
    headerImg.setAttribute ('src' , item)
}