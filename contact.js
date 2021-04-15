//CODE FOR SUBMITTING FORM
const submitBtn = document.querySelector('.submit-input');
const textInput = document.querySelectorAll('.text-input');
let errorText = document.querySelectorAll('.contact-form__group--error-text');
let errorContent = document.querySelectorAll('.contact-form__group--error');

document.getElementById("name").addEventListener('blur', validateName);
document.getElementById("email").addEventListener('blur', validateEmail);
document.getElementById("phone").addEventListener('blur', validatePhone);

const userName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

function validateName() {
  const name = document.getElementById("name");
  const re = /^[a-zA-Z].*[\s\.]*$/g;

  if (!re.test(name.value)) {
    errorContent[0].classList.add("is-invalid");
  } else {
    errorContent[0].classList.remove("is-invalid");
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {

    if (email.value === '') {
        errorText[1].innerHTML = "Can't be empty"
        errorContent[1].classList.add('is-invalid')
    } else {
        errorText[1].innerHTML = 'Invalid format'
        errorContent[1].classList.add('is-invalid');
    }

  } else {
    errorContent[1].classList.remove("is-invalid");
  }
}

function validatePhone() {
  const number = document.getElementById("phone");
  const re = /^[0-9]+$/

  if (!re.test(number.value)) {
    if (number.value === '') {
        errorText[2].innerHTML = "Can't be empty"
        errorContent[2].classList.add('is-invalid')
    } else {
        errorText[2].innerHTML = 'Invalid format'
        errorContent[2].classList.add('is-invalid');
    }
  } else {
    errorContent[2].classList.remove("is-invalid");
  }
}

submitForm();
disableBtn();

// submitBtn.disabled = true;
function disableBtn () {
    textInput.forEach((input) => {
        if (input.value === '') {
            submitBtn.disabled = true;
        }
    
        input.addEventListener('keyup', () => {
            
            if (userName.value !== '' && email.value !== '' && phone.value !== '') {
                submitBtn.disabled = false;
            } else {
                submitBtn.disabled = true
            }
        })
    })
}

function submitForm () {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('You have submitted your form.')

        textInput.forEach(input => {
            input.value = '';
        })
        document.getElementById('message').value = '';
        disableBtn();
    })
}
