import throttle from 'lodash.throttle';

const LS_KEY = 'feedback-form-state';
const elements = {
  formTemp: document.querySelector('.js-feedback-form'),
};
const formElem = {
  email: '',
  message: '',
};
elements.formTemp.addEventListener('input', throttle(handlerInput, 500));
elements.formTemp.addEventListener('submit', handlerSubmit);

if (localStorage.getItem(LS_KEY)) {
  const { email = '', message = '' } = JSON.parse(localStorage.getItem(LS_KEY));

  elements.formTemp.elements.email.value = email;
  elements.formTemp.elements.message.value = message;

  formElem.email = email;
  formElem.message = message;
}

function handlerInput(e) {
  if (e.target.name === 'email') {
    formElem.email = e.target.value;
  }
  if (e.target.name === 'message') {
    formElem.message = e.target.value;
  }
  localStorage.setItem(LS_KEY, JSON.stringify(formElem));
}

function handlerSubmit(e) {
  e.preventDefault();
  console.log(formElem);
  localStorage.removeItem(LS_KEY);
  formElem.email = '';
  formElem.message = '';
  e.currentTarget.reset();
}
