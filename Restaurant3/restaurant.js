function resetForm(){
document.forms["contactForm"]["name"].value="";
document.forms["contactForm"]["email"].value="";
document.forms["contactForm"]["phone"].value="";
document.forms["contactForm"]["contact"].value="";
document.forms["contactForm"]["yes"].value="";
document.forms["contactForm"]["no"].value="";
document.forms["contactForm"]["monday"].value="";
document.forms["contactForm"]["tuesday"].value="";
document.forms["contactForm"]["wednesday"].value="";
document.forms["contactForm"]["thursday"].value="";
document.forms["contactForm"]["friday"].value="";
document.forms["contactForm"]["info"].value="";
document.forms["contactForm"]["name"].focus();
}

function validateItems(){
  console.log("we are inside the function");

var  name=document.forms["contactForm"]["name"].value;
var email=document.forms["contactForm"]["email"].value;
var phone=document.forms["contactForm"]["phone"].value;
var contact=document.forms["contactForm"]["contact"].value;
var yes=document.forms["contactForm"]["yes"].value;
var no=document.forms["contactForm"]["no"].value;
var monday=document.forms["contactForm"]["monday"].checked;
var tuesday=document.forms["contactForm"]["tuesday"].checked;
var wednesday=document.forms["contactForm"]["wednesday"].checked;
var thursday=document.forms["contactForm"]["thursday"].checked;
var friday=document.forms["contactForm"]["friday"].checked;
var info=document.forms["contactForm"]["info"].value;

if (monday == true || tuesday == true || wednesday == true || thursday == true || friday == true) {
  // All good. The picked a day.
}
else {
  alert("Please pick at least one day that we may contact you!");
}



if(email==""|| isNaN(email)) {
  alert("Email must be Filled in!");

}

console.log("we made it");
return false;

}
