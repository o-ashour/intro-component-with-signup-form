// Elements
const submitBtnEL = document.querySelector('.submit-btn');
const inputsArr = document.querySelectorAll('input');
const emailEL = document.getElementById('email');

let mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// Event Listeners
submitBtnEL.addEventListener('click', checkInfo);

function checkInfo(e) {
  inputsArr.forEach(inputEL => {
    if (inputEL.value === '') {
      submitBtnEL.setAttribute('disabled', '');
      inputEL.previousElementSibling.style.display = 'block';
      inputEL.classList.add('input-error');
      const errTextEL = document.createElement('small');
      errTextEL.className = 'error-text';
      errTextEL.textContent = `${inputEL.getAttribute('placeholder')} cannot be empty`;
      inputEL.parentElement.appendChild(errTextEL);
    }
  });
  // console.log(emailEL.value);
  if (emailEL.value !== '' && !mailRegex.test(emailEL.value)) {
    submitBtnEL.setAttribute('disabled', '');
    emailEL.previousElementSibling.style.display = 'block';
    emailEL.classList.add('input-error');
    const mailErrMsgEL = document.createElement('small');
    mailErrMsgEL.className = 'error-text';
    mailErrMsgEL.textContent = 'Looks like this is not an email';
    emailEL.parentElement.appendChild(mailErrMsgEL);
  }

  inputsArr.forEach(inputEL => inputEL.addEventListener('focus', removeErr));
  
  const errMsgArr = document.querySelectorAll('.error-text');

  function removeErr(){
    errMsgArr.forEach(errMsgEL => errMsgEL.remove());

    inputsArr.forEach(inputEL => { 
      inputEL.previousElementSibling.style.display = 'none';
      inputEL.classList.remove('input-error');
    });

    submitBtnEL.removeAttribute('disabled');
  }; 
  e.preventDefault();
}