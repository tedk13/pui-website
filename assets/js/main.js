window.addEventListener('DOMContentLoaded', (event) => {
  const toc = document.querySelector('#toc');
  const main = document.querySelector('main');

  if (toc) {
    const headings = main.querySelectorAll('h2,h3');
    let tocList = document.createElement('ul');
    tocList.classList.add('pui-list');

    headings.forEach((heading) => {
      let li = document.createElement('li');
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

    if (headings.length == 0) {
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
  let rotatePositions = [['rotate-45', '45 degrees'], ['rotate-90', '90 degrees'], ['rotate-180', '180 degrees']];
  let rotateIndex = 0;

  if (rotateButton) {
    rotateButton.addEventListener('click', () => {
      if (rotateIndex < 3) {
        if (rotateIndex > 0) {
          rotateButton.classList.remove(rotatePositions[rotateIndex - 1][0]);
        }
        rotateButton.classList.add(rotatePositions[rotateIndex][0]);
        rotateButton.innerHTML = rotatePositions[rotateIndex][1];
        rotateIndex++;
      } else {
        rotateButton.classList.remove('rotate-180');
        rotateButton.innerHTML = "Normal";
        rotateIndex = 0;
      }
    });
  }
});

