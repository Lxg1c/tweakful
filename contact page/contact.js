document.querySelector('.burger').addEventListener('click', function () {
	document.getElementById('header').classList.toggle('open')
	document.querySelector('.site__container').classList.toggle('dis-scroll')
})

document
	.querySelector('.select__header')
	.addEventListener('click', function () {
		document.querySelector('.select').classList.toggle('select--active')
	})

document.querySelectorAll('.select__body-item').forEach(function (item) {
	item.addEventListener('click', function () {
		document.querySelector('.select__current').value = item.value
	})
})
