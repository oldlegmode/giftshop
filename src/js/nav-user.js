;(function(window, document) {
  'use strict';
  var current = document.getElementById('user-menu-current');

  current.addEventListener('click', currentMenu);

  function currentMenu(event, list) {
  	event.preventDefault()

	var list  = document.getElementById('user-menu-list');
	

    list.classList.toggle("nav-user__list--close-xs");
    event.currentTarget.classList.toggle("nav-user__link-current--active");
  }
}(window, document));