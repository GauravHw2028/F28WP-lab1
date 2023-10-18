
// Initialize variables
let currentIndex = 0;//sets current index to 0
let images = [];//empty array 
const intervalTime = 3000;//time interval for image switch

// Set up array of images
images = [
  'images/banner_img1.png',
  'images/banner_img2.png',
  'images/banner_img3.png',
  'images/banner_img4.png',
  'images/banner_img5.png',
  'images/banner_img6.png',
];

// Function to switch images
function imageSwitch() { //function that changes the source of the image with the name slide to display diff images from the array
  const slide = document.getElementById('slide');
  slide.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;//increments the index by 1 and resets it to 0 when it reaches the end of the array
}

// Set interval to switch images
setInterval(imageSwitch, intervalTime);//calls the function imageSwitch every 3 seconds

// Add event listener to load image on window load
window.addEventListener('load', imageSwitch);//calls the function imageSwitch when the window loads

//END OF QUESTION 1

//form validation  

// Get all the elements in the form
const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

form.addEventListener('submit', event => {//event listener for the submit button
  event.preventDefault();//prevents the default action of the submit button
  validateInputs();//calls the function to validateInputs
});

usernameInput.addEventListener('blur', () => {//event listener for when the user clicks out of the username input(moves out of focus)
  validateUsername();//calls the function to validateUsername
});

emailInput.addEventListener('blur', () => {//event listener for when the user clicks out of the email input(moves out of focus)
  validateEmail();//calls the function to validateEmail
});

passwordInput.addEventListener('blur', () => {//event listener for when the user clicks out of the password input(moves out of focus)
  validatePassword();//calls the function to validatePassword
});

confirmPasswordInput.addEventListener('blur', () => {//event listener for when the user clicks out of the confirm password input(moves out of focus)
  validateConfirmPassword();//calls the function to validateConfirmPassword
});

function validateInputs() {//function to validate all the inputs
  validateUsername();
  validateEmail();
  validatePassword();
  validateConfirmPassword();

  if (isFormValid()) {//if all the inputs are valid, an alert will pop up
    alert('User registered successfully!');//alert message
    
  }
}

function validateUsername() {//function to validate the username input
  const usernameValue = usernameInput.value.trim();//gets the value of the username input and removes any whitespace with trim

  if (usernameValue === '') {
    setError(usernameInput, 'Username is required');//calls the function to set the input to error
  } else {
    setSuccess(usernameInput);//calls the function to set the input to success
  }
}

function validateEmail() {
  const emailValue = emailInput.value.trim();//gets the value of the email input and removes any whitespace with trim

  if (emailValue === '') {
    setError(emailInput, 'Email is required');//calls the function to set the input to error
  } else if (!isValidEmail(emailValue)) {//calls the function to check if the email is valid
    setError(emailInput, 'Email is invalid');//calls the function to set the input to error
  } else {
    setSuccess(emailInput);//calls the function to set the input to success
  }
}

function validatePassword() {
  const passwordValue = passwordInput.value.trim();//gets the value of the password input and removes any whitespace with trim

  if (passwordValue === '') {
    setError(passwordInput, 'Password is required');//calls the function to set the input to error
  } else if (passwordValue.length < 8) {
    setError(passwordInput, 'Password must be at least 8 characters long');//calls the function to set the input to error
  } else {
    setSuccess(passwordInput);//calls the function to set the input to success
  }
}

function validateConfirmPassword() {
  const confirmPasswordValue = confirmPasswordInput.value.trim();//gets the value of the confirm password input and removes any whitespace with trim
  const passwordValue = passwordInput.value.trim();//gets the value of the password input and removes any whitespace with trim

  if (confirmPasswordValue === '') {
    setError(confirmPasswordInput, 'Confirm Password is required');//calls the function to set the input to error
  } else if (confirmPasswordValue !== passwordValue) {//checks if the confirm password input is the same as the password input
    setError(confirmPasswordInput, 'Passwords do not match');//calls the function to set the input to error
  } else {
    setSuccess(confirmPasswordInput);// calls the function to set the input to success
  }
}

function isValidEmail(email) {
  const emailRegistration = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//check if the email is valid
  return emailRegistration.test(emailInput.value);//returns true if the email is valid
}

function setError(element, message) {
  const inputControl = element.parentElement;//gets the parent element of the input
  inputControl.classList.add('error');//adds the class error to the parent element
  const errorDiv = inputControl.querySelector('.error');//gets the element with the class error
  errorDiv.innerText = message;//sets the text of the error element to the message
}

function setSuccess(element) {
  const inputControl = element.parentElement;//gets the parent element of the input
  inputControl.classList.add('success');//adds the class success to the parent element  
  inputControl.classList.remove('error');// removes the class error from the parent element
  const errorDisplay = inputControl.querySelector('.error');//gets the element with the class error
  errorDisplay.innerText = '';//sets the text of the error element to nothing
}

function isFormValid() {//checks if all the inputs are valid
  return (
    usernameInput.parentElement.classList.contains('success') &&//checks if the parent element of the inputs has the class success
    emailInput.parentElement.classList.contains('success') &&
    passwordInput.parentElement.classList.contains('success') &&
    confirmPasswordInput.parentElement.classList.contains('success')
  );
}

//END OF QUESTION 2





/*
//slideshow for gallery
let slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex+=n);
  }
function currentSlide(n){
    showSlides(slideIndex=n);
    }

let slides=document.getElementsByClassName("mySlides");

let dots=document.getElementsByClassName("dot");
let captionText=document.getElementById("caption");

function showSlides(n){
  let i;

  if(n>slides.length){
    slideIndex=1}

  if(n<1){
    slideIndex=slides.length}

  for(i=0;i<slides.length;i++){
    slides[i].style.display="none";
  }

  for(i=0;i<dots.length;i++){
    dots[i].className=dots[i].className.replace("active","");
  }

  slides[slideIndex-1].style.display="block";
  dots[slideIndex-1].className+="active";
    captionText.innerHTML=dots[slideIndex-1].alt;
}
*/
