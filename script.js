// List your postcard images here
const images = [
  "postcard-1.jpg",
  "postcard-2.jpg",
  "postcard-3.jpg",
  "postcard-4.jpg",
  "postcard-5.jpg"
];

// Pick a random image ONCE per page load
const selectedImage = images[Math.floor(Math.random() * images.length)];

const postcard = document.getElementById("postcard");
const postcardImage = document.getElementById("postcard-image");

// Set image
postcardImage.src = selectedImage;

// Flip interaction
postcard.addEventListener("click", () => {
  postcard.classList.toggle("is-flipped");
});
