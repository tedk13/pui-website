---
title: Buttons
date: 2018-07-20T12:59:15-04:00
---

Each button has a default button style. Color can be added to any button using a combination of background and text utilities.

Add icons to buttons using [platform icons](https://github.com/ritterim/platform-icons) icons: `<i class="pi-plus"></i>`

The default platform button. Usually paired visually with an icon. Can be the default size or large.

- .button
- .button .button--lg

<button class="button mb-2">Basic Button</button>
<button class="button mb-2">Add <i class="pi-plus"></i></button>
<button class="button button--lg">Add <i class="pi-plus"></i></button>

<div class="mt-3 mb-4">
{{< highlight html >}}
<button class="button mb-2">Basic Button</button>
<button class="button mb-2">Add <i class="pi-plus"></i></button>
<button class="button button--lg">Add <i class="pi-plus"></i></button>
{{< /highlight >}}
</div>


{{< heading heading="h2" id="secondary">}}
Secondary
{{< /heading >}}

The secondary platform button. Always a round button paired with a Platform icon. Can be the default size or large.

- .button
- .button .button--secondary
- .button .button--secondary .button--lg

<button class="button button--secondary"><i class="pi-download"></i></button>

<div class="mt-3 mb-4">
{{< highlight html >}}
<button class="button button--secondary"><i class="pi-download"></i></button>
{{< /highlight >}}
</div>


{{< heading heading="h2" id="secondary-text">}}
Secondary - Text
{{< /heading >}}

If you want to use the secondary button for the look and hover effect, but you need to include text, you can.
Include the class `has-text` on the secondary button. So the classes would be, `button button--secondary has-text`.
What this does is add `width: auto` and a little padding for the text.

If you want to display text only on hover, add a data attribute named `data-button-text`, this will insert the value of that attribute on hover.

You can use `has-text` in combination with `data-button-text="Some Text"` and you will get the same result. See the last button in the example below.

 <div class="button-group">
   <button class="button button--secondary has-text">Open <i class="pi-download"></i></button>
   <button class="button button--secondary" data-button-text="Download"><i class="pi-download"></i></button>
   <button class="button button--secondary loading" data-button-text="Download"><i class="pi-download"></i></button>
   <button class="button button--secondary has-text" data-button-text="Has Text"><i class="pi-download"></i></button>
 </div>

<div class="mt-3 mb-4">
{{< highlight html >}}
 <div class="button-group">
   <button class="button button--secondary has-text">Open <i class="pi-download"></i></button>
   <button class="button button--secondary" data-button-text="Download"><i class="pi-download"></i></button>
   <button class="button button--secondary loading" data-button-text="Download"><i class="pi-download"></i></button>
   <button class="button button--secondary has-text" data-button-text="Has Text"><i class="pi-download"></i></button>
 </div>
 {{< /highlight >}}

</div>


{{< heading heading="h2" id="post">}}
Post
{{< /heading >}}

Used exclsively in Post, or blog, content imported into the platform. e.g., CRM dashboard.

- .button .button--post
- .button .button--post .button--lg

<button class="button button--post mb-2">Post Button</button>
<button class="button button--post button--lg">Large Post Button</button>

<div class="mt-3 mb-4">
{{< highlight html >}}
<button class="button button--post mb-2">Post Button</button>
<button class="button button--post button--lg">Large Post Button</button>
{{< /highlight >}}
</div>


{{< heading heading="h2" id="group">}}
Group
{{< /heading >}}

Evenly space any group of buttons.

- .button--group

<div class="button-group">
  <a class="button button--secondary"><i class="pi-download"></i></a>
  <a class="button button--secondary"><i class="pi-lock"></i></a>
  <a class="button button--secondary"><i class="pi-save"></i></a>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="button-group">
  <a class="button button--secondary"><i class="pi-download"></i></a>
  <a class="button button--secondary"><i class="pi-lock"></i></a>
  <a class="button button--secondary"><i class="pi-save"></i></a>
</div>
{{< /highlight >}}
</div>


{{< heading heading="h2" id="loading">}}
Loading
{{< /heading >}}

Buttons with a loading icon. Example for form submissions.

<div class="button-group">
  <button class="button loading mb-2" aria-label="Loading...">
    Submit
    <span class="sr-only">Loading...</span>
  </button>
  <button class="button button--lg loading mb-2" aria-label="Loading...">
    Submit
    <span class="sr-only">Loading...</span>
  </button>
  <button class="button button--secondary loading mb-2" aria-label="Download" aria-label="Loading...">
    <i class="pi-download" aria-hidden="hidden"></i>
    <span class="sr-only">Loading...</span>
  </button>
  <button class="button button--post loading mb-2" aria-label="Loading...">
    Submit
    <span class="sr-only">Loading...</span>
  </button>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="button-group">
  <button class="button loading mb-2">
    Submit
    <span class="sr-only">Loading...</span>
  </button>
  <button class="button button--lg loading mb-2">
    Submit
    <span class="sr-only">Loading...</span>
  </button>
  <button class="button button--secondary loading mb-2">
    <i class="pi-download" aria-hidden="hidden"></i>
    <span class="sr-only">Loading...</span>
  </button>
  <button class="button button--post loading mb-2">
    Submit
    <span class="sr-only">Loading...</span>
  </button>
</div>
{{< /highlight >}}
</div>

{{< heading heading="h2" id="accessibility">}}
Accessibility
{{< /heading >}}

For our links that should look like buttons, and contain an icon, we need to add specific
`aria-roles` for accessibility.
These are links that look like buttons but do not have the same html.

Another accessibility consideration is to add `aria-label`s appropriately. In the example
below, we have a button only containing a font icon. To make this button accessible for
screen readers, you should add an `aria-label` and apply `aria-hidden="true"` to the icon.

Learn more about <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute" target="_blank">aria-label</a>.

<a class="button button--secondary" role="button" aria-label="Download">
<i class="pi-download" aria-hidden="hidden"></i>
</a>

<div class="mt-3 mb-4">
{{< highlight html >}}
<a class="button button--secondary" role="button" aria-label="Download">
  <i class="pi-download" aria-hidden="hidden"></i>
</a>
{{< /highlight >}}
</div>


{{< heading heading="h2" id="active">}}
Active
{{< /heading >}}

By adding the class `active` to a button, the button's hover effect is mimicked.

<button class="button mb-2">Add <i class="pi-plus" aria-hidden="hidden"></i></button>
<button class="button button--lg active">Add <i class="pi-plus" aria-hidden="hidden"></i></button>
<div class="button-group mt-4">
  <a class="button button--secondary" role="button" aria-label="Download">
    <i class="pi-download" aria-hidden="hidden"></i>
  </a>
  <a class="button button--secondary active" role="button" aria-label="locked">
    <i class="pi-lock" aria-hidden="hidden"></i>
  </a>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<button class="button mb-2">Add <i class="pi-plus"></i></button>
<button class="button button--lg active">Add <i class="pi-plus"></i></button>
<div class="button-group mt-4">
  <a class="button button--secondary" role="button">
    <i class="pi-download"></i>
  </a>
  <a class="button button--secondary active">
    <i class="pi-lock"></i>
  </a>
</div>
{{< /highlight >}}
</div>


{{< heading heading="h2" id="disabled">}}
Disabled
{{< /heading >}}

To make a button look inactive, add the disabled attribute.

`<a>` elements do not support the disabled attribute. In order to make an `<a>` that is a button look disabled, add the `.disabled` class.
Also, note that adding specific aria roles and attributes to your button will help with screen readers and other assitive technology.

<div class="button-group">
  <button class="button" disabled>
    Download
    <i class="pi-download" aria-hidden="hidden"></i>
  </button>
  <button class="button" disabled>
    Lock
    <i class="pi-lock" aria-hidden="hidden"></i>
  </button>
  <button class="button button--post" disabled>
    Submit
  </button>
</div>
<div class="button-group mt-4">
  <a href="#" class="button disabled" disabled role="button" aria-disabled="true">
    Status
  </a>
  <a href="#" class="button disabled" disabled role="button" aria-disabled="true">
    Account
  </a>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="button-group">
  <button class="button" disabled>
    Download
    <i class="pi-download"></i>
  </button>
  <button class="button" disabled>
    Lock
    <i class="pi-lock"></i>
  </button>
  <button class="button button--post" disabled>
    Submit
  </button>
</div>
<div class="button-group mt-4">
  <a href="#" class="button disabled" disabled>
    Status
  </a>
  <a href="#" class="button disabled" disabled>
    Account
  </a>
</div>
{{< /highlight >}}
</div>

Although the links look disabled and have the css property of `pointer-events: none`, users can still navigate to the links and use them via keyboard navigation.
To ensure that your users could not interact with disabled links, it's recommended to use JavaScript to disable functionality further.


{{< heading heading="h2" id="colors">}}
Colors
{{< /heading >}}

We loop through a map to give you these color variations. The white button is not in this map however. A white ghost button, on hover, will resemble
our standard `.button` look. You can get really fancy if you want by adding a specific text color on hover with any of these buttons. See the second
ghost white button example below.

<div class="button-group mb-4 p-2">
  <button class="button button--navy">Navy</button>
  <button class="button button--skyblue">Skyblue</button>
  <button class="button button--lightblue">Lightblue</button>
  <button class="button button--med-blue">Med-blue</button>
  <button class="button button--beige">Beige</button>
  <button class="button button--peach">Peach</button>
  <button class="button button--salmon">Salmon</button>
  <button class="button button--brown">Brown</button>
  <button class="button button--orange">Orange</button>
</div>
<div class="button-group mb-4 p-2 background-lighter">
  <button class="button button--ghost button--navy">Navy</button>
  <button class="button button--ghost button--skyblue">Skyblue</button>
  <button class="button button--ghost button--lightblue">Lightblue</button>
  <button class="button button--ghost button--med-blue">Med-blue</button>
  <button class="button button--ghost button--beige">Beige</button>
  <button class="button button--ghost button--peach">Peach</button>
  <button class="button button--ghost button--salmon">Salmon</button>
  <button class="button button--ghost button--brown">Brown</button>
  <button class="button button--ghost button--orange">Orange</button>
</div>
<div class="button-group p-2 background-med-blue">
  <button class="button button--white button--ghost">Button</button>
  <button class="button button--white button--ghost text-med-blue--hover">Button</button>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="button-group mb-4 p-2">
  <button class="button button--navy">Navy</button>
  <button class="button button--skyblue">Skyblue</button>
  <button class="button button--lightblue">Lightblue</button>
  <button class="button button--med-blue">Med-blue</button>
  <button class="button button--beige">Beige</button>
  <button class="button button--peach">Peach</button>
  <button class="button button--salmon">Salmon</button>
  <button class="button button--brown">Brown</button>
  <button class="button button--orange">Orange</button>
</div>
<div class="button-group mb-4 p-2 background-lighter">
  <button class="button button--ghost button--navy">Navy</button>
  <button class="button button--ghost button--skyblue">Skyblue</button>
  <button class="button button--ghost button--lightblue">Lightblue</button>
  <button class="button button--ghost button--med-blue">Med-blue</button>
  <button class="button button--ghost button--beige">Beige</button>
  <button class="button button--ghost button--peach">Peach</button>
  <button class="button button--ghost button--salmon">Salmon</button>
  <button class="button button--ghost button--brown">Brown</button>
  <button class="button button--ghost button--orange">Orange</button>
</div>
<div class="button-group p-2 background-med-blue">
  <button class="button button--white button--ghost">Button</button>
  <button class="button button--white button--ghost text-med-blue--hover">Button</button>
</div>
{{< /highlight >}}
</div>
