---
title: Borders
skellyCSS: true
---
You can add specific borders to elements by using the following classes:

<table class="table mb-4">
  <thead>
    <tr>
      <th>Classes</th>
      <th>CSS Attribute</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Classes"><code>border</code></td>
      <td data-label="CSS Attribute"><code>border: 1px solid;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>no-border</code></td>
      <td data-label="CSS Attribute"><code>border: none;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>border-x</code></td>
      <td data-label="CSS Attribute"><code>border-left: 1px solid; border-right: 1px solid;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>border-y</code></td>
      <td data-label="CSS Attribute"><code>border-top: 1px solid; border-bottom: 1px solid;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>border-t</code></td>
      <td data-label="CSS Attribute"><code>border-top: 1px solid;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>border-b</code></td>
      <td data-label="CSS Attribute"><code>border-bottom: 1px solid;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>border-r</code></td>
      <td data-label="CSS Attribute"><code>border-right: 1px solid;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>border-l</code></td>
      <td data-label="CSS Attribute"><code>border-left: 1px solid;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>border--width-{i}</code></td>
      <td data-label="CSS Attribute"><code>border-width: {i}px;</code></td>
    </tr>
    <tr>
      <td data-label="Classes"><code>border--color-{color}</code></td>
      <td data-label="CSS Attribute"><code>border-color: {color};</code></td>
    </tr>
  </tbody>
</table>

## Color

