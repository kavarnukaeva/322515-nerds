'use-strict';

(function() {
  var link = document.querySelector(".write-us");

  var popup = document.querySelector(".modal-feedback");
  var close = popup.querySelector(".button-modal-close");

  var form = popup.querySelector("form");
  var fullname = popup.querySelector("[name=fullname]");
  var email = popup.querySelector("[name=email]");
  var message = popup.querySelector("[name=message]");

  var isStorageSupport = true;
  var storageName = "";
  var storageEmail = "";

  try {
    storageName = localStorage.getItem("fullname");
    storageEmail = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    fullname.focus();

    if (storageName && storageEmail) {
      fullname.value = storageName;
      email.value = storageEmail;
      message.focus();
    } else {
      fullname.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

  form.addEventListener("submit", function (evt) {
    if (!fullname.value || !email.value || !message.value) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem("fullname", fullname.value);
        localStorage.setItem("email", email.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode ===27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  })
})();
