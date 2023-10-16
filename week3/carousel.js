
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
  currentIndex = (currentIndex + 1) % images.length;
}

// Set interval to switch images
setInterval(imageSwitch, intervalTime);

// Add event listener to load image on window load
window.addEventListener('load', function() {
    const bannerContainer = document.querySelector('.banner-container');
    const img = document.createElement('img');
    bannerContainer.appendChild(img);
    imageSwitch();
  });

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
