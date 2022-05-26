---
title: Borders
skellyCSS: true
---

{{% anchor name="Border" %}}

When set, all borders default to a `1px` width which can be offset using `border--width-{ i }`.

{{< classes result="true" >}}
{{< classes-row class="border" result="Set border." >}}
{{< classes-row class="no-border" result="Remove border." >}}
{{< classes-row class="border-x" result="Set x-axis borders (left and right)." >}}
{{< classes-row class="border-y" result="Set y-axis borders (top and bottom)." >}}
{{< classes-row class="border-t" result="Set top border." >}}
{{< classes-row class="border-b" result="Set bottom border." >}}
{{< classes-row class="border-r" result="Set right border." >}}
{{< classes-row class="border-l" result="Set left border." >}}
{{< classes-row class="border--width-{ 1-5 }" result="Set custom border width." >}}
{{< classes-row class="border--color-{ color }" result="Set border color." >}}
{{< /classes >}}

{{< visualizer header="See how to use the border utilities!" >}}
<div class="block-12 tabs my-4">
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
          <p class="skeleton" data-lines="3" role="presentation"></p>
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
          <p class="skeleton" data-lines="3" role="presentation"></p>
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
          <p class="skeleton" data-lines="3" role="presentation"></p>
        </div>
      </div>
    </div>
  </div>
</div>
{{< /visualizer >}}