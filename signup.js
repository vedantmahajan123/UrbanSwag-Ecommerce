function validation(){
    var first_name = document.getElementById("name");
    var PassWord = document.getElementById("pass");
    // var Email = document.getElementById("email");
    var Mobile_Number = document.getElementById("mobno");
    var Address = document.getElementById("#add");
    var Last_Name = document.getElementById("#lastname");

    var isValid = true;

    if (first_name.length < 2 && first_name.length < 6) {
        document.getElementById('name').innerText = 'First name must be at least 6 characters long';
        isValid = false;
    } else {
        document.getElementById('name').innerText = '';
    }
    if (PassWord.length > 2 && PassWord.length < 8) {
        document.getElementById('pass').innerText = 'PassWord must be greater than 2 and less than 8';
        isValid = false;
    } else {
        document.getElementById('pass').innerText = '';
    }
    if (Mobile_Number.length < 10) {
        document.getElementById('mobno').innerText = 'Mobile number should be less than 10 numbers';
        isValid = false;
    } else {
        document.getElementById('mobno').innerText = '';
    }
    if (Address.length < 50) {
        document.getElementById('add').innerText = 'Please fill your address upto 50 words';
        isValid = false;
    } else {
        document.getElementById('add').innerText = '';
    }

    
}

validation();