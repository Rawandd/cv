const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirm');
const signinForm = document.getElementById('signin-Form');
const signupForm = document.getElementById('signup-Form');
const signUp = document.getElementById('signupButton');
const signIn = document.getElementById('signinButton');

// Show ERROR Function
const showErrorFunction = (err, message) => {
  const parentEl = err.parentElement;
  parentEl.className = 'form-control error'
  const small = parentEl.querySelector('small');
  small.innerText = message
}

// Show SUCCES Function  
const showSuccessFunction = input => {
  const parentEl = input.parentElement;
  parentEl.className = 'form-control success'
}

// Check For Validate Email
const emailValidation = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Check for Get Error
const getError = itemArr => {
  itemArr.forEach(item => {
    if (item.value.trim() === '') {
      showErrorFunction(item, `${getFieldName(item)} is Required`)
    } else {
      item.id === 'email' ?
        !emailValidation(item.value) ?
          showErrorFunction(item, `${getFieldName(item)} Must be valid`) : showSuccessFunction(item)
        : showSuccessFunction(item)
    }
  });
}


// Get Field Name
const getFieldName = item => {
  return item.id.charAt(0).toUpperCase() + item.id.slice(1);
}

const checkLength = (input, min, max) => {
  if (input.value.length > max || input.value.length < min) {
    showErrorFunction(input, `The ${getFieldName(input)} Must between ${min} and ${max}`);
  } else {
    if (input.id === 'password') {
      checkPasswordConfirm(password, confirmPass)
    } else {
      showSuccessFunction(input)
    }
  }
}

const checkPasswordConfirm = (pass, conf) => {
  if (pass.value.trim() === conf.value.trim()) {
    showSuccessFunction(pass)
  } else {
    showErrorFunction(conf, 'Password Not The Same')
  }
}

// Add Event Listeners 
form.addEventListener('submit', (event) => {
  event.preventDefault();

  getError([username, email, password, confirmPass])
  checkLength(password, 6, 20);
  checkLength(username, 3, 15);
})


// Sign in & Sign up form Show After Clicked 
signIn.addEventListener('mouseover', () =>{
  signIn.style.visibility = 'hidden';
  signUp.style.visibility = 'visible';

  signinForm.classList.add('active')
  signupForm.classList.remove('active');
});

signUp.addEventListener('mouseover', () =>{
  signUp.style.visibility = 'hidden';
  signIn.style.visibility = 'visible';
  
  signupForm.classList.add('active');
  signinForm.classList.remove('active');
})