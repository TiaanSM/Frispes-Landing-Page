const navHamburger = document.querySelector('.nav-hamburger');

navHamburger.addEventListener('click', () => {
	const mobileMenu = document.querySelector('.mobile-menu');
	mobileMenu.classList.toggle('active-menu');
});



const awnser = document.querySelector('.awnser-icon');

awnser.addEventListener('mouseover', () => {
    const question = document.querySelector('.question');

	question.textContent = 'Check the form above';
});