// زر البحث
document.getElementById("searchBtn").addEventListener("click", function () {

    let searchValue = document.getElementById("doctorSearch").value.trim();

    if (searchValue === "") {
        alert("Please enter a doctor specialty.");
    } else {
        alert("Searching for: " + searchValue);
    }

});


// زر Find A Doctor
document.getElementById("findDoctorBtn").addEventListener("click", function () {
    window.location.href = "find-doctor.html";
});


// زر Book an appointment
document.getElementById("appointmentBtn").addEventListener("click", function () {

    alert("Book an appointment");

});


// زر Login
document.querySelector(".login-btn").addEventListener("click", function () {

    alert("Login page");

});


// زر Sign Up
document.querySelector(".signup-btn").addEventListener("click", function () {

    alert("Sign up page");

});