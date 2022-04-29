---
title: Tooltips
description: Documentation for Platform UI's tooltip component.
---

{{% anchor name="tooltip" %}}

Add your text to a `data-tooltip` attribute on any item you want to provide with a tooltip.

{{< code-demo >}}
<div data-tooltip="Here is a tooltip!">hover me!</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div data-tooltip="Tooltip goes here!">
  <!-- Content goes here! -->
</div>
{{< /highlight >}}
{{< /code-markup >}}

{{< classes attr="true">}}
{{< classes-row class="tooltip-{t, b, l, r}" attr="data-tooltip" >}}
{{< classes-row class="tooltip-inline" attr="data-tooltip" >}}
{{< /classes >}}

{{< callout header="Tooltip... Tip?" >}}
  <p>If you want to use a tooltip with an icon, make sure to add the data attribute to the <code>div</code> wrapper instead! This will ensure the text does not render a different font.</p>
{{< /callout >}}