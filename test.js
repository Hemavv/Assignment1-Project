
function myFunction() {
   
    var fname = document.getElementById("fname").value;
    submitOK = "true";

    if (fname.length >255) {
        alert("Enter only 255 characters");
        submitOK = "false";
    } 
    else if(fname.length <=0)
    {
      alert("Enter the Comment")
    }
else{
  alert("Your Comment is Received");
}
var dataToSave=document.getElementById("fname").value;
  localStorage.setItem("data",dataToSave);
}

function show(){
  var dataToShow=localStorage.getItem("data");
  alert("Saved value is =" + dataToShow)
  location.reload();
}

    function myFunction1() {
   
   var fname1 = document.getElementsByTagName("input")[0].value;
   submitOK = "true";

   if (input[0].length >255) {
       alert("Enter only 255 characters");
       submitOK = "false";
   } 
   else if(input[0].length <=0)
   {
     alert("Enter the Comment")
   }
else{
 alert("Your Comment is Received");
}
var dataToSave=document.getElementsByTagName("input")[0].value;
 localStorage.setItem("data",dataToSave);
}
function show1(){
 var dataToShow=localStorage.getItem("data");
 alert("Saved value is =" + dataToShow)
 location.reload();
}