
;(function(window, document) {
  'use strict';
  var file = '../SpriteSVG/SVG.svg', // путь к файлу спрайта на сервере
      revision = 1;            // версия спрайта
  if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;
  var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
    request,
    data,
    insertIT = function() {
      document.body.insertAdjacentHTML('afterbegin', data);
    },
    insert = function() {
      if (document.body) insertIT();
      else document.addEventListener('DOMContentLoaded', insertIT);
    };
  if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
    data = localStorage.getItem('inlineSVGdata');
    if (data) {
      insert();
      return true;
    }
  }
  try {
    request = new XMLHttpRequest();
    request.open('GET', file, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        data = request.responseText;
        insert();
        if (isLocalStorage) {
          localStorage.setItem('inlineSVGdata', data);
          localStorage.setItem('inlineSVGrev', revision);
        }
      }
    }
    request.send();
  } catch (e) {}
}(window, document));
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyIsImxvY2FsU3RvcmFnZUZvclN2Z1Nwcml0ZS5qcyIsIm5hdi11c2VyLmpzIiwic2l0ZS1uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIiLCI7KGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgdmFyIGZpbGUgPSAnLi4vU3ByaXRlU1ZHL1NWRy5zdmcnLCAvLyDQv9GD0YLRjCDQuiDRhNCw0LnQu9GDINGB0L/RgNCw0LnRgtCwINC90LAg0YHQtdGA0LLQtdGA0LVcclxuICAgICAgcmV2aXNpb24gPSAxOyAgICAgICAgICAgIC8vINCy0LXRgNGB0LjRjyDRgdC/0YDQsNC50YLQsFxyXG4gIGlmICghZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TIHx8ICFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpLmNyZWF0ZVNWR1JlY3QpIHJldHVybiB0cnVlO1xyXG4gIHZhciBpc0xvY2FsU3RvcmFnZSA9ICdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvdyAmJiB3aW5kb3dbJ2xvY2FsU3RvcmFnZSddICE9PSBudWxsLFxyXG4gICAgcmVxdWVzdCxcclxuICAgIGRhdGEsXHJcbiAgICBpbnNlcnRJVCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGRhdGEpO1xyXG4gICAgfSxcclxuICAgIGluc2VydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuYm9keSkgaW5zZXJ0SVQoKTtcclxuICAgICAgZWxzZSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5zZXJ0SVQpO1xyXG4gICAgfTtcclxuICBpZiAoaXNMb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lubGluZVNWR3JldicpID09IHJldmlzaW9uKSB7XHJcbiAgICBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lubGluZVNWR2RhdGEnKTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGluc2VydCgpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3BlbignR0VUJywgZmlsZSwgdHJ1ZSk7XHJcbiAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKSB7XHJcbiAgICAgICAgZGF0YSA9IHJlcXVlc3QucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgIGluc2VydCgpO1xyXG4gICAgICAgIGlmIChpc0xvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lubGluZVNWR2RhdGEnLCBkYXRhKTtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbmxpbmVTVkdyZXYnLCByZXZpc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0LnNlbmQoKTtcclxuICB9IGNhdGNoIChlKSB7fVxyXG59KHdpbmRvdywgZG9jdW1lbnQpKTsiLCI7KGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgdmFyIGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1tZW51LWN1cnJlbnQnKTtcclxuXHJcbiAgY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGN1cnJlbnRNZW51KTtcclxuXHJcbiAgZnVuY3Rpb24gY3VycmVudE1lbnUoZXZlbnQsIGxpc3QpIHtcclxuICBcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcblx0dmFyIGxpc3QgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItbWVudS1saXN0Jyk7XHJcblx0XHJcblxyXG4gICAgbGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LXVzZXJfX2xpc3QtLWNsb3NlLXhzXCIpO1xyXG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LXVzZXJfX2xpbmstY3VycmVudC0tYWN0aXZlXCIpO1xyXG4gIH1cclxufSh3aW5kb3csIGRvY3VtZW50KSk7IiwiOyhmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50KSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIHZhciBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtbmF2LWN1cnJlbnQnKTtcclxuXHJcbiAgY3VycmVudC5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3VycmVudFNpdGVNZW51KTtcclxuXHJcbiAgZnVuY3Rpb24gY3VycmVudFNpdGVNZW51KGV2ZW50LCBsaXN0KSB7XHJcbiAgXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgdmFyIGxpc3QgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtbmF2LWxpc3QnKTtcclxuXHRcclxuXHJcbiAgICBsaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJzaXRlLW5hdl9fbGlzdC0tY2xvc2VcIik7XHJcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC50b2dnbGUoXCJzaXRlLW5hdl9fY3VycmVudC0tYWN0aXZlXCIpO1xyXG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwic2l0ZS1uYXZfX2N1cnJlbnQtY29udGFpbmVyLS1hY3RpdmVcIik7XHJcbiAgfVxyXG59KHdpbmRvdywgZG9jdW1lbnQpKTsiXX0=
