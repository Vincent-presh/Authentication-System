// Get DOM elements for the INPUT elements
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

//asynchronous function to make request to server.
async function validate() {
  alert("Email: " + emailInput.value + " Password: " + passwordInput.value);
  //Fetch method post request
  await fetch("http://localhost:3000/login" {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    body: JSON.stringify({
      // "email": emailInput.value
      //  "password": passwordInput
      email: emailInput.value,
      password: passwordInput.value,
    })
  })
    .then((response) => response.json())
    .then((data) => {
      //Alert Response data
      alert(data);
    });
}
