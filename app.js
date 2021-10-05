const hamburguerMenu = document.querySelector('.hamburguerMenu');
const popMenu = document.querySelector('.popMenu');

hamburguerMenu.addEventListener('click', () => {
	if (hamburguerMenu.classList.contains('hamburguerMenu_open')) {
		hamburguerMenu.classList.remove('hamburguerMenu_open');
		popMenu.style.opacity = 0;
		setTimeout(() => {
			popMenu.classList.add('inactive');
			popMenu.style.opacity = 1;
		}, 300);
	} else {
		hamburguerMenu.classList.add('hamburguerMenu_open');
		popMenu.classList.remove('inactive');
	}
});
