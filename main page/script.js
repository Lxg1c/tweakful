const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	// If we need pagination
	pagination: {
		el: '.story-swiper-pagination',
		clickable: true,
		horizontal: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},

	mousewheel: true,
	keyboard: true,
})

document.querySelector('.burger').addEventListener('click', function () {
	document.getElementById('header').classList.toggle('open')
	document.querySelector('.site__container').classList.toggle('dis-scroll')
})
