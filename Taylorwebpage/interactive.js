  alert("Welcome Thespians to this wonderful journey of Acting!")

function hideSection(section){
  var x = document.getElementById(section);
  if(x.style.display === "none"){
    x.style.display = "block";
    document.getElementById("bioButton").innerHTML ="Hide Bio";
  }
  else{
    x.style.display = "none";
    document.getElementById("bioButton").innerHTML ="show Bio";
  }
}
