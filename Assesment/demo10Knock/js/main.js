const MyViewModel=function(){
    firstName = ko.observable();
    lastName = ko.observable();
 
    this.onSubmit = function () {
        const firstNames  = firstName();
        const lastNames = lastName();
        const person = { firstName: firstNames, lastName: lastNames };
        console.log(person);
        const jsoString = JSON.stringify(person);
        const root = $("#root");
        root.html("The JSON Data is ");
        root.append("<h3 id='h3'</h3>");
        const h3 = $("#h3");
        h3.html(jsoString);
        firstName("");
        lastName("");
    }
    this.onJSObject = function () {
        const h3 = $("#h3");
        const jsonString = h3.text();
        console.log(jsonString);
        const PERSON = JSON.parse(jsonString);
        firstName(PERSON.firstName);
        lastName(PERSON.lastName);
        h3.text("");
    }
}
const vm = new MyViewModel();
ko.applyBindings(vm);
