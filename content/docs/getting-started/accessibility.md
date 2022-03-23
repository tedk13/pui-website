---
title: Accessibility
date: 2018-07-20T12:59:15-04:00
weight: 4
---

Accessibility was on our minds while building Platform UI. You can use this framework to create a number of different components and layouts for your site that is both visually appealing and functional. Most of our components are accessible right out of the box, but given the flexibility of the framework, it can be easy to ignore accessibility and build a site that may not meet the accessibility standards of <a href="https://www.w3.org/TR/WCAG20/" rel="external" target="_blank">WCAG 2.0</a>.
 
Although we built Platform UI with accessibility in mind, it is important that you not rely on the framework entirely. The overall accessibility of your site will depend largely on your markup, extra styling, and or scripts added.
 
You can apply Platform UI’s styles to a variety of markup structures, although it is best practice to use semantic markup as much as possible. Semantic HTML goes a long way in helping with the accessibility of your site. If you decide not to use semantic elements in certain situations, be sure to include the proper WAI-ARIA roles and attributes to allow for better accessibility.
 
## Components
Our interactive components come with keyboard functionality. You can trigger a dropdown menu within the site menu, you can toggle an accordion, and you can open and close our modals.
 
## Forms
Standard radios and checkboxes come with their own focus states. The specific radio and checkboxes we created, using our own icon font set, look different than the standard, and does not come with the same focus states. If you decide to use a different looking radio or checkbox from the user agent standard, you may be missing out on a completely accessible form.
 
## Colors
Most of the colors we have set in Platform UI meet the contrast ratio of 4.5:1, defined by WCAG 2.0. We’ve only achieved WCAG AA for many (with a nod toward our goal of AAA in future releases). Some may not meet the ratio due to specific backgrounds. Be sure to test your colors as you are developing your site. Be sure to test your colors if you are developing your own custom theme using the config option.
 
## Accessible Content
Content that should be made accessible to screen readers, but is not necessary for users not using a screen reader, can be hidden using the `.sr-only` class. An example of this could be for an action, like a button, that only contains a font-icon.
 
{{< highlight html >}}
<button class=”button”>
 <i class=”pi-download” aria-hidden=”true”>
 <span class=”sr-only”>Download a copy of your form</span>
</button>
{{< /highlight >}}
 
On the flip side, sometimes it can be necessary to hide content from a screen reader. Take the button example above. Notice the `aria-hidden=”true”`. In this case, we’re hiding decorative content from a screen reader. You can use <a href="https://www.w3.org/WAI/standards-guidelines/aria/" rel="external" target="_blank">WAI-ARIA</a> roles and attributes to improve the experience of a screen reader.
 
 
## Further Reading
- <a href="https://a11yproject.com/" rel="external" target="_blank">A11Y Project</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility" rel="external" target="_blank">MDN Accessibility</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA" rel="external" target="_blank">MDN Aria</a>
- <a href="https://webaim.org/resources/contrastchecker/" rel="external" target="_blank">WebAIM Color Checker</a>