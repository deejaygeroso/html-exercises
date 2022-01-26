// Initialize the method to be used for getting firstName & lastName
const urlParams = new URLSearchParams(window.location.search);

// Get the value of firstName and lastName
const firstName = urlParams.get("firstName");
const lastName = urlParams.get("lastName");

// Developers often use `console.log` to check if our code is working and if we are getting the right value
console.log("firstName", firstName);
console.log("lastName", lastName);

// Render firstName & lastName to `next_page.html`
document.getElementById("firstName").innerHTML = firstName;
document.getElementById("lastName").innerHTML = lastName;