The `border--color-{color}` class uses the [brand colors](/section-color.html#kssref-color-brandcolors) map.

<div class="block-container">
  <div class="block laptop-up-3">
    <div class="card">
      <h4 class="border-b border--color-navy pb-2 mb-2">Card Header</h4>
      <div class="card__content">
        <p class="skeleton" data-lines="7" data-animation="true"></p>
      </div>
    </div>
  </div>
</div>

<div class="mt-4 mb-4">
{{< highlight html >}}
<div class="block-container">
  <div class="block laptop-up-3">
    <div class="card">
      <h4 class="border-b border--color-navy pb-2 mb-2">Card Header</h4>
      <div class="card__content">
        <!-- Card content goes here! -->
      </div>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>


## Right Border
<div class="block-container">
  <div class="block laptop-up-3">
    <div class="card">
      <h4 class="pb-2 mb-2">Card Header</h4>
      <div class="card__content block-container blocks px-3">
        <div class="block block-6 border-r border--color-med-blue">
          <p class="skeleton" data-lines="7" data-animation="true"></p>
        </div>
        <div class="block block-6">
          <p class="skeleton" data-lines="7" data-animation="true"></p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mt-4 mb-4">
{{< highlight html >}}
<div class="block-container">
  <div class="block laptop-up-3">
    <div class="card">
      <h4 class="pb-2 mb-2">Card Header</h4>
      <div class="card__content block-container blocks px-3">
        <div class="block block-6 border-r border--color-med-blue">
          <!-- Card content goes here! -->
        </div>
        <div class="block block-6">
          <!-- Card content goes here! -->
        </div>
      </div>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>


## Vertical Border
<div class="block-container">
  <div class="block laptop-up-3">
    <div class="card">
      <h4 class="border-y border--color-orange py-2 mb-2">Card Header</h4>
      <div class="card__content">
        <p class="skeleton" data-lines="7" data-animation="true"></p>
      </div>
    </div>
  </div>
</div>

<div class="mt-4 mb-4">
{{< highlight html >}}
<div class="block-container">
  <div class="block laptop-up-3">
    <div class="card">
      <h4 class="border-y border--color-orange py-2 mb-2">Card Header</h4>
      <div class="card__content">
        <!-- Card content goes here! -->
      </div>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>


<section class="p-0 my-4">
  <h3 class="text--light text--size-md mb-3">Visualizer</h3>
  <div class="linear-gradient inverted px-4 py-3 block-container" 
      data-callout-header="tables tip" 
      data-callout-radius="0 3rem 0 3rem"
      data-gradient-direction="30deg"
      data-gradient-start="midnightblue 20%, purple 40%"
      data-gradient-stop="indigo"
      data-gradient-fallback="indigo">
    <i class="pi-rocket mr-1"></i>
    <strong class="mr-1">Check this out!</strong> 
    See how to use the border utilities!
  </div>
  <div class="tabs my-4">
    <input type="radio" id="flex-wrap" name="tabs" checked>
    <label for="flex-wrap" class="tab">
      Direction
    </label>
    <div class="tab-panel">
      <div class="visualizer block-container p-3 py-4 tablet-up-2 my-4">
        <div class="actions block">
          <ul class="list">
            <li>
              <button class="button" data-example-elements="border">
                <pre>.border</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="no-border">
                <pre>.no-border</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border-t">
                <pre>.border-t</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border-r">
                <pre>.border-r</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border-b">
                <pre>.border-b</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border-l">
                <pre>.border-l</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border-x">
                <pre>.border-x</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border-y">
                <pre>.border-y</pre>
              </button>
            </li>
            <li>
              <button class="button button--salmon text--white" data-reset="true">
                Reset
              </button>
            </li>
          </ul>
        </div>
        <div class="results rounded-2 block background--dark p-3" data-default-class="block-container flex--center-content">
          <div class="block block-9 h-100 background--white p-3 transition border--color-salmon border--width-5">
            <span class="text--size-md">Example Card</span>
            <p class="skeleton" data-lines="3"></p>
          </div>
        </div>
      </div>
    </div>
    <input type="radio" id="flex-grow" name="tabs">
    <label for="flex-grow" class="tab">
      Width
    </label>
    <div class="tab-panel">
      <div class="visualizer block-container p-3 py-4 tablet-up-2 my-4">
        <div class="actions block">
          <ul class="list">
            <li>
              <button class="button" data-example-elements="border--width-1">
                <pre>.border--width-1</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--width-2">
                <pre>.border--width-2</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--width-3">
                <pre>.border--width-3</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--width-4">
                <pre>.border--width-4</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--width-5">
                <pre>.border--width-5</pre>
              </button>
            </li>
            <li>
              <button class="button button--salmon text--white" data-reset="true">
                Reset
              </button>
            </li>
          </ul>
        </div>
        <div class="results rounded-2 block background--dark p-3" data-default-class="block-container flex--center-content">
          <div class="block block-9 h-100 background--white p-3 transition border border--color-salmon">
            <span class="text--size-md">Example Card</span>
            <p class="skeleton" data-lines="3"></p>
          </div>
        </div>
      </div>
    </div>
    <input type="radio" id="flex-center" name="tabs">
    <label for="flex-center" class="tab">
      Color
    </label>
    <div class="tab-panel">
      <div class="visualizer block-container p-3 py-4 tablet-up-2 my-4">
        <div class="actions block">
          <ul class="list">
            <li>
              <button class="button" data-example-elements="border--color-white">
                <pre>.border--color-white</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--color-lighter">
                <pre>.border--color-lighter</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--color-light-mid">
                <pre>.border--color-light-mid</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--color-light">
                <pre>.border--color-light</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--color-base">
                <pre>.border--color-base</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--color-dark">
                <pre>.border--color-dark</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--color-black">
                <pre>.border--color-black</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--color-navy">
                <pre>.border--color-navy</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--color-skyblue">
                <pre>.border--color-skyblue</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--color-lightblue">
                <pre>.border--color-lightblue</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--color-med-blue">
                <pre>.border--color-med-blue</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--color-beige">
                <pre>.border--color-beige</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--color-peach">
                <pre>.border--color-peach</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--color-salmon">
                <pre>.border--color-salmon</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--color-brown">
                <pre>.border--color-brown</pre>
              </button>
            </li>
            <li>
              <button class="button" data-example-elements="border--color-orange">
                <pre>.border--color-orange</pre>
              </button>
            </li>
            <li>
              <button class="button button--salmon text--white" data-reset="true">
                Reset
              </button>
            </li>
          </ul>
        </div>
        <div class="results rounded-2 block background--dark p-3" data-default-class="block-container flex--center-content">
          <div class="block block-9 h-100 card transition border--width-5">
            <span class="text--size-md">Example Card</span>
            <p class="skeleton" data-lines="3"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>