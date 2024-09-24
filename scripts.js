const scriptURL = 'https://script.google.com/macros/s/AKfycbxU5QzrsNMsIgGGsCBpMTanqObODBalNf8w4PmWyTh9WPcwmY9uUxcG32ZvB30pUVED/exec'
const form = document.forms['submit-to-google-sheet'];
const feedbackConfirmation = document.getElementById("feedbackConfirmation");
const submitBtn = document.getElementById("submitBtn");
const textarea = form.querySelector('textarea[name="Message"]');

textarea.addEventListener('input', function() {
  this.style.height = 'auto'; // Reset height to auto
  this.style.height = (this.scrollHeight) + 'px'; // Set height to scrollHeight
});

form.addEventListener('submit', e => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      feedbackConfirmation.innerHTML = "Thanks for the Feedback";
      feedbackConfirmation.style.display = 'block';
      setTimeout(function(){
        feedbackConfirmation.style.display = 'none';
      }, 5000);
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit';
    })
    .catch(error => {
      console.error('Error!', error.message);
      feedbackConfirmation.innerHTML = "Submission failed. Please try again.";
      feedbackConfirmation.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit';
    });
});
