

document.getElementById("nameValidation").addEventListener("blur", nameValidationFunction);
document.getElementById("phoneNumber").addEventListener("blur", myPhonenoValidation);

document.getElementById("phoneNumber").addEventListener("blur", myPhonenoValidation);

//validating Email address

document.getElementById("email2").addEventListener("blur", myFunctionEmail);

function nameValidationFunction() {
  const x = document.forms["myForm"]["firstname"];
  if (x.value == " ") {
    alert("Name must be filled out");
    document.getElementById("nameValidation").style.backgroundColor = "red";
    
  }
  document.getElementById("nameValidation").style.backgroundColor = "#454E57";
  
}

//Validating Phone number
function myPhonenoValidation(e) {
  const x1 = document.forms["myForm"]["phoneNumber"].value;
  var patt1 = /^\d{10}$/;
  console.log("pjjj" + x1);
  var result = x1.match(patt1);
  if (result) {
    console.log("phone number valid number");
    document.getElementById("phoneNumber").style.backgroundColor = "#454E57";
  } else {
    document.getElementById("phoneNumber").style.backgroundColor = "red";
    console.log("phone number  not a valid number");
  }
}
document.getElementById("address1").addEventListener("blur", myFunctionaddress1);

function myFunctionaddress1(){
  const x1 = document.forms["myForm"]["address1"].value;
  const address1Pat=/[a-zA-Z]{5,}/;
  const result = x1.match(address1Pat);
  
  if (result) {
    console.log("valid address");
    document.getElementById("address1").style.backgroundColor = "#454E57";
  } else {
    document.getElementById("address1").style.backgroundColor = "red";
    console.log("not a valid address line1");
  }
  if (x1.value == " ") {
    alert("Name must be filled out");
  }
}
document.getElementById("address2").addEventListener("blur", myFunctionaddress2);

function myFunctionaddress2(){
  const x1 = document.forms["myForm"]["address2"].value;
  const address2Pat=/[a-zA-Z]{5,}/;
  const result = x1.match(address2Pat);
  
  if (result) {
    console.log("valid address2");
    document.getElementById("address2").style.backgroundColor = "#454E57";
  } else {
    document.getElementById("address2").style.backgroundColor = "red";
    console.log("not a valid address line2");
  }
  if (x1.value == " ") {
    alert("Name must be filled out");
  }
  document.getElementById("address2").style.backgroundColor = "#454E57";
  
}

//checking city 
document.getElementById("city").addEventListener("blur", myFunctionCity);

function myFunctionCity(){
  const x1 = document.forms["myForm"]["city"].value;
  const cityPat=/[a-zA-Z]{5,}/;
  const result = x1.match(cityPat);
  
  if (result) {
    console.log("valid city name");
    document.getElementById("city").style.backgroundColor = "#454E57";
  } else {
    document.getElementById("city").style.backgroundColor = "red";
    console.log("not a valid city name ");
  }
}

document.getElementById("state").addEventListener("blur", myFunctionstate);

function myFunctionstate(){
  const x1 = document.forms["myForm"]["state"].value;
  const cityPat=/[a-zA-Z]{5,}/;
  const result = x1.match(cityPat);
  
  if (result) {
    console.log("valid state name");
    document.getElementById("state").style.backgroundColor = "#454E57";
  } else {
    document.getElementById("state").style.backgroundColor = "red";
    console.log("not a valid state name ");
  }
}
document.getElementById("country").addEventListener("blur", myFunctioncountry);

function myFunctioncountry(){
  const x1 = document.forms["myForm"]["country"].value;
  const countryPat=/[a-zA-Z]{5,}/;
  const result = x1.match(countryPat);
  
  if (result) {
    console.log("valid country name");
    document.getElementById("country").style.backgroundColor = "#454E57";
  } else {
    document.getElementById("country").style.backgroundColor = "red";
    console.log("not a valid country name ");
  }
}
document.getElementById("postalCode").addEventListener("blur", myFunctionpostalCode);

function myFunctionpostalCode(){
  const x1 = document.forms["myForm"]["postalCode"].value;
  const postalCodePat=/[0-9]{5,}/;
  const result = x1.match(postalCodePat);
  
  if (result) {
    console.log("valid address2");
    document.getElementById("postalCode").style.backgroundColor = "#454E57";
  } else {
    document.getElementById("postalCode").style.backgroundColor = "red";
    console.log("not a valid postalCode");
  }
  if (x1.value == " ") {
    alert("postalCode must be filled out");
  }
}

function myFunctionEmail() {
  const mail1 = document.forms["myForm"]["email1"].value;
  const mail2 = document.forms["myForm"]["email2"].value;

  var reg = /\S+@\S+/i;
  if (mail1.match(reg) && mail2.match(reg)) {
    console.log("valid email 1");
    document.forms["myForm"]["email1"].style.backgroundColor = "#454E57";
    document.forms["myForm"]["email2"].style.backgroundColor = "#454E57";
  } else {
    console.log("invalid email1");
    document.forms["myForm"]["email1"].style.backgroundColor = "red";
    document.forms["myForm"]["email2"].style.backgroundColor = "red";
  }

  if (mail1 != mail2) {
    document.forms["myForm"]["email1"].style.backgroundColor = "red";
    document.forms["myForm"]["email2"].style.backgroundColor = "red";
  }
}
document.getElementById("portfolio").addEventListener("blur", myFunctionportfolio);

function myFunctionportfolio(){
  const x1 = document.forms["myForm"]["portfolio"].value;
  const portfolioPat=/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  const result = x1.match(portfolioPat);
  
  if (result) {
    document.getElementById("portfolio").style.backgroundColor = "#454E57";
    console.log("valid portfolio");
    
  } else {
    document.getElementById("portfolio").style.backgroundColor = "red";
    console.log("not a valid portfolio name ");
  }
}

function validateExperienceChecks() {
  var chks = document.getElementsByClassName("checkBox");
  var checkCount = 0;
  for (var i = 0; i < chks.length; i++) {
    if (chks[i].checked) {
      checkCount++;
    }
  }
  if (checkCount < 1) {
    return false;
  }
  return true;
}

function validateCountryChecks() {
  var chks = document.getElementsByClassName("checkBox2");
  var checkCount = 0;
  for (var i = 0; i < chks.length; i++) {
    if (chks[i].checked) {
      checkCount++;
    }
  }
  if (checkCount < 1) {
    return false;
  }
  return true;
}

function validate(form) {
  if (validateChecks() == false) {
    alert("Please fill all the required fields.");
    return false;
  }
  return true;
}

document.forms["myForm"].addEventListener("submit", function(e) {
  e.preventDefault();

  if (!validateExperienceChecks()) {
    console.log("check box 1 is not checked");
    alert("check box 1 is not checked");
  }

  if (!validateCountryChecks()) {
    console.log("check box 2 is not checked");
    alert("check box 2 is not checked");
  }
  
});
