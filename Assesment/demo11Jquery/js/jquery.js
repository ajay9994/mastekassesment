
$(document).ready(function(){
  $("#getJsonData").click(function(){
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function(){
    const person = JSON.parse(this.responseText);
    $("#root").html(person.firstName+" "+person.lastName);
  }
    xmlhttp.open("GET", "person.json");
    xmlhttp.send();

  })
  
})
