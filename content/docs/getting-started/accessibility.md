---
title: Accessibility
description: Information on building accessibly with Platform UI.
weight: 4
---

Here at [Ritter Insurance Marketing](https://ritterim.com), we build accessible, scalable, websites and apps. We follow <a href="https://www.w3.org/TR/WCAG21/" rel="external noopener" target="_blank">WCAG 2.1</a> guidelines for all of our projects, with a close eye on the future of accessibility. 

Leveraging WAI-ARIA roles, labeling, and descriptions, along with keyboard functionality and contrast where possible. Many of these decisions fall on the person or team implementing Platform UI into their project. 

We made a point to include the now familiar <a href="https://webaim.org/techniques/css/invisiblecontent/" rel="external noopener">screen reader only</a> class, `.sr-only` for content that offers not additional information, and can be confusing, to a screen reader. Elements or actions that would benefit from additional text  meant to offer context to a screen reader.

There are also instances where hiding content from a screen reader can eliminate confusion where a choice is for design or aesthetic purposes. This is where ARIA labeling comes to the rescue. 

In the snippet below we have a button with an icon only - concise and, depending on the icon, this is may be visually understood by a sighted user.  

{{< highlight html >}}
<button class=”button”>
   <i class=”pi-download”>
</button>
{{< /highlight >}}

You can use <a href="https://www.w3.org/WAI/standards-guidelines/aria/" rel="external noopener" target="_blank">WAI-ARIA</a> roles and attributes along with the `.sr-only` class to improve the experience for visually or cognitavely impared users.

{{< highlight html >}}
<button class=”button”>
   <i class=”pi-download” aria-hidden=”true”>
   <span class=”sr-only”>Download a copy of your form</span>
</button>
{{< /highlight >}} 

## For more on accessibility
- <a href="https://a11yproject.com/" rel="external noopener" target="_blank">A11Y Project</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility" rel="external noopener" target="_blank">MDN Accessibility</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA" rel="external noopener" target="_blank">MDN Aria</a>
- <a href="https://webaim.org/resources/contrastchecker/" rel="external noopener" target="_blank">WebAIM Color Checker</a>
