
const sections = document.querySelectorAll("section");


window.onload = function () {
	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile_nav');
	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is_active');
        mobile_menu.classList.toggle('is_active');
	});
}






