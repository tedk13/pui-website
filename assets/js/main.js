window.addEventListener('DOMContentLoaded', (event) => {
  const toc = document.querySelector('#on-this-page');
  const main = document.querySelector('main');

  if (toc) {
    const headings = main.querySelectorAll('h2,h3');
    let tocList = document.createElement('ul');
    tocList.classList.add('pui-list');

    headings.forEach((heading) => {
      let li = document.createElement('li');
      if (heading.localName === 'h3') {
        li.className = 'pl-3';
      }
      let a = document.createElement('a');
      if (heading.id) {
        heading.classList.add('page-anchor-target');
        a.setAttribute('href', '#' + heading.id);
        a.className = 'text-base text-light--hover toc-link';
        a.textContent = heading.innerText;
        li.append(a);
        tocList.append(li);
      }
    });

    if (tocList.childNodes.length == 0) {
      document.querySelector('#sidebar-right').remove();
    }

    toc.append(tocList);

    const tocLink = document.querySelectorAll('.toc-link');

    if (tocLink) {
      tocLink.forEach((link) => {
        link.addEventListener('click', () => {
          tocLink.forEach((elm) => {
            elm.classList.remove('text--bold');
          });
          link.classList.add('text--bold');
        });
      });
    }
  }

  const table = main.querySelectorAll('table');

  if (table) {
    table.forEach((table) => {
      table.className = 'pui-table mb-4';
    });
  }

  // accordion
  let accordionHeader = document.querySelectorAll('.pui-accordion__header');

  if (accordionHeader) {
    accordionHeader.forEach(function (el) {
      el.addEventListener('click', function (e) {
        let accordion = el.parentElement;
        e.preventDefault();
        accordion.classList.toggle('active');
      });

      el.addEventListener('keydown', function (e) {
        let accordion = el.parentElement;
        if (e.keyCode === 13) {
          e.preventDefault();
          accordion.classList.toggle('active');
        }
      });
    });
  }

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
        loaderButton.classList.remove('loading')
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
  let rotatePositions = [{
                          label: '45 degrees',
                          class: 'rotate-45'
                        },
                        {
                          label: '90 degrees',
                          class: 'rotate-90'
                        },
                        {
                          label: '180 degrees',
                          class: 'rotate-180'
                        },
                        {
                          label: 'Normal',
                          class: ''
                        }];
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
  let transitionCard = document.querySelector('.transition-card');
  let transitionDivColor = document.querySelector('.transition-div-color');
  let transitionDivPadding = document.querySelector('.transition-div-padding');

  if (transitionCard) {
    transitionCard.addEventListener('click', () => {
      transitionCard.classList.toggle('border--color-orange');
    });

    transitionDivColor.addEventListener('mouseenter', () => {
      transitionDivColor.classList.add('background-med-blue');
    });

    transitionDivColor.addEventListener('mouseleave', () => {
      transitionDivColor.classList.remove('background-med-blue')
    });

    transitionDivPadding.addEventListener('click', () => {
      transitionDivPadding.classList.toggle('p-4')
    });
  }
});

