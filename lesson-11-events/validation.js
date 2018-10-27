'use strict';
function formValidation(form) {
  var error = 0;
  var websiteName = form.websiteName.value.trim();
  var websiteUrl = form.URL.value.trim();
  var email = form.email.value.trim();

  if (!websiteName) {
    error = 'Заполните поле Название сайта';
    form.websiteName.style.border = '1px solid red';
    form.websiteName.scrollIntoView();
  } else if (!websiteUrl) {
    error = 'Заполните поле URL сайта';
    form.URL.style.border = '1px solid red';
    form.URL.scrollIntoView();
  } else if (!email) {
    error = 'Заполните поле E-mail для связи';
    form.email.style.border = '1px solid red';
    form.email.scrollIntoView();
  }
  if(error) {
    alert(error);
    return false;
  } else {
    return true;
  }
}