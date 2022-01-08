function formValidation(){
    
    // First Name InputType
    var fname = document.getElementById('firstName').value;
    if(fname == ""){
        document.getElementById("firstNameSpan").innerHTML="* Please Fill the Field"
    }
    else{
        console.log("First Name: " + fname);
    }

    // Last Name InputType
    var lname = document.getElementById('lastName').value;
    if(lname == ""){
        document.getElementById("lastNameSpan").innerHTML="* Please Fill the Field"
    }
    else{
        console.log("Last Name: " + lname);
    }

    // Gender Radio Button
    var genSpan = document.getElementById('genSpan');
    var genderRadio = document.getElementsByName("radio").forEach(radio =>{
        if(radio.checked == true){
            console.log("Gender: " + radio.value)
        }
        if(radio.checked == false){
            genSpan.innerHTML = "* Please Select Your Gender";
        }
    })

    // Country Dropdown
    var countryDropdown = document.getElementById('country');
    var countrySpan = document.getElementById('conSpan');
    if(countryDropdown.value == "select"){
        countrySpan.innerHTML = "* Please Select Your Country";
    }
    else{
        console.log("Country: " + countryDropdown.value)
    }


    // Hobbies Checkbox
    var hobbiesSpan = document.getElementById('hobCheck');
    var hobbiesCheckbox = document.getElementsByName('checkbox').forEach(check =>{
        if(check.checked == true){
            console.log( "Hobbies: " + check.value)
        }else{
            hobbiesSpan.innerHTML = "* Please Check Your Hobbies";
        }
    });

   

    






}
