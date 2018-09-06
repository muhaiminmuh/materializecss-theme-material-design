$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul')
	$('.pKanan').addClass('pMuncul')
});



$(window).scroll(function() { 
	var wScroll = $(this).scrollTop();


// service //

	if( wScroll > $('.services').offset().top - 250) { 
		$('.services .card-panel').addClass('muncul');
	}


// image //

	if( wScroll > $('.image').offset().top - 300) {
		$('.image .thumbnail').each(function(i) {
			setTimeout(function(){
				$('.image .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
	}


// contact //

	if( wScroll > $('.contact').offset().top - 300) {
		$('.cd1').addClass('muncul')
		$('.cd2').addClass('muncul');
	}


});