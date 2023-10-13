function submitForm() {
    // Perform any necessary form validations here

    // Get form values
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var genderElements = document.getElementsByName("gender");
    var gender = Array.from(genderElements).filter(element => element.checked).map(element => element.value).join(", ");
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    // Display the results in a popup
    var results = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    document.getElementById("popup-results").innerHTML = results;
    document.getElementById("popup").style.display = "block";

    // Prevent the form from actually submitting
    return false;
}

function resetForm() {
    document.getElementById("survey-form").reset();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    resetForm();
}
