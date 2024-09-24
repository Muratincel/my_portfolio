
// Select the navbar and the images
const navbar = document.querySelector('.navbar');
const leftImage = document.querySelector('.left-image');
const rightImage = document.querySelector('.right-image');

// Function to change navbar color
function changeNavbarColor(color) {
    navbar.style.backgroundColor = color;
}

// Add event listeners for hover effects
leftImage.addEventListener('mouseenter', () => {
    changeNavbarColor('white');
});

leftImage.addEventListener('mouseleave', () => {
    changeNavbarColor('rgba(178, 178, 178, 1)'); // Original color
});

rightImage.addEventListener('mouseenter', () => {
    changeNavbarColor('white');
});

rightImage.addEventListener('mouseleave', () => {
    changeNavbarColor('rgba(178, 178, 178, 1)'); // Original color
});
