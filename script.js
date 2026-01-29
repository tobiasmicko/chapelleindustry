const images = [
  "images/postcard-1.jpg",
  "images/postcard-2.jpg",
  "images/postcard-3.jpg",
  "images/postcard-4.jpg",
  "images/postcard-5.jpg"
];

// Preload all images
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

// Select one image per full page load
const selectedImage =
  images[Math.floor(Math.random() * images.length)];

const postcard = document.getElementById("postcard");
const postcardImage = document.getElementById("postcard-image");

postcardImage.src = selectedImage;

// Flip interaction
postcard.addEventListener("click", () => {
  postcard.classList.toggle("is-flipped");
});
