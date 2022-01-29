const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	let passwordVal = password.value.trim();
    let passwordRegex1 = /[a-z]/;
    let passwordRegex2 = /[A-Z]/;
    let passwordRegex3 = /[0-9]/;
    let passwordRegex4 = /[~`!@#$%^&*;:"<>,./?]/;
    let passwordRegex5 = /[-_+={}]/;
    let passwordRegex6 = /[(){}|]/;
    let passwordRegex7 = /[/]/;
    let passwordRegex8 = /[\[\]]/;
  
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} 
    else if (
      passwordRegex1.test(passwordVal) &&
      passwordRegex2.test(passwordVal) &&
      passwordRegex3.test(passwordVal) &&
      (passwordRegex4.test(passwordVal) ||
        passwordRegex5.test(passwordVal) ||
        passwordRegex6.test(passwordVal) ||
        passwordRegex7.test(passwordVal) ||
        passwordRegex8.test(passwordVal))
    )
      return setSuccessFor(password);
    else {
      return setErrorFor(
        password,
        'NOt a strong Password'
      );
    }
	
	
}
function lockkb(event)
{
	let code=event.which;
	if(code>47 && code<58)
		return false;
	else
		return true;
}
const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return  /([a-z0-9\.\-_]{5,25})@christuniversity.in$/.test(email);
}





// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});