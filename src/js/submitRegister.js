;(function(window, document) {
  if (!("FormData" in window)) {
    return;
  }

  var form = document.querySelector('.popup__form');

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var data = new FormData(form);


    request(data, fn);
  };

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
    };

    xhr.send(data);
  } 
}(window, document));