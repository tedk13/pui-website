// Grab all instances of anything using the .skeleton class
const skeletons = document.querySelectorAll('.skeleton');

//check if there are any skeletons
if (skeletons) {
  skeletons.forEach((skelly) => {
    // grab the requested number of lines
    let lineCount = parseInt(skelly.getAttribute('data-lines'));

    // set animation boolean for later when we check if the animation attribute is true or not
    let animation = skelly.getAttribute('data-animation') === 'true';

    // if there is no data-line attribute set and that the inside of the .skeleton element is empty, set default lineCount to 1
    if (!lineCount && skelly.innerHTML.trim().length == 0) {
      lineCount = 1;
    }

    // adds span.skeleton__line for however many lines have been requested to the .skeleton element
    for (i = 0; i < lineCount; i++) {

      // creates the span.skeleton__line element
      const line = document.createElement('span');
      line.classList.add('skeleton__line');

      // check if animation was requested
      if (animation === true) {
        // if true, adds span.skeleton__animation to the span.skeleton__line element
        const animationElement = document.createElement('span');
        animationElement.classList.add('skeleton__animation');
        line.appendChild(animationElement);
      }
      
      skelly.appendChild(line);
    }
  });
}

// Grab all instances of .skeleton-images elements
const skeletonImages = document.querySelectorAll(".skeleton-image");

if (skeletonImages) {
  skeletonImages.forEach((skelly) => {
    // set animation boolean for later when we check if the animation attribute is true or not
    let animation = skelly.getAttribute("data-animation") === "true";

    // add animation if data-animation is true
    if (animation === true) {
      const animationElement = document.createElement("span");
      animationElement.classList.add("skeleton--animation");
      skelly.appendChild(animationElement);
    }
  });
}
