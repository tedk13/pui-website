const skeletons = document.querySelectorAll('.skeleton');

if (skeletons) {
  skeletons.forEach((skelly) => {
    let lineCount = parseInt(skelly.getAttribute('data-lines'));

    let animation = skelly.getAttribute('data-animation') === 'true';

    if (!lineCount && skelly.innerHTML.trim().length == 0) {
      lineCount = 1;
    }

    for (i = 0; i < lineCount; i++) {
      const line = document.createElement('span');
      line.classList.add('skeleton__line');
      if (animation == true) {
        const animationElement = document.createElement('span');
        animationElement.classList.add('skeleton__animation');
        line.appendChild(animationElement);
      }
      skelly.appendChild(line);
    }
  });
}
