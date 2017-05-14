;(function(window, document) {
  'use strict';
  var current = document.getElementById('site-nav-current');

  current.parentElement.addEventListener('click', currentSiteMenu);

  function currentSiteMenu(event, list) {
  	event.preventDefault()

    var list  = document.getElementById('site-nav-list');
	

    list.classList.toggle("site-nav__list--close");
    event.currentTarget.firstElementChild.classList.toggle("site-nav__current--active");
    event.currentTarget.classList.toggle("site-nav__current-container--active");
  }
}(window, document));