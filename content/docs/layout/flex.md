---
title: Flex
description: Documentation for Platform UI's flexbox components and utilities.
---
Building layouts with flexbox is super simple with Platform UI using our flex utility classes.
## Display
Set an element's display property to flex or inline-flex.

<table class="table mb-4">
  <thead>
    <tr>
      <th>Class Name</th>
      <th>CSS Attribute</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Class Name"><code>flex</code></td>
      <td data-label="CSS Attribute"><code>display: flex;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex-inline</code></td>
      <td data-label="CSS Attribute"><code>display: inline-flex</code></td>
    </tr>
  </tbody>
</table>

## Align
Sets the flex container to align all contained elements to either the start, center, end, or baseline points of the container.

<div class="linear-gradient inverted px-4 py-3 mt-4 block-container" 
      data-callout-header="tables tip" 
      data-callout-radius="0 3rem 0 3rem"
      data-gradient-direction="30deg"
      data-gradient-start="midnightblue 20%, purple 40%"
      data-gradient-stop="indigo"
      data-gradient-fallback="indigo">
  <i class="pi-rocket mr-1"></i>
  <strong class="mr-1">Try it!</strong> 
  Click the buttons below to toggle the flex align utility classes!
</div>
<div class="visualizer block-container p-3 py-4 border border--color-lighter border--width-5 tablet-up-2 mb-4">
  <div class="actions block">
    <ul class="list">
      <li>
        <button class="button" data-example-container="flex--align-start">
          <pre>.flex--align-start</pre>
        </button>
      </li>
      <li>
        <button class="button" data-example-container="flex--align-center">
          <pre>.flex--align-center</pre>
        </button>
      </li>
      <li>
        <button class="button" data-example-container="flex--align-end">
          <pre>.flex--align-end</pre>
        </button>
      </li>
      <li>
        <button class="button" data-example-container="flex--align-baseline">
          <pre>.flex--align-baseline</pre>
        </button>
      </li>
      <li>
        <button class="button button--salmon text--white" data-reset="true">
          Reset
        </button>
      </li>
    </ul>
  </div>
  <div class="results rounded-2 block background--dark p-3" data-setup='{"classes":["flex vh-25"],"children":[{"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]},{"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}]}'>
  </div>
</div>

## Align-self
Sets individual elements to align to either the start, center, end, or baseline points of a flex container.

<div class="linear-gradient inverted px-4 py-3 mt-4 block-container" 
      data-callout-header="tables tip" 
      data-callout-radius="0 3rem 0 3rem"
      data-gradient-direction="30deg"
      data-gradient-start="midnightblue 20%, purple 40%"
      data-gradient-stop="indigo"
      data-gradient-fallback="indigo">
  <i class="pi-rocket mr-1"></i>
  <strong class="mr-1">Try it!</strong> 
  Click the buttons below to toggle the flex align-self utility classes!
</div>

<div class="visualizer block-container p-3 py-4 border border--color-lighter border--width-5 tablet-up-2 mb-4">
  <div class="actions block">
    <ul class="list">
      <li>
        <button class="button" data-example-elements="flex--align-self-start">
          <pre>.flex--align-self-start</pre>
        </button>
      </li>
      <li>
        <button class="button" data-example-elements="flex--align-self-center">
          <pre>.flex--align-self-center</pre>
        </button>
      </li>
      <li>
        <button class="button" data-example-elements="flex--align-self-end">
          <pre>.flex--align-self-end</pre>
        </button>
      </li>
      <li>
        <button class="button" data-example-elements="flex--align-self-baseline">
          <pre>.flex--align-self-baseline</pre>
        </button>
      </li>
      <li>
        <button class="button button--salmon text--white" data-reset="true">
          Reset
        </button>
      </li>
    </ul>
  </div>
  <div class="results rounded-2 block background--dark p-3" data-setup='{"classes":["flex vh-25"],"children":[{"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]},{"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}]}'>
  </div>
</div>

## Justify
Sets individual elements to align to either the start, center, end, or baseline points of a flex container.

<div class="linear-gradient inverted px-4 py-3 mt-4 block-container" 
      data-callout-header="tables tip" 
      data-callout-radius="0 3rem 0 3rem"
      data-gradient-direction="30deg"
      data-gradient-start="midnightblue 20%, purple 40%"
      data-gradient-stop="indigo"
      data-gradient-fallback="indigo">
  <i class="pi-rocket mr-1"></i>
  <strong class="mr-1">Try it!</strong> 
  Click the buttons below to toggle the flex justify utility classes!
</div>

<div class="visualizer block-container p-3 py-4 border border--color-lighter border--width-5 tablet-up-2 mb-4">
  <div class="actions block">
    <ul class="list">
      <li>
        <button class="button" data-example-container="flex--justify-start">
          <pre>.flex--justify-start</pre>
        </button>
      </li>
      <li>
        <button class="button" data-example-container="flex--justify-center">
          <pre>.flex--justify-center</pre>
        </button>
      </li>
      <li>
        <button class="button" data-example-container="flex--justify-end">
          <pre>.flex--justify-end</pre>
        </button>
      </li>
      <li>
        <button class="button" data-example-container="flex--justify-around">
          <pre>.flex--justify-around</pre>
        </button>
      </li>
      <li>
        <button class="button" data-example-container="flex--justify-between">
          <pre>.flex--justify-between</pre>
        </button>
      </li>
      <li>
        <button class="button button--salmon text--white" data-reset="true">
          Reset
        </button>
      </li>
    </ul>
  </div>
  <div class="results rounded-2 block background--dark p-3" data-setup='{"classes":["flex vh-25"],"children":[{"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]},{"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}]}'>
  </div>
