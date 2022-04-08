---
title: Messages
skellyCSS: true
---

Messages can be used to display important information that will stand out on the screen.

{{< code-demo >}}
<!-- DEMO CODE HERE -->
<div class="message message--info">
  <p class="skeleton" data-lines="2" data-color="var(--med-blue)" data-opacity="0.4"></p>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="message">
  <!-- Content goes here! -->
<div>
{{< /highlight >}}
{{< /code-markup >}}

<section class="p-0 mb-4">
  <h3>Modifiers</h3>
  <table borders="1" class="table modifiers table--no-hover">
    <thead>
      <tr>
        <th>Modifier Class</th>
        <th>Color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Modifier Class"><code>.message--info</code></td>
        <td data-label="Color">Blue</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.message--success</code></td>
        <td data-label="Color">Green</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.message--warning</code></td>
        <td data-label="Color">Yellow</td>
      </tr>
      <tr>
        <td data-label="Modifier Class"><code>.message--error</code></td>
        <td data-label="Color">Red</td>
      </tr>
    </tbody>
  </table>
</section>

{{< callout tipHeader="Message Tip" >}}
  <p>You can add a custom heading to a message by adding <code>data-header="{Your Heading}"</code> to the message. You can even get rid of the heading by setting <code>data-header=""</code>!</p>
{{< /callout >}}

<section class="p-0 my-4">
  <h3 class="mb-3">Visualizer</h3>
  <div class="linear-gradient inverted px-4 py-3 block-container" 
      data-callout-header="tables tip" 
      data-callout-radius="0 3rem 0 3rem"
      data-gradient-direction="30deg"
      data-gradient-start="midnightblue 20%, purple 40%"
      data-gradient-stop="indigo"
      data-gradient-fallback="indigo">
    <i class="pi-rocket mr-1"></i>
    <strong class="mr-1">Check it out!</strong> 
    See the different types of messages available!
  </div>
  <div class="visualizer block-container p-3 py-4 border border--color-lighter border--width-5 tablet-up-2 mb-4">
    <div class="actions block">
      <ul class="list">
        <li>
          <button class="button" data-example-elements="message--info">
            <pre>.message--info</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="message--success">
            <pre>.message--success</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="message--warning">
            <pre>.message--warning</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="message--error">
            <pre>.message--error</pre>
          </button>
        </li>
        <li>
          <button class="button button--salmon text-white" data-reset="true">
            Reset
          </button>
        </li>
      </ul>
    </div>
    <div class="results rounded-2 block background-dark p-3">
      <div class="message message--info">
        This is a message!
      </div>
    </div>
  </div>
<section>