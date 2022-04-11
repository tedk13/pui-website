// Get All Visualizers
const visualizers = document.querySelectorAll('.visualizer');

// Check if there are any visualizers
if (visualizers) {
  // Setup each visualizer
  visualizers.forEach((visualizer) => {
    // Grab actions and results panels
    const actions = visualizer.querySelector('.actions');
    const results = visualizer.querySelector('.results');

    // Grab all the buttons and example elements
    const actionBtns = actions.querySelectorAll('.button');
    const examples = results.querySelectorAll('.example');

    // Set the default classes for the examples, found in `data-defaults` attribute
    examples.forEach(
      (example) =>
        (example.classList = ['example', example.dataset.defaults].join(' '))
    );

    // Make buttons clickable, applies the buttons `data-class` attribute to the example
    actionBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        examples.forEach((example) => {
          example.innerHTML = null;

          // determines how many example child elements to display, will always display at least one
          if (btn.dataset.children) {
            for (i = 0; i < btn.dataset.children; i++) {
              example.appendChild(exampleEl(btn.dataset.childclass));
            }
          } else {
            example.appendChild(exampleEl(btn.dataset.childclass));
          }

          // sets a class on the parent element
          if (btn.dataset.class) {
            example.classList = [
              'example',
              example.dataset.defaults,
              btn.dataset.class,
            ].join(' ');
          } else {
            example.classList = ['example', example.dataset.defaults].join(' ');
          }
        });
      });
    });
  });
}

// creates the child class elements
const exampleEl = (childClasses) => {
  const el = document.createElement('div');
  const classes =
    'example-element border border--color-white background--light-purple';
  el.classList = [classes, childClasses].join(' ');

  return el;
};
