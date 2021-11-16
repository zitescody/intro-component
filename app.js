const form = document.getElementById('claim');
const firstName = form.elements['first-name'];  //access first name
const lastName = form.elements['last-name'];    //access last name
const email = form.elements['email'];           //access email
const password = form.elements['password'];     //access password

let fullName = firstName.value + '' + lastName.value;   //append name
let emailAddress = email.value;                         //assign email value
let password = password.value;                          //assign password value

form.addEventListener('submit', (event) => {
    event.preventDefault;

    // validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	// if valid, submit the form.
	if (nameValid && emailValid) {
		alert("Demo only. No form was posted.");
	}
});
form.submit();

//show message with input type
function showMessage(input, message, type) {
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;

    input.className = type ? "success" : "error";
    return type;
}

//error function
function showError(input, message) {
    return showMessage(input, message, false);
}

//success function
function showSuccess(input) {
    return showMessage(input, "", true);
}

//check if input has value or not
function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#claim");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

