---
title: Flex
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
  <div class="actions block h-10">
    <ul class="list">
      <li>
        <button class="button button--purple" data-class="flex--align-start">
          <pre>.flex--align-start</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple" data-class="flex--align-center">
          <pre>.flex--align-center</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple" data-class="flex--align-end">
          <pre>.flex--align-end</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple" data-childclass="flex--align-baseline">
          <pre>.flex--align-baseline</pre>
        </button>
      </li>
    </ul>
  </div>
  <div class="results block background--dark p-2">
    <div class="example" data-defaults="flex vh-25">
      <div class="example-element border border--color-white background--light-purple"></div>
    </div>
  </div>
</div>

<table class="table mb-4">
  <thead>
    <tr>
      <th>Class Name</th>
      <th>CSS Attribute</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Class Name"><code>flex--align-center</code></td>
      <td data-label="CSS Attribute"><code>align-items: center;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--align-start</code></td>
      <td data-label="CSS Attribute"><code>align-items: flex-start;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--align-end</code></td>
      <td data-label="CSS Attribute"><code>align-items: flex-end;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--align-baseline</code></td>
      <td data-label="CSS Attribute"><code>align-items: baseline;</code></td>
    </tr>
  </tbody>
</table>

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
  <div class="actions block h-10">
    <ul class="list">
      <li class="mr-2 mb-2">
        <button class="button button--purple" data-childclass="flex--align-self-start">
          <pre>.flex--align-self-start</pre>
        </button>
      </li>
      <li class="mr-2 mb-2">
        <button class="button button--purple" data-childclass="flex--align-self-center">
          <pre>.flex--align-self-center</pre>
        </button>
      </li>
      <li class="mr-2 mb-2">
        <button class="button button--purple" data-childclass="flex--align-self-end">
          <pre>.flex--align-self-end</pre>
        </button>
      </li>
      <li class="mr-2 mb-2">
        <button class="button button--purple" data-childclass="flex--align-self-baseline">
          <pre>.flex--align-self-baseline</pre>
        </button>
      </li>
    </ul>
  </div>
  <div class="results block background--dark p-2">
    <div class="example" data-defaults="flex vh-25">
      <div class="example-element border border--color-white background--light-purple"></div>
    </div>
  </div>
</div>

<table class="table mb-4">
  <thead>
    <tr>
      <th>Class Name</th>
      <th>CSS Attribute</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Class Name"><code>flex--align-self-center</code></td>
      <td data-label="CSS Attribute"><code>align-self: center;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--align-self-start</code></td>
      <td data-label="CSS Attribute"><code>align-self: flex-start;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--align-self-end</code></td>
      <td data-label="CSS Attribute"><code>align-self: flex-end;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--align-self-baseline</code></td>
      <td data-label="CSS Attribute"><code>align-self: baseline;</code></td>
    </tr>
  </tbody>
</table>

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
  <div class="actions block h-10">
    <ul class="list">
      <li>
        <button class="button button--purple" data-children="3" data-class="flex--justify-start">
          <pre>.flex--justify-start</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple" data-children="3" data-class="flex--justify-center">
          <pre>.flex--justify-center</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple" data-children="3" data-class="flex--justify-end">
          <pre>.flex--justify-end</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple" data-children="3" data-class="flex--justify-around">
          <pre>.flex--justify-around</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple" data-children="3" data-class="flex--justify-between">
          <pre>.flex--justify-between</pre>
        </button>
      </li>
    </ul>
  </div>
  <div class="results block background--dark p-2">
    <div class="example" data-defaults="flex">
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
    </div>
  </div>
</div>

<table class="table mb-4">
  <thead>
    <tr>
      <th>Class Name</th>
      <th>CSS Attribute</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Class Name"><code>flex--justify-start</code></td>
      <td data-label="CSS Attribute"><code>justify-content: flex-start;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--justify-center</code></td>
      <td data-label="CSS Attribute"><code>justify-content: center;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--justify-end</code></td>
      <td data-label="CSS Attribute"><code>justify-content: flex-end;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--justify-between</code></td>
      <td data-label="CSS Attribute"><code>justify-content: space-between;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--justify-around</code></td>
      <td data-label="CSS Attribute"><code>justify-content: space-around;</code></td>
    </tr>
  </tbody>
</table>

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
  <div class="actions block h-10">
    <ul class="list">
      <li>
        <button class="button button--purple" data-children="3">
          <pre>Default</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple" data-children="3" data-class="flex--row-reverse">
          <pre>.flex--row-reverse</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple" data-children="3" data-class="flex--column">
          <pre>.flex--column</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple" data-children="3" data-class="flex--column-reverse">
          <pre>.flex--column-reverse</pre>
        </button>
      </li>
    </ul>
  </div>
  <div class="results block background--dark p-2">
    <div class="example" data-defaults="flex vh-25">
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
    </div>
  </div>
</div>

<table class="table mb-4">
  <thead>
    <tr>
      <th>Class Name</th>
      <th>CSS Attribute</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Class Name"><code>flex--row-reverse</code></td>
      <td data-label="CSS Attribute"><code>flex-direction: row-reverse;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--column</code></td>
      <td data-label="CSS Attribute"><code>flex-direction: column;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--column-reverse</code></td>
      <td data-label="CSS Attribute"><code>flex-direction: column-reverse;</code></td>
    </tr>
  </tbody>
</table>


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
<div class="visualizer block-container p-3 py-4 border border--color-lighter border--width-5 tablet-up-2 mb-4">
  <div class="actions block h-10">
    <ul class="list">
      <li>
        <button class="button button--purple " data-children="20" data-class="flex--nowrap">
          <pre>.flex--no-wrap</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple " data-children="20" data-class="flex--wrap">
          <pre>.flex--wrap</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple " data-children="3" data-childclass="flex--grow">
          <pre>.flex--grow</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple " data-children="1" data-class="flex--center-content">
          <pre>.flex--center-content</pre>
        </button>
      </li>
    </ul>
  </div>
  <div class="results block background--dark p-2">
    <div class="example" data-defaults="flex h-100">
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
      <div class="example-element border border--color-white background--light-purple"></div>
    </div>
  </div>
</div>

<table class="table mb-4">
  <thead>
    <tr>
      <th>Class Name</th>
      <th>CSS Attribute</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Class Name"><code>flex--grow</code></td>
      <td data-label="CSS Attribute"><code>flex-grow: 1;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--wrap</code></td>
      <td data-label="CSS Attribute"><code>flex-wrap: wrap;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--nowrap</code></td>
      <td data-label="CSS Attribute"><code>flex-wrap: nowrap;</code></td>
    </tr>
    <tr>
      <td data-label="Class Name"><code>flex--center-content</code></td>
      <td data-label="CSS Attribute"><code>display: flex; align-items: center; justify-content: center;</code></td>
    </tr>
  </tbody>
</table>