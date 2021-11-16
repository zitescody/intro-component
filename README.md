# intro-component
Intro form validation challenge from Frontend Mentor


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- Submit a form

### Links

- Solution URL: [Add solution URL here](https://github.com/zitescody/intro-component/)
- Live Site URL: [Live Site](https://zitescody.github.io/intro-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<form action="#" onsubmit="return validateForm()" method="post" id="claim">
        <div class="field-container">
          <input class="field" type="text" id="first-name" placeholder="First Name" required>
          <small></small>
        </div>
        <div class="field-container">
          <input class="field" type="text" id="last-name" placeholder="Last Name" required>
          <small></small>
        </div>
        <div class="field-container">
          <input class="field" type="email" id="email" placeholder="Email Address" required>
          <small></small>
        </div>
        <div class="field-container">
          <input class="field" type="password" id="password" placeholder="Password" required>
          <small></small>
        </div>
        <input class="button" type="submit" id="btn" value="Claim Your Free Trial">
      </form>
```
```css
main.content {
    display: grid;
    grid-template-columns: [first] 100% [end];
    grid-template-rows: [first] 30% [second] 12% [third] 53% [end];
    grid-template-areas: 
    "one"
    "two"
    "three"
    ;
    margin: 0% 8% 8%;
    row-gap: 10px;
}

    section.container-1 { 
        grid-column-start: first;
        grid-column-end: end;
        grid-row-start: first;
        grid-row-end: second;
        grid-area: one;
        margin-bottom: 2%;
    }

    section.container-2 {
        grid-column-start: first;
        grid-column-end: end;
        grid-row-start: second;
        grid-row-end: third;
        grid-area: two;
        background-color: var(--blue);
        border-radius: 10px;
        max-width: 100%;
        padding: 5%, 10%, 5%;
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
        margin-bottom: 2%;
    }

    section.container-3 {
        grid-column-start: first;
        grid-column-end: end;
        grid-row-start: third;
        grid-row-end: end;
        grid-area: three;
        background-color: white;
        border-radius: 10px;
        max-width: 100%;
        padding: 5%;
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
    }
}
```
```js
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
}
```


### Continued development
I want to become more proficient with creating my own JavaScript functions. I want to have a clearer understanding of JavaScript form validations.


### Useful resources

- [Background Image](https://www.w3schools.com/cssref/pr_background-image.asp)
- [Form Submission](https://www.javascripttutorial.net/javascript-dom/javascript-form/)

## Author

- Website - [Cody Zites](https://github.com/zitescody)
- Frontend Mentor - [@zitescody](https://www.frontendmentor.io/profile/zitescody)


