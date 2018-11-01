var isMouseTracking=false;

//we need a function to update the position on our front end, we have 2 labels- one for X and one for Y

function updateMousePosition(){
//if tracking is enabled, update the labels
if(isMouseTracking){
//we can get the mouse positions with
//event.clientX and event.clientY.
//we can update the text of an HTML element with the innerText property.
var positionX=document.getElementById("mousePositionX");
positionX.innerText=event.clientX;
var positionY=document.getElementById("mousePositionY");
positionY.innerText=event.clientY;
}
}

//We need a function to toggle whether tracking is enabled
function toggleTracking(){
//If isMouseTracking is true, set it to false
//Otherwise it is false, and needs to be set to true
isMouseTracking= !isMouseTracking;
//update the tracking status to show whether it is enabled
if(isMouseTracking){
  document.getElementById("trackingStatus").innerText="TRACKING";
}else{
  document.getElementById("trackingStatus").innerText="NOT TRACKING";
}
}
  
