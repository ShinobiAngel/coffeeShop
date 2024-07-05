let menuBtn = document.querySelector('.bgr');
let sideBar = document.querySelector('.sideBar');

menuBtn.addEventListener('click', ()=> {
    sideBar.classList.toggle('active');

    menuBtn.classList.toggle('toggle');
})



/*--- DD Menu ---*/
var drop = document.getElementsByClassName('collapse');
var dd;

for (dd = 0; dd < drop.length; dd++) {
    drop[dd].addEventListener('click', function() {
    this.classList.toggle('active2');

    var menuList = this.nextElementSibling;
    
    if (menuList.style.maxHeight) {
        menuList.style.maxHeight = null;
    } else {
        menuList.style.maxHeight = menuList.scrollHeight + "px";
    }
  });
}



