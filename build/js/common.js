
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
  var arrUl = [];
  var popUpRegister = document.getElementById('register-container');

  popUpRegister.addEventListener('click', close);
  arrUl.push(document.querySelector('.top-sub__list'), document.querySelector('.nav-user__list'));

  for (var i = 0; i < arrUl.length; i++) {
  	arrUl[i].addEventListener('click', identifyElem);
  }
  
  function identifyElem(event) {
  	event.preventDefault();

    var target = event.target;


    while ( target.tagName != 'UL'  ) {
      if (target.dataset.registerBtn) {
      	document.body.style.overflow = "hidden";
      	openRegister();
      	return;
      }

      target = target.parentElement;
    }
  }

  function openRegister() {
    var popUpContainer = document.getElementById('register-container');


    popUpContainer.classList.toggle('popup--close');
  }

  function close(event) {
    var popUpContainer = event.target;


  	while ( popUpContainer.tagName != 'BODY'  ) {

      if ( popUpContainer.getAttribute('id') !== null && ( ~popUpContainer.getAttribute('id').indexOf("-container") ) ) {
    
      	popUpContainer.classList.toggle('popup--close');
      	document.body.style.overflow = "";
      	return;
      }
      popUpContainer = popUpContainer.parentElement;
    }
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
;(function(window, document) {
  if (!("FormData" in window)) {
    return;
  }

  var form = document.querySelector('.popup__form');

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var data = new FormData(form);


    request(data, fn);
  });

  function request(data, fn) {
    var xhr = new XMLHttpRequest();


    xhr.open('post', '/url', true);

    xhr.addEventListener("readystatechange", function() {
      if (xhr.readyState == 4) {
        fn(xhr.responseText);
      }
      if (this.status != 200) {
        alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
        return;
      }
    });

    xhr.send(data);
  } 
}(window, document));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyIsImxvY2FsU3RvcmFnZUZvclN2Z1Nwcml0ZS5qcyIsIm5hdi11c2VyLmpzIiwicG9wdXAuanMiLCJzaXRlLW5hdi5qcyIsInN1Ym1pdFJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIiLCI7KGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgdmFyIGZpbGUgPSAnLi4vU3ByaXRlU1ZHL1NWRy5zdmcnLCAvLyDQv9GD0YLRjCDQuiDRhNCw0LnQu9GDINGB0L/RgNCw0LnRgtCwINC90LAg0YHQtdGA0LLQtdGA0LVcclxuICAgICAgcmV2aXNpb24gPSAxOyAgICAgICAgICAgIC8vINCy0LXRgNGB0LjRjyDRgdC/0YDQsNC50YLQsFxyXG4gIGlmICghZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TIHx8ICFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpLmNyZWF0ZVNWR1JlY3QpIHJldHVybiB0cnVlO1xyXG4gIHZhciBpc0xvY2FsU3RvcmFnZSA9ICdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvdyAmJiB3aW5kb3dbJ2xvY2FsU3RvcmFnZSddICE9PSBudWxsLFxyXG4gICAgcmVxdWVzdCxcclxuICAgIGRhdGEsXHJcbiAgICBpbnNlcnRJVCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGRhdGEpO1xyXG4gICAgfSxcclxuICAgIGluc2VydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuYm9keSkgaW5zZXJ0SVQoKTtcclxuICAgICAgZWxzZSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5zZXJ0SVQpO1xyXG4gICAgfTtcclxuICBpZiAoaXNMb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lubGluZVNWR3JldicpID09IHJldmlzaW9uKSB7XHJcbiAgICBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lubGluZVNWR2RhdGEnKTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGluc2VydCgpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3BlbignR0VUJywgZmlsZSwgdHJ1ZSk7XHJcbiAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKSB7XHJcbiAgICAgICAgZGF0YSA9IHJlcXVlc3QucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgIGluc2VydCgpO1xyXG4gICAgICAgIGlmIChpc0xvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lubGluZVNWR2RhdGEnLCBkYXRhKTtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbmxpbmVTVkdyZXYnLCByZXZpc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0LnNlbmQoKTtcclxuICB9IGNhdGNoIChlKSB7fVxyXG59KHdpbmRvdywgZG9jdW1lbnQpKTsiLCI7KGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgdmFyIGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1tZW51LWN1cnJlbnQnKTtcclxuXHJcbiAgY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGN1cnJlbnRNZW51KTtcclxuXHJcbiAgZnVuY3Rpb24gY3VycmVudE1lbnUoZXZlbnQsIGxpc3QpIHtcclxuICBcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcblx0dmFyIGxpc3QgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItbWVudS1saXN0Jyk7XHJcblx0XHJcblxyXG4gICAgbGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LXVzZXJfX2xpc3QtLWNsb3NlLXhzXCIpO1xyXG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LXVzZXJfX2xpbmstY3VycmVudC0tYWN0aXZlXCIpO1xyXG4gIH1cclxufSh3aW5kb3csIGRvY3VtZW50KSk7IiwiOyhmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50KSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIHZhciBhcnJVbCA9IFtdO1xyXG4gIHZhciBwb3BVcFJlZ2lzdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLWNvbnRhaW5lcicpO1xyXG5cclxuICBwb3BVcFJlZ2lzdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpO1xyXG4gIGFyclVsLnB1c2goZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1zdWJfX2xpc3QnKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi11c2VyX19saXN0JykpO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyclVsLmxlbmd0aDsgaSsrKSB7XHJcbiAgXHRhcnJVbFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGlkZW50aWZ5RWxlbSk7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGlkZW50aWZ5RWxlbShldmVudCkge1xyXG4gIFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuXHJcbiAgICB3aGlsZSAoIHRhcmdldC50YWdOYW1lICE9ICdVTCcgICkge1xyXG4gICAgICBpZiAodGFyZ2V0LmRhdGFzZXQucmVnaXN0ZXJCdG4pIHtcclxuICAgICAgXHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgXHRvcGVuUmVnaXN0ZXIoKTtcclxuICAgICAgXHRyZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3BlblJlZ2lzdGVyKCkge1xyXG4gICAgdmFyIHBvcFVwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLWNvbnRhaW5lcicpO1xyXG5cclxuXHJcbiAgICBwb3BVcENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdwb3B1cC0tY2xvc2UnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlKGV2ZW50KSB7XHJcbiAgICB2YXIgcG9wVXBDb250YWluZXIgPSBldmVudC50YXJnZXQ7XHJcblxyXG5cclxuICBcdHdoaWxlICggcG9wVXBDb250YWluZXIudGFnTmFtZSAhPSAnQk9EWScgICkge1xyXG5cclxuICAgICAgaWYgKCBwb3BVcENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2lkJykgIT09IG51bGwgJiYgKCB+cG9wVXBDb250YWluZXIuZ2V0QXR0cmlidXRlKCdpZCcpLmluZGV4T2YoXCItY29udGFpbmVyXCIpICkgKSB7XHJcbiAgICBcclxuICAgICAgXHRwb3BVcENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdwb3B1cC0tY2xvc2UnKTtcclxuICAgICAgXHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcclxuICAgICAgXHRyZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgcG9wVXBDb250YWluZXIgPSBwb3BVcENvbnRhaW5lci5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gIH1cclxufSh3aW5kb3csIGRvY3VtZW50KSk7XHJcblxyXG5cclxuIiwiOyhmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50KSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIHZhciBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtbmF2LWN1cnJlbnQnKTtcclxuXHJcbiAgY3VycmVudC5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3VycmVudFNpdGVNZW51KTtcclxuXHJcbiAgZnVuY3Rpb24gY3VycmVudFNpdGVNZW51KGV2ZW50LCBsaXN0KSB7XHJcbiAgXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgdmFyIGxpc3QgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtbmF2LWxpc3QnKTtcclxuXHRcclxuXHJcbiAgICBsaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJzaXRlLW5hdl9fbGlzdC0tY2xvc2VcIik7XHJcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC50b2dnbGUoXCJzaXRlLW5hdl9fY3VycmVudC0tYWN0aXZlXCIpO1xyXG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwic2l0ZS1uYXZfX2N1cnJlbnQtY29udGFpbmVyLS1hY3RpdmVcIik7XHJcbiAgfVxyXG59KHdpbmRvdywgZG9jdW1lbnQpKTsiLCI7KGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpIHtcclxuICBpZiAoIShcIkZvcm1EYXRhXCIgaW4gd2luZG93KSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdmFyIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciBkYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cclxuXHJcbiAgICByZXF1ZXN0KGRhdGEsIGZuKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gcmVxdWVzdChkYXRhLCBmbikge1xyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHJcbiAgICB4aHIub3BlbigncG9zdCcsICcvdXJsJywgdHJ1ZSk7XHJcblxyXG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgIGZuKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cyAhPSAyMDApIHtcclxuICAgICAgICBhbGVydCggJ9C+0YjQuNCx0LrQsDogJyArICh0aGlzLnN0YXR1cyA/IHRoaXMuc3RhdHVzVGV4dCA6ICfQt9Cw0L/RgNC+0YEg0L3QtSDRg9C00LDQu9GB0Y8nKSApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgeGhyLnNlbmQoZGF0YSk7XHJcbiAgfSBcclxufSh3aW5kb3csIGRvY3VtZW50KSk7Il19
