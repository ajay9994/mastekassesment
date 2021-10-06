$(document).ready(function(){
    $("#onSubmit").click(function(){
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        
        const person ={firstName:firstName,lastName:lastName};
        const jsoString=JSON.stringify(person);
        const root = $("#root");
        root.html("The JSON Data is ");
        root.append("<h3 id='h3'></h3>");
        h3=$('#h3');
        h3.html(jsoString);
        $("#firstName").val("");
        $("#lastName").val("");
        
    })
    $("#onJSObject").click(function(){
        const h3=$("#h3");
        const jsonString=h3.text();
        const PERSON=JSON.parse(jsonString);
        $("#firstName").val(PERSON.firstName);
        $("#lastName").val(PERSON.lastName);
        h3.text("");
    })

})