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



/*
window.addEventListener('scroll', function() {
    var scroll = document.querySelector('.scrolltop');
    scroll.classList.toggle("active", window.scrollY > 500)
})

function topScroll() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}*/



//menu show more items btn
/*
$(document).ready(function(){
    function update_btn(old_btn_id, new_btn_id, btn_content) {
    	$(old_btn_id).removeAttr('id');
    		$('.load-more a').attr({
    			id : new_btn_id
    		});
    		$('#' + new_btn_id).html(btn_content);
    }


    $(document).on('click', 'a#more_items', function(event) {
    	event.preventDefault();
    	$('.menu_DD .hidden_items').slideDown({duration:800,  easing: "easeInOutQuart", complete : function(){
    		update_btn('#more_items', 'hide_items', 'hide items<hr/><span class="top_arrow"></span>');
    	}});
    });


    $(document).on('click', 'a#hide_items', function(event) {
    	event.preventDefault();
    	$('.menu_DD .hidden_items').slideUp({duration:800,  easing: "easeInOutQuart", complete : function(){
    		update_btn('#hide_items', 'more_items', 'show more<hr/><span class="bottom_arrow"></span>');
    	}});
    });
}); */
