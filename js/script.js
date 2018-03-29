'use strict';

(function() {
  var ESCAPE_KEY = 27;

  var link = document.querySelector(".write-us");

  var popup = document.querySelector(".modal-feedback");
  var close = popup.querySelector(".button-modal-close");

  var form = popup.querySelector("form");
  var fullname = popup.querySelector("[name=fullname]");
  var email = popup.querySelector("[name=email]");
  var message = popup.querySelector("[name=message]");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    fullname.focus();
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

  form.addEventListener("submit", function (evt) {
    if (!form.checkValidity()) {
      evt.preventDefault();
    } else {
      localStorage.setItem("fullname", fullname.value);
      localStorage.setItem("email", email.value);
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === ESCAPE_KEY) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });
})();
