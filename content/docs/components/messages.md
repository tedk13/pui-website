---
title: Messages
description: Documentation for Platform UI's message component, including informational, warning, error, and success states.
skellyCSS: true
toc: false
---
{{% anchor name="message" %}}
Messages can be used to display important information that will stand out on the screen.

{{< code-demo >}}
<!-- DEMO CODE HERE -->
<div class="message message--info">
  <p class="skeleton" data-lines="1" data-color="var(--med-blue)" data-opacity="0.2"  role="presentation"></p>
</div>
<div class="message message--warning">
  <p class="skeleton" data-lines="1" data-color="var(--med-blue)" data-opacity="0.2"  role="presentation"></p>
</div>
<div class="message message--success">
  <p class="skeleton" data-lines="1" data-color="var(--med-blue)" data-opacity="0.2"  role="presentation"></p>
</div>
<div class="message message--error">
  <p class="skeleton" data-lines="1" data-color="var(--med-blue)" data-opacity="0.2"  role="presentation"></p>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="message message--info">
<!-- Content goes here -->
</div>
<div class="message message--warning">
<!-- Content goes here -->
</div>
<div class="message message--success">
<!-- Content goes here -->
</div>
<div class="message message--error">
<!-- Content goes here -->
</div>
{{< /highlight >}}
{{< /code-markup >}}

{{< callout tipHeader="Message Tip" >}}
  <p>You can add a custom heading to any message using <code>data-header="{Your Heading}"</code>. You can also remove the heading by setting <code>data-header=""</code>!</p>
{{< /callout >}}
