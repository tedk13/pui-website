window.addEventListener('DOMContentLoaded', (event) => {
  // const tocs = document.querySelectorAll('.on-this-page');
  const main = document.querySelector('main');
  
  // adds page-anchor-target to content headings in article
  const headings = main.querySelectorAll('h2,h3');
  headings.forEach(heading => {
    if (heading.id) {
      heading.classList.add('text--capitalize', 'mt-4', 'page-anchor-target');
    }
  });

  // tables
  // TO BE REMOVED DURING FINAL TABLE PURGE... JAIME!!!
  // const table = main.querySelectorAll('table');
  // if (table) {
  //   table.forEach((table) => {
  //     if (!table.classList.contains('table')) {
  //       table.className = 'table modifiers table--no-hover unresponsive';
  //     }
  //   });
  // }
  
  // loader
  let loaderButton = document.querySelector('.loader-submit');
  let loaderModalButton = document.querySelector('.loader-modal');
  let loaderModal = document.querySelector('#loader-modal');
  let loaderModalCloseButton = document.querySelector('.loader-modal-close');
  let loaderCard = document.querySelector('.loader-card');

  if (loaderButton) {
    loaderButton.addEventListener('click', () => {
      loaderButton.classList.add('loading');
      setTimeout(() => {
        loaderButton.classList.remove('loading');
      }, 3000);
    });

    loaderModalButton.addEventListener('click', () => {
      setTimeout(() => {
        loaderModal.querySelector('.modal__content div').remove();
        let content = document.createElement('p');
        content.innerHTML = 'Modal Content';
        loaderModal.querySelector('.modal__content').appendChild(content);
      }, 3000);
    });

    loaderModalCloseButton.addEventListener('click', () => {
      loaderModal.querySelector('.modal__content p').remove();
      let loader = document.createElement('div');
      loader.classList.add('loader', 'loader--lg');
      loaderModal.querySelector('.modal__content').appendChild(loader);
    });

    setInterval(() => {
      if (loaderCard.querySelector('div .loader')) {
        loaderCard.querySelector('div .loader').remove();
        let content = document.createElement('p');
        content.innerHTML = 'Card Content';
        loaderCard.appendChild(content);
      } else {
        loaderCard.querySelector('div p').remove();
        let loader = document.createElement('div');
        loader.classList.add('loader', 'loader--lg');
        loaderCard.appendChild(loader);
      }
    }, 5000);
  }

  // truncate with ellipsis
  let ellipsisButton = document.querySelector('.ellipsis-button');
  let ellipsisHeader = document.querySelector('.ellipsis-header');

  if (ellipsisButton) {
    ellipsisButton.addEventListener('click', () => {
      ellipsisHeader.classList.toggle('truncate-with-ellipsis');
    });
  }

  // rotate
  let rotateButton = document.querySelector('.rotate-button');
  let rotatePositions = [
    {
      label: '45 degrees',
      class: 'rotate-45',
    },
    {
      label: '90 degrees',
      class: 'rotate-90',
    },
    {
      label: '180 degrees',
      class: 'rotate-180',
    },
    {
      label: 'Normal',
      class: '',
    },
  ];
  let rotateIndex = 0;

  if (rotateButton) {
    rotateButton.addEventListener('click', () => {
      rotateButton.innerHTML = rotatePositions[rotateIndex].label;
      if (rotateIndex > 0) {
        rotateButton.classList.remove(rotatePositions[rotateIndex - 1].class);
      }
      if (rotatePositions[rotateIndex].label === 'Normal') {
        rotateIndex = 0;
      } else {
        rotateButton.classList.add(rotatePositions[rotateIndex].class);
        rotateIndex++;
      }
    });
  }

  // overflow
  let overflowButton = document.querySelector('.overflow-button');
  let overflowParagraph = document.querySelector('.overflow-paragraph');

  if (overflowButton) {
    overflowButton.addEventListener('click', () => {
      overflowParagraph.classList.toggle('overflow-y--scroll');
    });
  }

  // transition
  let transitionDivPadding = document.querySelector('.transition-div-padding');

  if (transitionDivPadding) {
    transitionDivPadding.addEventListener('click', () => {
      transitionDivPadding.classList.toggle('p-4');
    });
  }
});

// Copy & Paste Button

// Grab all code examples on a page
const codeExamples = document.querySelectorAll('.highlight');

// Copy Button component
const copyButton = () => {
  const btn = document.createElement('button');
  const classes = [
    'button',
    'background--dark',
    'background-hover--salmon',
    'text--white',
    'button--copy',
    'text--size-sm',
    'flex',
    'flex--align-center'
  ];
  btn.classList = classes.join(' ');
  btn.innerHTML = "<i class=\"pi-clipboard mr-1\"></i> Copy";
  return btn;
};

// Textarea component that will contain the text to copy
const codeText = (code) => {
  const textArea = document.createElement('textarea');
  textArea.classList.add('code-text');
  textArea.setAttribute('aria-hidden', true);
  textArea.setAttribute('tabindex', -1);
  textArea.innerHTML = code;
  return textArea;
};

// Check if there are any code examples on the page
if (codeExamples) {
  codeExamples.forEach((example) => {
    // Create a copy button and add it to the example
    example.appendChild(copyButton());
    // Store the button in a variable
    const copyBtn = example.querySelector('.button--copy');

    // Grab the inner text of the code example
    const code = example.querySelector('code').innerText;

    // Create a textarea and add in the code example text
    example.appendChild(codeText(code));

    // Store the textarea element in a variable
    const textToCopy = example.querySelector('.code-text');

    // When the copy button is clicked, select the text within the textarea and update the clipboard
    copyBtn.addEventListener('click', () => {
      textToCopy.select();
      document.execCommand('copy');
    });
  });

  // menu
  let siteMenu = document.querySelector('.site-menu');
  let siteMenuItems = document.querySelectorAll('.demo-menu-item');

  // prevents going to the top of the page when a user clicks on a menu item
  if (siteMenu) {
    siteMenuItems.forEach(Item => 
      Item.addEventListener('click', (event) => {
        event.preventDefault();
      })
    )
  }

  // 404 page
  let body = document.querySelector('body');
  let astronaut = document.querySelector('.astronaut');
  
  if (astronaut) {
    body.classList.add('overflow-hidden');
  }
}