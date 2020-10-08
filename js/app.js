
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carrusel__lista'), {
		slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
		arrows: {
			prev: '.carrusel__anterior',
			next: '.carrusel__siguiente',
        },
        
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
})

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
        slidesToScroll: 1,
		draggable: true,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__previous',
			next: '.carousel__next',
        },
        
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
})