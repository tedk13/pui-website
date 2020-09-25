window.addEventListener('DOMContentLoaded', (event) => {
  
  const toc = document.querySelector('#toc');
  const main = document.querySelector('main');

  if(toc) {
    const headings = main.querySelectorAll('h2');
    let tocList = document.createElement('ul');
    tocList.classList.add('pui-list')
  
    headings.forEach((heading) => {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute('href', '#'+heading.id);
      a.className = 'text-base text-light--hover toc-link';
      a.textContent = heading.innerText;
      li.append(a);
      tocList.append(li);
    });
  
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
});