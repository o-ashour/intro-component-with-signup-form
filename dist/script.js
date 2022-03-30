// Elements
const submitBtnEL = document.querySelector('.submit-btn');
const inputsArr = document.querySelectorAll('input');


// Event Listeners
submitBtnEL.addEventListener('click', checkInfo);

function checkInfo(e) {
  inputsArr.forEach(inputEL => {
    if (inputEL.value === '') {
      inputEL.previousElementSibling.style.display = 'block';
      inputEL.classList.add('input-error');
      const errTextEL = document.createElement('small');
      errTextEL.className = 'error-text';
      errTextEL.textContent = `${inputEL.getAttribute('placeholder')} cannot be empty`;
      inputEL.parentElement.appendChild(errTextEL);
    }  
  });

  inputsArr.forEach(inputEL => inputEL.addEventListener('focus', removeErr));
  
  const errMsgArr = document.querySelectorAll('.error-text');

  function removeErr(){
    errMsgArr.forEach(errMsgEL => errMsgEL.remove());

    inputsArr.forEach(inputEL => { 
      inputEL.previousElementSibling.style.display = 'none';
      inputEL.classList.remove('input-error');
    });
  }; 
  e.preventDefault();
}


 



// dynamically insert error classes and elements based on if inputs are valid or not
// work on better email regex
// use onfocus to toggle classes, display/hide elements