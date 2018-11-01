function clearErrors(){
for (var loopCounter=0;loopCounter<document.forms["numberFun"].elements.length;loopCounter++){
if(document.forms["numberFun"].elements[loopCounter].parentElement.className.indexOf("has-")!=-1){

  document.forms["numberFun"].elements[loopCounter]
  .parentElement.className="form-group";
}
}
}


function resetForm(){
clearErrors();//calls the clear errors function
document.forms["numberFun"]["num1"].value="";//clears the values of the element num1
document.forms["numberFun"]["num2"].value="";//clears the value of the element num2
document.getElementById("results").style.display="none";//hides the table of results
document.getElementById("submitButton").innerText="Submit";//changes the submit button text
document.forms["numberFun"]["num1"].focus();//a function that puts the cursor in num1 textbox after reset button is pushed
}


function validateItems(){
  console.log('i am inside function validateItems()!');

clearErrors();//calling the clear errors function
var num1=document.forms["numberFun"]["num1"].value;//gets the entered value from the input textbox
var num2=document.forms["numberFun"]["num2"].value;//gets the entered value from the input textbox
if(num1=="" || isNaN(num1)){//if input box is empty or not an number, alert will pop
  alert("Num1 must be filled in with a number.");
  document.forms["numberFun"]["num1"].parentElement.className="form-group has-error";//bootstrap has-error is added to the form-group
  document.forms["numberFun"]["num1"].focus();//puts the cursor to the input box with error
  return false;//prevents form submission
}
if (num2=="" || isNaN(num2)){
alert("Num2 must be filled in with a number.");
document.forms["numberFun"]["num2"].parentElement.className="form-group has-error"
document.forms["numberFun"]["num2"].focus();
return false;
}


document.getElementById("results").style.display="block"; // show table id=results
document.getElementById("submitButton").innerText="Recalculate";
document.getElementById("addResult").innerText= Number(num1) + Number(num2);
document.getElementById("subtractResult").innerText=num1-num2;
document.getElementById("multiplyResult").innerText=num1*num2;
document.getElementById("divideResult").innerText=num1/num2;

//We are returning false so that the form doesn't submit
//and so that we can see the results

return false;
}