</div>

## Direction
Utility classes to handle the direction of elements within a flex container.

<div class="linear-gradient inverted px-4 py-3 mt-4 block-container" 
      data-callout-header="tables tip" 
      data-callout-radius="0 3rem 0 3rem"
      data-gradient-direction="30deg"
      data-gradient-start="midnightblue 20%, purple 40%"
      data-gradient-stop="indigo"
      data-gradient-fallback="indigo">
    <i class="pi-rocket mr-1"></i>
    <strong class="mr-1">Try it!</strong> 
    Click the buttons below to toggle the direction utility classes!
</div>
<div class="visualizer block-container p-3 py-4 border border--color-lighter border--width-5 tablet-up-2 mb-4">
  <div class="actions block">
    <ul class="list">
      <li>
        <button class="button" data-example-container="flex--row-reverse">
          <pre>.flex--row-reverse</pre>
        </button>
      </li>
      <li>
        <button class="button" data-example-container="flex--column">
          <pre>.flex--flex-column</pre>
        </button>
      </li>
      <li>
        <button class="button" data-example-container="flex--column-reverse">
          <pre>.flex--column-reverse</pre>
        </button>
      </li>
      <li>
        <button class="button button--salmon text--white" data-reset="true">
          Reset
        </button>
      </li>
    </ul>
  </div>
  <div class="results rounded-2 block background--dark p-3" data-setup='{"classes":["flex vh-25"],"children":[{"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]},{"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}]}'>
  </div>
</div>

## Content
Utility classes to handle wrapping, spacing, and centering of content within a flex container.

<div class="linear-gradient inverted px-4 py-3 mt-4 block-container" 
      data-callout-header="tables tip" 
      data-callout-radius="0 3rem 0 3rem"
      data-gradient-direction="30deg"
      data-gradient-start="midnightblue 20%, purple 40%"
      data-gradient-stop="indigo"
      data-gradient-fallback="indigo">
    <i class="pi-rocket mr-1"></i>
    <strong class="mr-1">Try it!</strong> 
    Click the buttons below to toggle the content utility classes!
</div>


<div class="tabs my-4">
  <input type="radio" id="flex-wrap" name="tabs" checked>
  <label for="flex-wrap" class="tab">
    Wrap
  </label>
  <div class="tab-panel">
    <div class="visualizer block-container p-3 py-4 tablet-up-2 my-4">
      <div class="actions block">
        <ul class="list">
          <li>
            <button class="button" data-example-container="flex--nowrap">
              <pre>.flex--nowrap</pre>
            </button>
          </li>
          <li>
            <button class="button" data-example-container="flex--wrap">
              <pre>.flex--wrap</pre>
            </button>
          </li>
          <li>
            <button class="button button--salmon text--white" data-reset="true">
              Reset
            </button>
          </li>
        </ul>
      </div>
      <div class="results rounded-2 block background--dark p-3" data-setup='{"classes":["flex vh-25"],"children":[{"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}]}'>
      </div>
    </div>
  </div>

  <input type="radio" id="flex-grow" name="tabs">
  <label for="flex-grow" class="tab">
    Grow
  </label>
  <div class="tab-panel">
    <div class="visualizer block-container p-3 py-4 tablet-up-2 my-4">
      <div class="actions block">
        <ul class="list">
          <li>
            <button class="button" data-example-elements="flex--grow">
              <pre>.flex--grow</pre>
            </button>
          </li>
          <li>
            <button class="button button--salmon text--white" data-reset="true">
              Reset
            </button>
          </li>
        </ul>
      </div>
      <div class="results rounded-2 block background--dark p-3" data-setup='{"classes":["flex", "vh-25"],"children":[{"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}]}'>
      </div>
    </div>
  </div>

  <input type="radio" id="flex-center" name="tabs">
  <label for="flex-center" class="tab">
    Center
  </label>
  <div class="tab-panel">
    <div class="visualizer block-container p-3 py-4 tablet-up-2 my-4">
      <div class="actions block">
        <ul class="list">
          <li>
            <button class="button" data-example-container="flex--center-content">
              <pre>.flex--center-content</pre>
            </button>
          </li>
          <li>
            <button class="button button--salmon text--white" data-reset="true">
              Reset
            </button>
          </li>
        </ul>
      </div>
      <div class="results rounded-2 block background--dark p-3" data-setup='{"classes":["flex", "vh-25"],"children":[{"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}, {"el":"div","classes":["abstract-element", "background--light-purple", "border", "border--color-white"]}]}'>
      </div>
    </div>
  </div>
</div>