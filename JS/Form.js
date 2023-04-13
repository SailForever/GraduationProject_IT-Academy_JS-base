/* когда окно браузера будет загружено - выполнится следующая функция */
window.onload = function () {
  /* получаем переменную userFirstNameField */
  var userFirstNameField = document.forms["form"]["user-first-name"];
  /* добавляем функцию для события focusout (когда курсор покидает поле) */
  userFirstNameField.addEventListener("focusout", function () {
    /* получем значение поля user-first-name */
    var userFirstName = document.forms["form"]["user-first-name"].value;
    /* проверяем значение, если пустое либо null */
    if (userFirstName == null || userFirstName == "") {
      /* пишем 'Пожалуйста, введите ваше имя' */
      document.forms["form"]["user-first-name"].value = "Пожалуйста, введите ваше имя";
      /*добавляем класс error-message (текст становится красным)*/
      document.forms["form"]["user-first-name"].classList.add("error-message");
      /* возвращаем false - т.е. значение не валидно */
      return false;
    }
  });

  /* добавляем функцию для события focus (когда курсор входит в поле) */
  userFirstNameField.addEventListener("focus", function () {
    /* получем значение поля user-first-name */
    var userFirstName = document.forms["form"]["user-first-name"].value;
    /* проверяем значение, если равно 'Пожалуйста, введите ваше имя' */
    if (userFirstName == "Пожалуйста, введите ваше имя") {
      /* устанавливаем пустое значение в поле */
      document.forms["form"]["user-first-name"].value = "";
      /* удаляем класс 'error-message' (чтобы текст стал черным) */
      document.forms["form"]["user-first-name"].classList.remove("error-message");
      return false;
    }
  });

  /* получаем переменную userLastNameField */
  var userLastNameField = document.forms["form"]["user-last-name"];
  /* добавляем функцию для события focusout (когда курсор покидает поле) */
  userLastNameField.addEventListener("focusout", function () {
    /* получем значение поля user-last-name */
    var userLastName = document.forms["form"]["user-last-name"].value;
    if (userLastName == null || userLastName == "") {
      document.forms["form"]["user-last-name"].value = "Пожалуйста, введите вашу фамилию";
      document.forms["form"]["user-last-name"].classList.add("error-message");
      return false;
    }
  });

  /* добавляем функцию для события focus (когда курсор входит в поле) */
  userLastNameField.addEventListener("focus", function () {
    /* получем значение поля user-last-name */
    var userLastName = document.forms["form"]["user-last-name"].value;
    /* проверяем значение, если равно 'Пожалуйста, введите вашу фамилию' */
    if (userLastName == "Пожалуйста, введите вашу фамилию") {
      document.forms["form"]["user-last-name"].value = "";
      document.forms["form"]["user-last-name"].classList.remove("error-message");
      return false;
    }
  });

  var userEmail = document.forms["form"]["user-email"];
  /* добавляем функцию для события focusout (когда курсор покидает поле) */
  userEmail.addEventListener("focusout", function () {
    /* получем значение поля user-email */
    var userEmail = document.forms["form"]["user-email"].value;
    if (userEmail == null || userEmail == "") {
      document.forms["form"]["user-email"].value = "Пожалуйста, введите ваш Email";
      document.forms["form"]["user-email"].classList.add("error-message");
      return false;
    }

    /* regexp выражение, задает шаблон строки состоящей из букв, цифр, знака @ и домена (gmail.com/tut.by)
     * ^ - обозначает начало строки
     * \w - знак буквы
     * \. - любой знак (буква либо цифра)
     * \+ - знак плюсаб т.к. в regexp + обозначает 1 либо более елементов
     * + - обозначает 1 либо более елементов
     * {2,4} - указывает колличество символов (от 2 до 4)
     * $ - обозначает конец строки
     * пример email@gmail.com
     */
    var regexp = /^[\w\.-_\+]+@[\w-]+(\.\w{2,4})+$/;
    /* проверяем соответствие строки regexp выражению
     * ! - указывает на отрицание условия
     */
    if (!(regexp.test(userEmail))) {
      document.forms["form"]["user-email"].value = "Пожалуйста, введите правильный Email (например email@gmail.com)";
      document.forms["form"]["user-email"].classList.add("error-message");
      return false;
    }
  });

  /* добавляем функцию для события focus (когда курсор входит в поле) */
  userEmail.addEventListener("focus", function () {
    /* получем значение поля user-email */
    var userEmail = document.forms["form"]["user-email"].value;
    /* проверяем значение, если равно 'Пожалуйста, введите ваш Email' либо 'Пожалуйста, введите правильный Email (например email@gmail.com)' */
    if (userEmail == "Пожалуйста, введите ваш Email" || userEmail == "Пожалуйста, введите правильный Email (например email@gmail.com)") {
      /* если строка не соответствует regexp выражению показываем сообщение в input поле */
      document.forms["form"]["user-email"].value = "";
      document.forms["form"]["user-email"].classList.remove("error-message");
      return false;
    }
  });

  var userPhone = document.forms["form"]["user-phone"];
  /* добавляем функцию для события focusout (когда курсор покидает поле) */
  userPhone.addEventListener("focusout", function () {
    /* получем значение поля user-phone */
    var userPhone = document.forms["form"]["user-phone"].value;
    if (userPhone == null || userPhone == "") {
      document.forms["form"]["user-phone"].value = "Пожалуйста, введите номер телефона";
      document.forms["form"]["user-phone"].classList.add("error-message");
      return false;
    }
    /* regexp выражение, задает шаблон строки состоящей только из 6-15 цифр
     * ^ - обозначает начало строки
     * \d - знак цифры от 0 до 9
     * {6,15} - указывает колличество символов (от 6 до 15)
     * $ - обозначает конец строки
     */
    var regexp = /^\d{6,15}$/;
    /* проверяем соответствие строки regexp выражению
     * ! - указывает на отрицание условия
     */
    if (!(regexp.test(userPhone))) {
      /* если строка не соответствует regexp выражению показываем сообщение в input поле */
      document.forms["form"]["user-phone"].value = "Пожалуйста, введите номер телефона";
      document.forms["form"]["user-phone"].classList.add("error-message");
      return false;
    }
  });

  /* добавляем функцию для события focus (когда курсор входит в поле) */
  userPhone.addEventListener("focus", function () {
    /* получем значение поля user-phone */
    var userPhone = document.forms["form"]["user-phone"].value;
    if (userPhone == "Пожалуйста, введите номер телефона" || userPhone == "Пожалуйста, введите номер телефона") {
      document.forms["form"]["user-phone"].value = "";
      document.forms["form"]["user-phone"].classList.remove("error-message");
      return false;
    }
  });
}

/* функция валидации формы, выполняется при нажатии кнопки submit */
function validateForm() {
  /* получем набор элементов, у которых есть класс error-message */
  var errorFields = document.getElementsByClassName("error-message");
  /* если присутствует хотя бы один элемент с классом error-message */
  if (errorFields != undefined && errorFields != null && errorFields.length >= 1) {
    /* передвигаем курсор к первому полю с классом error-message */
    errorFields[0].scrollIntoView();
    /* возвращаем false - форма не отправится */
    return false;
  }
  /* если нету сообщения об ошибке проверям все ли поля заполнены */
  var userFirstName = document.forms["form"]["user-first-name"];
  var userLastName = document.forms["form"]["user-last-name"];
  var userEmail = document.forms["form"]["user-email"];
  var userPhone = document.forms["form"]["user-phone"];
  if (userFirstName.value == null || userFirstName.value == "") {
    userFirstName.focus();
    return false;
  } else if (userLastName.value == null || userLastName.value == "") {
    userLastName.focus();
    return false;
  } else if (userEmail.value == null || userEmail.value == "") {
    userEmail.focus();
    return false;
  } else if (userPhone.value == null || userPhone.value == "") {
    userPhone.focus();
    return false;
  }
}