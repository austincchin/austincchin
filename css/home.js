$(document).ready(function(){
	var w = $('.projectWidget').width();
	w = w/2;
	$('.projectWidget').css({
		'padding-top': w + 'px'
	})
	$('.projectWidget').css({
		'padding-bottom': w + 'px'
	})

	$(window).resize(function(){
			var w2 = $('.projectWidget').width();
		$('.projectWidget').css({
		'padding-top': w + 'px'
		})
		$('.projectWidget').css({
		'padding-bottom': w + 'px'
		})
	})



})