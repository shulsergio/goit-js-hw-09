const formData = { email: '', message: '' };
const LS_KEY_FORM = 'feedback-form-state';
const dataForm = document.querySelector('.feedback-form');
const dataInput = document.querySelector('input[type="email"]');
const dataTextarea = document.querySelector('textarea[name="message"]');
const dataSubmit = document.querySelector('button[type="submit"]');
// -------

let StorageData = JSON.parse(localStorage.getItem(LS_KEY_FORM));
dataForm.addEventListener('input', onInputDataFromUser);
dataForm.addEventListener('submit', onSubmitDataFromUser);

// -- func ---

function onInputDataFromUser(evt) {
  evt.preventDefault();
  const { email, message } = evt.currentTarget.elements;
  formData.email = email.value.trim();
  formData.message = message.value.trim();
  localStorage.setItem(LS_KEY_FORM, JSON.stringify(formData));
  // -----
}

function onSubmitDataFromUser(evt) {
  evt.preventDefault();
  console.log('dataForm.input - ', dataInput.value.trim());
  console.log('dataForm.message- ', dataTextarea.value.trim());
  if (dataInput.value.trim() == '' || dataTextarea.value.trim() == '') {
    alert('Fill please all fields');
    return;
  }
  formData.email = dataInput.value.trim();
  formData.message = dataTextarea.value.trim();
  console.log(formData);
  //   localStorage.clear();
}
