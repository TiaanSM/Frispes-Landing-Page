const navHamburger = document.querySelector('.nav-hamburger');


navHamburger.addEventListener('click', () => {
	const mobileMenu = document.querySelector('.mobile-menu');
	mobileMenu.classList.toggle('active-menu');
});

const imageOne = document.querySelector('.gallery-img-1');
const imagesTwo = document.querySelectorAll('.gallery-img-2');

const observer = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			entry.target.classList.toggle('animated');
		})
	},
	{
		threshold: 1,
	}
)

imagesTwo.forEach(image => {
	observer.observe(image);
})