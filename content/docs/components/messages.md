---
title: Messages
skellyCSS: true
---

Messages can be used to display important information that will stand out on the screen.

{{< code-demo >}}
<!-- DEMO CODE HERE -->
<div class="message message--info">
  <p class="skeleton" data-lines="2"></p>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="message">
  <!-- Content goes here! -->
<div>
<!-- CODE SAMPLE HERE -->
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