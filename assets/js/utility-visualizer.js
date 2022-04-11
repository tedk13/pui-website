const visualizers = document.querySelectorAll('.visualizer');

// Function to create a new child example elements
const createExampleChild = (child) => {
  const exampleChild = document.createElement(child.el);
  exampleChild.classList.add('example-child');
  if (child.classes) {
    exampleChild.classList = [...exampleChild.classList, ...child.classes].join(
      ' '
    );
    exampleChild.setAttribute('data-default-class', exampleChild.classList);
  }
  if (child.content) exampleChild.innerHTML = child.content;
  return exampleChild;
};

// Function to create example container
const createExampleContainer = (setup) => {
  const exampleContainer = document.createElement('div');
  exampleContainer.classList.add('example');
  if (setup.classes) {
    exampleContainer.classList = [
      ...exampleContainer.classList,
      ...setup.classes,
    ].join(' ');

    exampleContainer.setAttribute(
      'data-default-class',
      exampleContainer.classList
    );
  }

  if (setup.children) {
    setup.children.forEach((child) =>
      exampleContainer.append(createExampleChild(child))
    );
  }

  return exampleContainer;
};

if (visualizers) {
  visualizers.forEach((visualizer) => {
    // Build results element
    const results = visualizer.querySelector('.results');
    if (results) {
      if (results.dataset.setup) {
        // Create example container based on setup config
        const setup = JSON.parse(results.dataset.setup);
        results.append(createExampleContainer(setup));
      } else if (results.children.length) {
        // Create example container based on manually added elements
        const children = [...results.childNodes];

        results.innerHTML = '';

        const exampleContainer = document.createElement('div');

        exampleContainer.classList.add('example');
        if (results.dataset.defaultClass) {
          const defaultClasses = results.dataset.defaultClass.split(' ');

          exampleContainer.classList = [
            ...exampleContainer.classList,
            ...defaultClasses,
          ].join(' ');
        }

        exampleContainer.setAttribute(
          'data-default-class',
          exampleContainer.classList
        );

        children.forEach((child) => {
          if (child.length) return;
          child.classList.add('example-child');
          child.setAttribute('data-default-class', child.classList);
          exampleContainer.append(child);
        });

        results.append(exampleContainer);
      }
    }

    const actionBtns = visualizer.querySelectorAll('.visualizer button');

    actionBtns.forEach((actionBtn) => {
      const codeSnippet = actionBtn.querySelector('pre');
      if (codeSnippet) codeSnippet.style.pointerEvents = 'none';

      actionBtn.addEventListener('click', (e) => {
        const actions = e.target.dataset;

        const example = results.querySelector('.example');
        if (example) {
          const exampleChildren = example.querySelectorAll('.example-child');

          if (actions.exampleContainer) {
            example.classList = [
              example.dataset.defaultClass,
              ...actions.exampleContainer.split(' '),
            ].join(' ');
          } else {
            example.classList = example.dataset.defaultClass;
          }

          if (actions.exampleElements) {
            const exampleChildren = example.querySelectorAll('.example-child');

            exampleChildren.forEach((child) => {
              child.classList = [
                child.dataset.defaultClass,
                ...actions.exampleElements.split(' '),
              ].join(' ');
            });
          } else {
            exampleChildren.forEach((child) => {
              child.classList = child.dataset.defaultClass;
            });
          }

          if (actions.reset == true) {
            example.classList = example.dataset.defaultClass;
            exampleChildren.forEach((child) => {
              child.classList = child.dataset.defaultClass;
            });
          }
        }
      });
    });
  });
}