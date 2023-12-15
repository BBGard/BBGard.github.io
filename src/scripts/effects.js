/**
 * @file effects.js
 * @description This file contains the code for the effects of the website.
 *
 */

/**
 * @function shake
 * @description This function adds a shake animation to the element.
 */
document.querySelectorAll(".shakeable").forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.add("shake");
		// if element uses a shadow, add the colorized class
		if (element.tagName === "H1" || element.tagName === "H2" || element.className.includes("card")) {
			element.classList.add("colorized");
		}

    setTimeout(() => {
      element.classList.remove("shake");

    }, 1000);
  });
});


/**
 * @function colorOnScroll
 * @description This function colorizes any img elements as they come into view.
 *
 */

// Get all the img elements
const images = document.querySelectorAll("img");

// Create an observer
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > 0) {
			entry.target.classList.add("colorized");
		} else {
			entry.target.classList.remove("colorized");
		}
	});
});

// Observe each image
images.forEach((image) => {
	observer.observe(image);
});


/**
 * @function slideIn
 * @description This function slides in any element as it comes into view.
 */

// Get all the elements to slide in
const slideInElements = document.querySelectorAll(".slide-in-left, .slide-in-right");
console.log(slideInElements);


// Create an observer
const slideInObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > 0) {
			entry.target.classList.add("slide-in-animation");
		}
	});
});

// Observe each element
slideInElements.forEach((element) => {
	slideInObserver.observe(element);
});
