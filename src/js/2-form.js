let formData = { email: '', message: '' };
const LS_KEY_FORM = 'feedback-form-state';
const dataForm = document.querySelector('.feedback-form');
const dataInput = document.querySelector('input[type="email"]');
const dataTextarea = document.querySelector('textarea[name="message"]');
const dataSubmit = document.querySelector('button[type="submit"]');

let StorageData = JSON.parse(localStorage.getItem(LS_KEY_FORM));
dataForm.addEventListener('input', onInputDataFromUser);
dataForm.addEventListener('submit', onSubmitDataFromUser);
if (StorageData) {
  dataForm.email.value = StorageData.email;
}
if (StorageData) {
  dataForm.message.value = StorageData.message;
}
// -- func ---
function onInputDataFromUser(evt) {
  // evt.preventDefault();

  const { email, message } = evt.currentTarget.elements;
  formData.email = email.value.trim();
  formData.message = message.value.trim();

  localStorage.setItem(LS_KEY_FORM, JSON.stringify(formData));

  // -----
}

function onSubmitDataFromUser(evt) {
  evt.preventDefault();
  if (
    dataForm.email.value.trim() == '' ||
    dataForm.message.value.trim() == ''
  ) {
    alert('Fill please all fields');
    return;
  }
  formData.email = dataForm.email.value.trim();
  formData.message = dataForm.message.value.trim();
  console.log(formData);
  formData = {};
  dataForm.email.value = '';
  dataForm.message.value = '';
  localStorage.clear();
}
