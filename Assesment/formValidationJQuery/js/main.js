function validateForm(){
    const firstName     = $("#firstName").val();
    const lastName      = $("#lastName").val();
    const firstNameError= $("#firstNameError")
    const lastNameError = $("#lastNameError")
    const email         = $("#email").val();
    const emailError    = $("#emailError");
    const pno           = $("#pno").val();
    const pnoError      = $("#pnoError");
    const hobbie        = document.querySelector('input[type="checkbox"]:checked');
    const HobbiesError  = $("#HobbiesError");

    //Regex for Phone no & Email Validation
    const mailformat    = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneno       = "[789][0-9]{9}";

    //Firstname Validation
    if (firstName == undefined || firstName == null || firstName == "") {
        firstNameError.html("First Name must be provided");
        return false;
    }else if(firstName.length <=1 ){
        firstNameError.html("First Name minimum 2 characters are allowed");
        return false
    }else{
        firstNameError.html('');
    }

    ////lastName Validation
    if(lastName == undefined || lastName == null || lastName == "" ){
        lastNameError.html("Last Name must be provided") 
        return false;
    }else if(lastName.length <=1 ){
        lastNameError.html("last Name minimum 2 characters are allowed") 
        return false
    }else{
        lastNameError.html('') 
    }

    //Hobbie Validation
    if(hobbie == null){
        HobbiesError.html("Please select atleast on hobbie") 
        return false;
    }else{
        HobbiesError.html('')
    }

    //Email Validation
    if(email == undefined || email == null || email == ''){
        emailError.html('"Please provide email id"') 
        return false;
    }else if(!email.match(mailformat)){
        emailError.html("Email id is not proper")  
        return false
    }else{
        emailError.html('');
    }

    //Phone Validation
    if(pno == undefined || pno == null || pno == ''){
        pnoError.html("Please provide Phone no") 
        return false;
    }else if(!pno.match(phoneno)){
        pnoError.html( "Please provide valid phone no")
        return false
    }else{
        pnoError.html('')
    }

}