(function(){
	$('.flex-container').waitForImages(function() {
		$('.spinner').fadeOut();
	}, $.noop, true);
	
	$(".flex-slide").each(function(){
		$(this).hover(function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(0deg)',
				top: '10%'
			});
			$(this).find('.flex-title2').css({
				transform: 'rotate(0deg)',
				top: '10%'
			});
			$(this).find('.flex-about-img1').css({
				opacity: '1'
			});
			$(this).find('.flex-about-img2').css({
				opacity: '1'
			});
			$(this).find('.flex-about-img3').css({
				opacity: '1'
			});
			$(this).find('.flex-about-img4').css({
				opacity: '1'
			});
		}, function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(90deg)',
				top: '26%'
			});
			$(this).find('.flex-title2').css({
				transform: 'rotate(90deg)',
				top: '30%'
			});
			$(this).find('.flex-about-img1').css({
				opacity: '0'
			});
			$(this).find('.flex-about-img2').css({
				opacity: '0'
			});
			$(this).find('.flex-about-img3').css({
				opacity: '0'
			});
			$(this).find('.flex-about-img4').css({
				opacity: '0'
			});
		})
	});
})();