---
title: Accordions
description: Documentation for Platform UI's accordion components.
skellyCSS: true
toc: true
---

{{% requires-js %}} {{% requires-icons %}}

{{% anchor name="accordion" %}}

Use whenever you want to toggle additional or related information in a sibling `<div>`. Built to be **stacked** or **nested**. 

{{< code-demo >}}
<div class="accordion">
  <a href="#" aria-label="Demo Accordion" class="accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <span class="skeleton skeleton--sm mb-0 mr-2" data-color="var(--light)" role="presentation"></span>
    <i class="pi-angle-down accordion__icon text--med-blue"></i>
  </a>
  <div class="accordion__content px-3 py-3">
    <p class="skeleton" data-lines="6" role="presentation"></p>
  </div>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="accordion">
  <a href="#" class="accordion__header">
    <!-- Accordion header goes here! -->
  </a>
  <div class="accordion__content">
    <!-- Accordion content goes here! -->
  </div>
</div>
{{< /highlight >}} 
{{< /code-markup >}}
