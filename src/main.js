const navHamburger = document.querySelector('.nav-hamburger');

navHamburger.addEventListener('click', () => {
	const mobileMenu = document.querySelector('.mobile-menu');
	mobileMenu.classList.toggle('active-menu');
});