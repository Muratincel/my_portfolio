// ! Refresh effects
// if you want to scroll on top, use the first one below, if refresh in the place, 2nd one is notworking....yet

// setTimeout(function () {
//     window.scrollTo(0, 0); // Force the scroll position to the top
// }, 0);

// document.addEventListener("DOMContentLoaded", function () {
//     if (window.location.hash) {
//         let scrollPosition = window.scrollY;
//         window.history.replaceState(null, null, window.location.href.split('#')[0]);
//         window.scrollTo(0, scrollPosition);
//     }
// });


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
