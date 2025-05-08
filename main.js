/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n    const contact = document.createElement('div');\n\n    const heading = document.createElement('h1');\n    heading.textContent = \"contact Us\";\n\n    const phone = document.createElement('p');\n    phone.textContent = \"📞 (555) 123-4567\";\n\n    const email = document.createElement('p');\n    email.textContent = \"📧 contact@bearsteakhouse.com\";\n\n    const address = document.createElement('p');\n    address.textContent = \"📍 123 Forest Lane, Pinewood, CO\"; \n\n    contact.appendChild(heading);\n    contact.appendChild(phone);\n    contact.appendChild(email);\n    contact.appendChild(address);\n\n    return contact;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250YWN0LmpzP2Q1NjUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJjb250YWN0IFVzXCI7XG5cbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwaG9uZS50ZXh0Q29udGVudCA9IFwi8J+TniAoNTU1KSAxMjMtNDU2N1wiO1xuXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZW1haWwudGV4dENvbnRlbnQgPSBcIvCfk6cgY29udGFjdEBiZWFyc3RlYWtob3VzZS5jb21cIjtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwi8J+TjSAxMjMgRm9yZXN0IExhbmUsIFBpbmV3b29kLCBDT1wiOyBcblxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChwaG9uZSk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICAgIHJldHVybiBjb250YWN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contact.js\n");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n    const home = document.createElement('div');\n\n    const heading = document.createElement('h1');\n    heading.textContent = \"Welcome to Bear Steakhouse\";\n\n    const image = document.createElement('img');\n    image.src = __webpack_require__(/*! ./images/steak.jpg */ \"./src/images/steak.jpg\");\n    image.alt = \"Delicious steak\";\n    image.wdith = 500;\n\n    const description = document.createElement('p');\n    description.textContent = \"We server meals that bring out your wild side! Come on in and grab a bite!\";\n\n    home.appendChild(heading);\n    home.appendChild(image);\n    home.appendChild(description);\n\n    return home;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsa0RBQW9CO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUuanM/N2I0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gQmVhciBTdGVha2hvdXNlXCI7XG5cbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLnNyYyA9IHJlcXVpcmUoJy4vaW1hZ2VzL3N0ZWFrLmpwZycpO1xuICAgIGltYWdlLmFsdCA9IFwiRGVsaWNpb3VzIHN0ZWFrXCI7XG4gICAgaW1hZ2Uud2RpdGggPSA1MDA7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiV2Ugc2VydmVyIG1lYWxzIHRoYXQgYnJpbmcgb3V0IHlvdXIgd2lsZCBzaWRlISBDb21lIG9uIGluIGFuZCBncmFiIGEgYml0ZSFcIjtcblxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gaG9tZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/home.js\n");

/***/ }),

/***/ "./src/images/steak.jpg":
/*!******************************!*\
  !*** ./src/images/steak.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e60c0f4ea721651848c8.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nfunction setActiveTab(tabFunction) {\n    const content = document.getElementById('content');\n    content.innerHTML = ``;\n    content.appendChild(tabFunction());\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    document.getElementById('home-btn').textContent = 'Home';\n    document.getElementById('menu-btn').textContent = \"Menu\";\n    document.getElementById('about-btn').textContent = \"Contact\";\n\n    document.getElementById('home-btn').addEventListener('click', () => setActiveTab(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n    document.getElementById('menu-btn').addEventListener('click', () => setActiveTab(_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n    document.getElementById('about-btn').addEventListener('click', () => setActiveTab(_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n\n   setActiveTab(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFnQztBQUNBO0FBQ007OztBQUd0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFGQUFxRiw2Q0FBVTtBQUMvRixxRkFBcUYsNkNBQVU7QUFDL0Ysc0ZBQXNGLGdEQUFhOztBQUVuRyxnQkFBZ0IsNkNBQVU7QUFDMUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuXG5mdW5jdGlvbiBzZXRBY3RpdmVUYWIodGFiRnVuY3Rpb24pIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IGBgO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFiRnVuY3Rpb24oKSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtYnRuJykudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnRuJykudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQtYnRuJykudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0QWN0aXZlVGFiKGNyZWF0ZUhvbWUpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNldEFjdGl2ZVRhYihjcmVhdGVNZW51KSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0QWN0aXZlVGFiKGNyZWF0ZUNvbnRhY3QpKTtcblxuICAgc2V0QWN0aXZlVGFiKGNyZWF0ZUhvbWUpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n    const menu = document.createElement('div');\n\nconst heading = document.createElement('h1');\nheading.textContent = \"Our Menu\";\n\nconst item1 = document.createElement('p');\nitem1.textContent = \"🔥 Grizzly Ribeye - $24.99\";\n\nconst item2 = document.createElement('p');\nitem2.textContent = \"🐻 Honey-Glazed Salmon - $19.99\";\n\nconst item3 = document.createElement('p');\nitem3.textContent = \"🌲 Wild Mushroom Risotto - $17.99\";\n\nmenu.appendChild(heading);\nmenu.appendChild(item1);\nmenu.appendChild(item2);\nmenu.appendChild(item3);\n\nreturn menu;\n\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQSxpRUFBZSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5oZWFkaW5nLnRleHRDb250ZW50ID0gXCJPdXIgTWVudVwiO1xuXG5jb25zdCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbml0ZW0xLnRleHRDb250ZW50ID0gXCLwn5SlIEdyaXp6bHkgUmliZXllIC0gJDI0Ljk5XCI7XG5cbmNvbnN0IGl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuaXRlbTIudGV4dENvbnRlbnQgPSBcIvCfkLsgSG9uZXktR2xhemVkIFNhbG1vbiAtICQxOS45OVwiO1xuXG5jb25zdCBpdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbml0ZW0zLnRleHRDb250ZW50ID0gXCLwn4yyIFdpbGQgTXVzaHJvb20gUmlzb3R0byAtICQxNy45OVwiO1xuXG5tZW51LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xubWVudS5hcHBlbmRDaGlsZChpdGVtMSk7XG5tZW51LmFwcGVuZENoaWxkKGl0ZW0yKTtcbm1lbnUuYXBwZW5kQ2hpbGQoaXRlbTMpO1xuXG5yZXR1cm4gbWVudTtcblxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;