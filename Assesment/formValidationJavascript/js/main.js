function validateForm() {
    const firstName     = document.getElementById("firstName").value;
    const lastName      = document.getElementById("lastName").value;
    const firstNameError= document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const email         = document.getElementById("email").value;
    const emailError    = document.getElementById("emailError");
    const pno           = document.getElementById("pno").value;
    const pnoError      = document.getElementById("pnoError");
    const hobbie        = document.querySelector('input[type="checkbox"]:checked');
    const HobbiesError  = document.getElementById("HobbiesError");
    
    //Regex for Phone no & Email Validation
    const mailformat    = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneno       = "[789][0-9]{9}";

    
    //firstName validation
    if (firstName == undefined || firstName == null || firstName == "") {
        firstNameError.innerHTML = "First Name must be provided";
        return false;
    }else if(firstName.length <=1 ){
        firstNameError.innerHTML = "First Name minimum 2 characters are allowed";
        return false
    }else{
        firstNameError.innerHTML = '';
    }

    //lastName Validation
     if(lastName == undefined || lastName == null || lastName == "" ){
        lastNameError.innerHTML = "Last Name must be provided";
        return false;
    }else if(lastName.length <=1 ){
        lastNameError.innerHTML = "last Name minimum 2 characters are allowed";
        return false
    }else{
        lastNameError.innerHTML = '';
    }

    //Hobbie Validation
    if(hobbie == null){
        HobbiesError.innerHTML = "Please select atleast on hobbie"
        return false;
    }else{
        HobbiesError.innerHTML='';
    }

    //Email Validation
    if(email == undefined || email == null || email == ''){
        emailError.innerHTML = "Please provide email id"
        return false;
    }else if(!email.match(mailformat)){
        emailError.innerHTML = "Email id is not proper"
        return false
    }else{
        emailError.innerHTML='';
    }

    //Phone Validation
    if(pno == undefined || pno == null || pno == ''){
        pnoError.innerHTML = "Please provide Phone no"
        return false;
    }else if(!pno.match(phoneno)){
        pnoError.innerHTML = "Please provide valid phone no"
        return false
    }else{
        pnoError.innerHTML='';
    }

}
