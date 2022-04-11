---
title: Truncate With Ellipsis
---
A utility that does what it's name says. It truncates text within an element with ellipsis.

This can be done by adding the class `truncate-with-ellipsis`

<div class="block-container">
    <div class="block block-6 tablet-up-3">
        <h3 class="truncate-with-ellipsis">This is a heading for a block</h3>
    </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<h3 class="truncate-with-ellipsis">This is a heading for a block</h3>
{{< /highlight >}}
</div>


<p class="mb-4">
    <i class="pi-rocket mr-1 text--negative"></i>
    <strong class="mr-1">Try it!</strong> 
    Click the button below to toggle the <code class="mx-1">truncate-with-ellipsis</code> class!
</p>

<button class="button button--primary background--salmon text--white has-text button--lg ellipsis-button">Toggle Ellipsis</button>

<div class="block-container">
    <div class="block block-6 tablet-up-3">
        <h3 class="truncate-with-ellipsis ellipsis-header">This is a heading for a block</h3>
    </div>
</div>

<section>
  <h3 class="mb-3">Visualizer</h3>
  <div class="linear-gradient inverted px-4 py-3 block-container" 
      data-callout-header="tables tip" 
      data-callout-radius="0 3rem 0 3rem"
      data-gradient-direction="30deg"
      data-gradient-start="midnightblue 20%, purple 40%"
      data-gradient-stop="indigo"
      data-gradient-fallback="indigo">
    <i class="pi-rocket mr-1"></i>
    <strong class="mr-1">Try it out!</strong> 
    Truncate long lines with an ellipsis!
  </div>
  <div class="visualizer block-container p-3 py-4 border border--color-lighter border--width-5 tablet-up-2">
    <div class="actions block">
      <ul class="list">
        <li>
          <button class="button" data-example-elements="truncate-with-ellipsis">
            <pre>.truncate-with-ellipsis</pre>
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
      <div class="block block-9 h-100 card transition">
        <span class="text--size-md">The quick brown fox jumped over the lazy dog.</span>
      </div>
    </div>
  </div>
</section>