
// formRef.addEventListener('input', throttle(onFormInput, 500));
// formRef.addEventListener('submit', onFormSubmit);

const throttle = require('lodash.throttle');
const FEEDBACK = 'feedback-form-state';

const formRef = document.querySelector('form');
const feedbackForm = document.querySelector('.feedback-form');
const feedbackTextarea = document.querySelector('.feedback-form textarea');


formRef.addEventListener('submit', onSubmitForm);
formRef.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput(e) {
  const formEmail = formRef.querySelector('input').value;
  const formMessage = formRef.querySelector('textarea').value;
  const states = {
    userEmail: `${formEmail}`,
    userMessage: `${formMessage}`,
  };
  localStorage.setItem(FEEDBACK, JSON.stringify(states));
}
onPageReload();

function onPageReload(e) {
  const savedInfo = localStorage.getItem(FEEDBACK);
  if (savedInfo) {
      const saveInfoObj = JSON.parse(savedInfo);
      // console.log(saveInfoObj);
      formRef.querySelector('input').value = saveInfoObj.userEmail;
      formRef.querySelector('textarea').value = saveInfoObj.userMessage;
    }
  }



function onSubmitForm(e) {
  e.preventDefault();

  console.log(`${FEEDBACK}:`, JSON.parse(localStorage.getItem(FEEDBACK)));

  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK);
}


