//* Input Placeholder *//

// Get a reference to the feedback form
const feedbackForm = document.querySelector('.feedback-form');

// Get references to the form fields (email and message)
const emailInput = feedbackForm.elements.email;
const messageInput = feedbackForm.elements.message;

// Retrieve saved data from local storage
const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

// Check if there is saved data and fill the form fields accordingly
if (savedData === null) {
  emailInput.value = '';
  messageInput.value = '';
} else {
  emailInput.value = savedData.email;
  messageInput.value = savedData.message;
}

// Add an event listener for input events on the form
feedbackForm.addEventListener('input', handleInput);

// Event handler for saving data to local storage
function handleInput(event) {
  const form = event.currentTarget;
  const inputData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}

// Add an event listener for form submission
feedbackForm.addEventListener('submit', handleSubmit);

// Event handler for form submission
function handleSubmit(evt) {
  evt.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    return alert('All form fields must be filled in');
  } else {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
    feedbackForm.reset();
  }
}
