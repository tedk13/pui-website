window.addEventListener('DOMContentLoaded', (event) => {
  
  const toc = document.querySelector('#toc');
  const main = document.querySelector('main');

  if(toc) {
    const headings = main.querySelectorAll('h2,h3');
    let tocList = document.createElement('ul');
    tocList.classList.add('pui-list')
  
    headings.forEach((heading) => {
      let li = document.createElement('li');
      let a = document.createElement('a');
      if(heading.id) {
        a.setAttribute('href', '#'+heading.id);
        a.className = 'text-base text-light--hover toc-link';
        a.textContent = heading.innerText;
        li.append(a);
        tocList.append(li);
      }
    });

    if(headings.length == 0) {
      document.querySelector('#sidebar-right').remove();
    }
  
    toc.append(tocList);

    const tocLink = document.querySelectorAll('.toc-link');

    if(tocLink) {
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

  if(table) {
    table.forEach((table) => {
      table.className = 'pui-table mb-4';
    });
  };

  // accordion
  let accordionHeader = document.querySelectorAll('.pui-accordion__header');

  if (accordionHeader) {
    accordionHeader.forEach(function(el) {
      el.addEventListener('click', function(e) {
        let accordion = el.parentElement;
        e.preventDefault();
        accordion.classList.toggle('active');
      });
      el.addEventListener('keydown', function(e) {
        let accordion = el.parentElement;
        if (e.keyCode === 13) {
          e.preventDefault();
          accordion.classList.toggle('active');
        }
      });
    });
  }
});