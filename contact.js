function validateForm() {
    var name = document.forms["myform"]["name"];
    var phone = document.forms["myform"]["phone"];
    var email = document.forms["myform"]["email"];
    var message = document.forms["myform"]["message"];
  
  
    if (name.value == "") {
      window.alert("Name Field Empty");
      name.focus();
      name.style.border = "2px solid red";
      return false;
    }

    if (phone.value == "") {
      window.alert("Please enter your phone number.");
      phone.focus();
      return false;
    }

    if (phone.value.length != 10) {
      window.alert("Invalid Phone No.");
      phone.focus();
      return false;
    }
  
    if (email.value == "") {
      window.alert("Please enter your email.");
      email.focus();
      return false;
    }

    if (email.value.indexOf("@") < 0) {
      window.alert("Please enter your valid E-mail address.");
      email.focus();
      return false;
    }

    if (email.value.indexOf(".") < 0) {
      window.alert("Please enter your valid E-mail address.");
      email.focus();
      return false;
    }
  
    if(message.value == ""){
      window.alert("Please enter your message.");
      phone.focus();
      return false;
    }
    return true;
  
}