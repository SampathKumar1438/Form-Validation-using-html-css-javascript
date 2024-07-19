function validation() {
    var fname = document.form.fname.value;
    var lname = document.form.lname.value;
    var city = document.form.city.value;
    var phone = document.form.phone.value;
    var address = document.form.address.value;

    if(fname == null || fname == ""){
        alert("Enter your First Name");
        return false;
    }
    if(lname == null || lname == ""){
        alert("Enter your Last Name");
        return false;
    }
    if(city == null || city == ""){
        alert("Enter your City");
        return false;
    }
    if(phone == null || phone == ""){
        alert("Enter your Phone Number");
        return false;
    }
    if(address == null || address == ""){
        alert("Enter your address");
        return false;
    }
}