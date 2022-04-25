import throttle from 'lodash.throttle';

const KEY_LS_INPUT = `feedback-form-state`;
const form = document.querySelector(`.feedback-form`);
const saveToLS = {};

function submitForm(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(KEY_LS_INPUT)));
  form.reset();
  localStorage.removeItem('feedback-form-state');
}

function inputForm(e) {
  let { name, value } = e.target;
  saveToLS[name] = value;
  localStorage.setItem(KEY_LS_INPUT, JSON.stringify(saveToLS));
}

form.addEventListener(`submit`, submitForm);
form.addEventListener(`input`, throttle(inputForm, 500));
