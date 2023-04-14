let themeButton = document.getElementById('theme-button');
const form = document.getElementById('sign-petition');
const emailInput = document.getElementById('email');


//dark mode function
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
};

themeButton.addEventListener('click', toggleDarkMode);


// Add your query for the sign now button here
const signNowBtn = document.getElementById('sign-now-btn');

// Write your code to manipulate the DOM here
const addSignature = () => {
  const nameInput = document.getElementById('name');
  const cityInput = document.getElementById('city');
  const emailInput = document.getElementById('email');
  const signaturesDiv = document.querySelector('.signatures');
  const newSignature = document.createElement('p');
  newSignature.textContent = `🖊️ ${nameInput.value} from ${cityInput.value} supports this.`;
  signaturesDiv.appendChild(newSignature);
//clear the input fields
  nameInput.value = '';
  cityInput.value = ''; 
  emailInput.value = '';
};

const validateForm = (event) => {
   event.preventDefault();

  let containsErrors = false;

  let petitionInputs = document.getElementById('sign-petition').elements;
  
  for(let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if(containsErrors == false) {
    addSignature();
    for(let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = '';
    }
    containsErrors = false;
  } 

  if (!email.value.includes('.com')) {
    containsErrors = true;
    email.classList.add('error');
  } else {
    email.classList.remove('error');
}
}

signNowBtn.addEventListener('click', validateForm);
