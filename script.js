



// BURGER
menu.onclick = function myFucntion() {
	var x = document.getElementById('myTopnav');
	if (x.className === "topnav") {
		x.className += " responsive";
	}
	else {
		x.className = "topnav";
	}
}
//SMOOTH SCROLL
jQuery(function($) {
	$('a[href*="#"]').on('click.smoothscroll', function( e ) {
		var hash = this.hash, _hash  = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
		if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
		var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
		if( ! $target.length ) return;
		e.preventDefault();
		$('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 1500, 'swing', function(){
			window.location.hash = hash;
		});
	});
});

let colorMyCompany = document.getElementByClass('myCompany');
colorMyCompany.style.color = white;

