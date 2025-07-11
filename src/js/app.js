// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true;

// Подключение основного файла стилей
import "../scss/style.scss";
import * as flsFunctions from "./files/functions.js";

//<Бургер>=================================
flsFunctions.menuInit();

//<Cпойлеры>=================================
flsFunctions.spollers();

//<Табы>=================================
flsFunctions.tabs();

//<формы>=================================
import * as flsForms from "./files/forms/forms.js";

flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});

//<Отправка формы>=================================
flsForms.formSubmit();

//<Звездный рейтинг>=================================
flsForms.formRating();

//<Swiper>=================================
import "./files/sliders.js";

//<Скролл>=================================
import * as flsScroll from "./files/scroll/scroll.js";

///<Плавная навигация>=================================
flsScroll.pageNavigation();

//<Хеддер при прокрутке>=================================
flsScroll.headerScroll();

//<Остальной код>=================================
import "./files/script.js";
//<>=================================