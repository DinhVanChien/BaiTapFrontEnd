function showElement() {
  $(function () {
    $("#link1").click(function () {
      $(".toggle").show();
      $("#link1").hide();
    });

    $("#link2").click(function () {
      $(".toggle").hide();
      $("#link1").show();
    });
  });
}

/*------------------------------------------------------*/

commonError = (idFieldError) => {
  $(idFieldError).show();
  $(idFieldError).css({
    color: "red",
    "font-size": "20px",
    "margin-bottom": "10px",
  });
};
commonNoError = (idFieldError, field) => {
  $(idFieldError).hide();
  $(field).css({"border" : "1px solid"});
};
validateRegister = () => {
  let emailValue = $("#email").val();
  let phonValue = $("#phone").val();
  let usernameValue = $("#username").val();
  let passValue = $("#password").val();
  let passConValue = $("#passwordCon").val();
  let regex = RegExp("[A-Z]");
  let check = 0;
  if (emailValue.length == 0) {
        $("#erroEmail").text("Vui lòng nhập email");
        commonError("#erroEmail");
  } else if (emailValue.indexOf("@") == -1) {
        $("#erroEmail").text("Email phải có kí tự @");
        commonError("#erroEmail");   
  } else {
      ++check;
      commonNoError("#erroEmail", "#email");
  }

  if (phonValue.length == 0) {
        $("#erroPhone").text("Vui lòng nhập số điện thoại");
        commonError("#erroPhone");
  } else if (phonValue.length != 10) {
        $("#erroPhone").text("Số điện thoại phải là 10 số");
        commonError("#erroPhone");
  } else {
        ++check;
        commonNoError("#erroPhone", "#phone");
  }

  if (usernameValue.length == 0) {
        $("#erroUsername").text("Bạn vui lòng nhập Username");
        commonError("#erroUsername");
  } else {
        ++check;
        commonNoError("#erroUsername", "#username");
  }

  if (passValue.length == 0) {
        $("#erroPass").text("Vui lòng nhập password");
        commonError("#erroPass");
  } else if (!regex.test(passValue) || passValue.length < 8) {
        $("#erroPass").text("Password phải chứa ít nhất 8 kí tự và có kí tự in hoa");
        commonError("#erroPass");
  } else {
        ++check;
        commonNoError("#erroPass", "#password");
  }

  if(passConValue.length == 0) {
        $("#passwordConError").text("Vui lòng nhập lại password");
        commonError("#passwordConError");
  } else if(passConValue != passValue) {
         $("#passwordConError").text("Vui lòng nhập lại chính xác password");
  } else {
        ++check;
        commonNoError("#passwordConError", "#passwordCon");
  }
  console.log("check xem bao nhieu cai dung: "+check);
  if(check != 5) {
    return false;
  } 
  return true;
}
