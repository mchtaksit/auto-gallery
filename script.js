// sidebar start
function showSidebar() {
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'flex';
}
function hideSidebar() {
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'none';
}


// sidebar end
// scroll start
ScrollReveal({
	reset: true,
	distance: '20px',
	delay: 100
});


ScrollReveal().reveal('.top-haeder', { delay: 10, duration: 1000, origin: 'top' });
ScrollReveal().reveal('.img-header,.sec-1 p', { delay: 10, duration: 1500, origin: 'top', });
ScrollReveal().reveal('.bot-header', { delay: 10, duration: 2000, origin: 'bottom', });
ScrollReveal().reveal('.sec-1 h2', { delay: 10, duration: 2000, origin: 'right', distance: '60px' });
ScrollReveal().reveal('.sec-1 img,.sec-3 img', { delay: 10, duration: 2000, origin: 'left', distance: '140px' });

ScrollReveal().reveal('.sec-2 img', { delay: 10, duration: 2000, origin: 'right', distance: '180px' });
ScrollReveal().reveal('.text-part p', { delay: 10, duration: 2000, origin: 'bottom', distance: '100px' });
ScrollReveal().reveal('.text-part h2', { delay: 10, duration: 2000, origin: 'top', distance: '100px' });

// scroll end

// scroll detection start
let lastScrollTop = 0;
const navbar = document.getElementById('navbar-1');

window.addEventListener('scroll', function () {
	let scrollTop = this.document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		navbar.style.top = '-130px';

		console.log(scrollTop);
		console.log(`bu kücük olmalı ${lastScrollTop}`);
	} else {

		navbar.style.top = '100px';
	}
	lastScrollTop = scrollTop;
	console.log(scrollTop);
});

// scroll detection end
// whell sstart
let rotation = 0
window.addEventListener('scroll', function () {
	const scrollAmount = window.scrollY || window.pageYOffset;
	rotation = scrollAmount;
	document.querySelector('.wheel').style.transform = `rotate(${rotation}deg)`;
})
// whell end
// list start
const list = document.querySelector('.carList');

let isDown = false;
let startX;
let scrollLeft;

list.addEventListener('mousedown', (e) => {
	isDown = true;
	list.classList.add('active');
	startX = e.pageX - list.offsetLeft;
	scrollLeft = list.scrollLeft;
});

list.addEventListener('mouseleave', () => {
	isDown = false;
	list.classList.remove('active');
});

list.addEventListener('mouseup', () => {
	isDown = false;
	list.classList.remove('active');
});

list.addEventListener('mousemove', (e) => {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - list.offsetLeft;
	const walk = (x - startX) * 3;
	list.scrollLeft = scrollLeft - walk;
});


// list end