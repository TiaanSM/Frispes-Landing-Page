const navHamburger = document.querySelector('.nav-hamburger');

navHamburger.addEventListener('click', () => {
	const mobileMenu = document.querySelector('.mobile-menu');
	mobileMenu.classList.toggle('active-menu');
});

// Test to see if images fit,(need to clean up the code to a for each click statement)
const itemTwo = document.getElementById('fac-2');
const itemThree = document.getElementById('fac-3');
const itemFour = document.getElementById('fac-4');
const itemFive = document.getElementById('fac-5');


itemTwo.addEventListener('click', () => {
	const facImage2 = document.querySelector('.fac-image2');
	facImage2.classList.toggle('fac-image2');
});

itemThree.addEventListener('click', () => {
	const facImage3 = document.querySelector('.fac-image3');
	facImage3.classList.toggle('fac-image3');
});

itemFour.addEventListener('click', () => {
	const facImage4 = document.querySelector('.fac-image4');
	facImage4.classList.toggle('fac-image4');
});

itemFive.addEventListener('click', () => {
	const facImage5 = document.querySelector('.fac-image5');
	facImage5.classList.toggle('fac-image5');
});