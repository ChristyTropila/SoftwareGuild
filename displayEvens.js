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
document.forms["numberFun"]["step"].value="";//clears the value of step box
document.getElementById("results").style.display="none";//hides the table of results
document.getElementById("submitButton").innerText="Display Evens";//changes the submit button text
document.forms["numberFun"]["num1"].focus();//a function that puts the cursor in num1 textbox after reset button is pushed
}

function evenNumbers(num1, num2, step){
  /*
  console.log('we are inside the function evenNumbers()!');
  console.log('num1 is', num1);
  console.log('num2 is', num2);
  console.log('step is', step);
  */
for(var i = num1; i <= num2; i = i + step) {
   if(i%2==0){
     document.getElementById('output').innerHTML += i + "<br>";
 }
}

}

function validateItems(){
clearErrors();//calling the clear errors function
var num1=Number(document.forms["numberFun"]["num1"].value);  //gets the entered value from the input textbox
var num2=Number(document.forms["numberFun"]["num2"].value);  //gets the entered value from the input textbox
var step=Number(document.forms["numberFun"]["step"].value);

if(num1=="" || isNaN(num1)){//if input box is empty or not an number, alert will pop
  alert("Starting Number must be filled in with a number.");
  document.forms["numberFun"]["num1"].parentElement.className="form-group has-error";//bootstrap has-error is added to the form-group
  document.forms["numberFun"]["num1"].focus();//puts the cursor to the input box with error
  return false;//prevents form submission
}
if (num2=="" || isNaN(num2)){
alert("Ending Number must be filled in with a number.");
document.forms["numberFun"]["num2"].parentElement.className="form-group has-error"
document.forms["numberFun"]["num2"].focus();
return false;
}
if (step==""|| isNaN(step)){
  alert("Step must be filled in with a number.");
  document.forms["numberFun"]["step"].parentElement.className="form-group has-error"
  document.forms["numberFun"]["step"].focus();
  return false;
}

document.getElementById("tableHeader").innerHTML = "Here are the even numbers between " + num1 + " and " + num2 + " by " + step;
document.getElementById("results").style.display="block"; // show table id=results
document.getElementById("submitButton").innerText="Play Again";

evenNumbers(num1,num2,step);

//We are returning false so that the form doesn't submit
//and so that we can see the results

return false;
}
