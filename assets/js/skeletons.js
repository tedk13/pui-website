// Skeleton Paragraph Utility
// Grab all skeleton paragraphs that appear in the page
const skeletonParagraphs = document.querySelectorAll(
  '.skeleton__paragraph-container'
);

// if there are any, append a p tag to them and apply the skeleton__paragraph tag
if (skeletonParagraphs) {
  skeletonParagraphs.forEach((p) => {
    let paragraph = document.createElement('p');
    paragraph.classList.add('skeleton__paragraph');

    // Grab the number of lines from the data-lines attribute
    let lineCount = parseInt(p.getAttribute('data-lines'));

    // If no data-lines attribute applied, defaults to 4
    if (!lineCount) {
      lineCount = 4;
    }

    // Loop to append a span tag with the skeleton__paragraph-line class on every iteration until i = lineCount
    for (i = 0; i < lineCount; i++) {
      const line = document.createElement('span');
      line.classList.add('skeleton__paragraph-line');
      paragraph.appendChild(line);
    }

    // Finally append the newly built paragraph tag to the skeleton__paragraph-container
    p.appendChild(paragraph);
  });
}
