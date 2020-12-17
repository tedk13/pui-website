---
title: Messages
date: 2018-07-20T12:59:15-04:00
---

These are examples of global messages or alerts

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


{{< heading heading="h2" id="alternate-headings">}}
Alternate Headings
{{< /heading >}}

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