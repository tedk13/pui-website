---
title: Messages
date: 2018-07-20T12:59:15-04:00
skellyCSS: true
---

Messages can be used to display important information that will stand out on the screen.

<table class="table mb-4">
  <thead>
    <tr>
      <th>Modifier Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Modifier Class"><code>.message--success</code></td>
      <td data-label="Description">Green success message</td>
    </tr>
    <tr>
      <td data-label="Modifier Class"><code>.message--error</code></td>
      <td data-label="Description">Red error message</td>
    </tr>
    <tr>
      <td data-label="Modifier Class"><code>.message--warning</code></td>
      <td data-label="Description">Yellow warning message</td>
    </tr>
    <tr>
      <td data-label="Modifier Class"><code>.message--info</code></td>
      <td data-label="Description">Blue info message</td>
    </tr>
  </tbody>
</table>


## Success

<div class="message message--success">
  <p class="skeleton" data-lines="2"></p>
</div>
<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="message message--success">
  <!-- Success message goes here! -->
</div>
{{< /highlight >}}
</div>


## Error

<div class="message message--error">
  <p class="skeleton" data-lines="2"></p>
</div>
<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="message message--error">
  <!-- Error message goes here! -->
</div>
{{< /highlight >}}
</div>


## Warning

<div class="message message--warning">
  <p class="skeleton" data-lines="2"></p>
</div>
<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="message message--warning">
  <!-- Warning message goes here! -->
</div>
{{< /highlight >}}
</div>


## Info

<div class="message message--info">
  <p class="skeleton" data-lines="2"></p>
</div>
<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="message message--info">
  <!-- Info message goes here! -->
</div>
{{< /highlight >}}
</div>


## Alternate Headings

Messages can have custom headings. Adding `data-header="{Your Heading}"` to the message will display the custom heading. 

<div class="message message--success" data-header="Alternate heading based on data-header">
  <p class="skeleton" data-lines="2"></p>
</div>
<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="message message--success" data-header="Alternate heading based on data-header">
  <!-- Message content goes here! -->
</div>
{{< /highlight >}}
</div>

Adding `data-header=""` to the message will display a message with no heading.

<div class="message message--success" data-header="">
  <p class="skeleton" data-lines="2"></p>
</div>
<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="message message--success" data-header="">
  <!-- Message content goes here! -->
</div>
{{< /highlight >}}
</div>