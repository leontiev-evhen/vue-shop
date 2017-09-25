$(document).ready(function()
{
	setInterval(function(){$('.carousel-control.right').trigger('click')}, 2000);
    $('#thumbCarousel').carousel({
		interval: 3000,
		cycle: true
	})
});

/* affix the Carousel Buttons to Carousel Item on scroll */
$('.nav-carousel').bind({
	offset:
	{
		top: $('#thumbCarousel').height()-$('.nav-carousel').height()
	}
});

$(document).ready( function()
{
	var carouselContainer = $('.carousel');
	var slideInterval = 2000;
	
	$('#carousel').carousel({
		interval:   slideInterval,
		cycle: true
	});
	
	
	var clickEvent = false;
	$('#thumbCarousel').on('click', '.nav-carousel a', function() {
			clickEvent = true;
			$('.nav-carousel li').removeClass('active');
			$(this).parent().addClass('active');	
	}).on('slid.bs.carousel', function(e)
	{
		if(!clickEvent)
		{
			var count = $('.nav-carousel').children().length -1;
			var current = $('.nav-carousel li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id)
			{
				$('.nav-carousel li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
});