//<ANIM-SLIDE>=================================
/*   Анимированное плавное открытие и закрытие блока.
Может применяться к меню или выпадающему списку
Выписано из видео фрилансера.
В CSS нужно установить display: none; для родителя.
*/
// SlideUP
// import { _slideUp } from "forms.js";
// SlideDown
// import { _slideDown } from "forms.js";
//SlideToggLe
// import { _slideToggle } from "forms.js";
//</ANIM-SLIDE>=================================
//<isMobile>=================================
//Проверка на каком устройстве работаем
import { isMobile } from "./functions.js";
//</isMobile>=================================

window.onload = function () { //когда весь контент загрузится
	document.addEventListener("click", documentActions);
	// Actions (делигирование события click)
	function documentActions(e) {
		const targetElement = e.target; // кладем в переменную нажатый объект
		//<моиТАБЫ>=================================
		if (targetElement.closest('.menu-deals__item')) {
			const tabsItems = document.querySelectorAll('.menu-deals__item');
			const tabsColumns = document.querySelectorAll('.deals__columns');
			let currentItemIndex = null;
			if (tabsItems.length > 0) {
				tabsItems.forEach((tabsItem, index) => {
					if (tabsItem.classList.contains('_active')) {
						tabsItem.classList.remove('_active');
					}
					if (targetElement.closest('.menu-deals__item')) {
						targetElement.closest('.menu-deals__item').classList.add('_active');
					}
					if (tabsItem.classList.contains('_active')) {
						currentItemIndex = index;
					}
				});
			}
			if (tabsColumns.length > 0) {
				tabsColumns.forEach(tabsColumn => {
					if (tabsColumn.classList.contains('_active')) {
						tabsColumn.classList.remove('_active');
					}
				});
				tabsColumns[currentItemIndex].closest('.deals__columns').classList.add('_active');
			}
			e.preventDefault();
		}
		//</моиТАБЫ>=================================
	}

}
//=================================
//<BURGER>=================================
const iconMenu = document.querySelector('.icon-menu');//находим класс icon-menu
const menuBody = document.querySelector('.menu__body');//находим класс menu__body
const headerBody = document.querySelector('.header__body');//находим класс menu__body
if (iconMenu) {//Проверяем есть ли icon-menu
	iconMenu.addEventListener("click", function (e) {//вещам событие при клике мыши
		document.body.classList.toggle('_lock');//Для Body даем класс Lock для отключения прокрутки
		iconMenu.classList.toggle('_active');//добавляем класс active icon-menu
		menuBody.classList.toggle('_active');//добавляем класс active menu__body
		headerBody.classList.toggle('_active');//добавляем класс active menu__body
		// _slideToggle(menuBody, 500);
	});
};
//</BURGER>=================================

	//======================================================================
	// работа c шабкой при скролле
	let headerElement = document.querySelector('.header');
	const callback = function (entries, observer) {
		if (entries[0].isIntersecting) {
			headerElement.classList.remove('_scroll');
		} else {
			headerElement.classList.add('_scroll');
		}
	};
	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(headerElement);
	//======================================================================
	
//<BURGER SIDE-MENU>=================================
// let menuPageBurger = document.querySelector('.menu-page__burger');
// let menuPageBody = document.querySelector('.menu-page__body');
// menuPageBurger.addEventListener("click", function (e) {
// 	// menuPageBody.classList.toggle('_active');
// 	menuPageBurger.classList.toggle('_active');
// 	_slideToggle(menuPageBody, 500);
// });
//</BURGER SIDE-MENU>=================================
