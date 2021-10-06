
const ViewModel = function(){
  jsonData=ko.observable();
    this.getJsonData=function(){
      const xmlhttp = new XMLHttpRequest();
      xmlhttp.onload = function(){
      const person = JSON.parse(this.responseText);
      console.log(person.firstName+" "+person.lastName);
      jsonData(person.firstName+" "+person.lastName);
      
      }
      xmlhttp.open("GET", "person.json");
      xmlhttp.send();
  }
}


const vm = new ViewModel();
ko.applyBindings(vm);
