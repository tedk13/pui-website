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
        heading.classList.add('page-anchor-target');
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


// Skeleton - Paragraph Utility
// Grab all skeleton paragraphs that appear in the page
const skeletonParagraphs = document.querySelectorAll(
  ".skeleton__paragraph-container"
);

// if there are any, append a p tag to them and apply the skeleton__paragraph tag
if (skeletonParagraphs) {
  skeletonParagraphs.forEach((p) => {
    let paragraph = document.createElement("p");
    paragraph.classList.add("skeleton__paragraph");

    // Grab the number of lines from the data-lines attribute
    let lineCount = parseInt(p.getAttribute("data-lines"));

    // If no data-lines attribute applied, defaults to 4
    if (!lineCount) {
      lineCount = 4;
    }

    // Loop to append a span tag with the skeleton__paragraph-line class on every iteration until i = lineCount
    for (i = 0; i < lineCount; i++) {
      const line = document.createElement("span");
      line.classList.add("skeleton__paragraph-line");
      paragraph.appendChild(line);
    }

    // Finally append the newly built paragraph tag to the skeleton__paragraph-container
    p.appendChild(paragraph);
  });
}
