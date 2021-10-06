function formSubmit(){
    var firstName=$("#firstName").value;
    var lastName=$("#lastName").value;
    
    if(firstName==''){
        alert("Please fill the firstName");
        return false;
    }else if(firstName.length<=2){
        alert("Firstname should be greater than 2 letter")
        return false;
    }else if(lastName==''){
        alert("Please fill the lastName");
        return false;
    }else if(lastName.length<=2){
        alert("lastName should be greater than 2 letter")
        return false;
    }
   
}
