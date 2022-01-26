const urlParams = new URLSearchParams(window.location.search);
const firstName = urlParams.get("firstName");
const lastName = urlParams.get("lastName");

document.getElementById("firstName").innerHTML = firstName;
document.getElementById("lastName").innerHTML = lastName;
