---
layout: single
title: CDN
description: The quickest and easiest way to implement Platform UI is by using a CDN.
weight: 1
---

The quickest and easiest way to implement Platform UI is by using a CDN. Here are a few examples.

{{% anchor name="UNPKG" %}}

{{< code-markup >}}
{{< highlight html >}}
<!-- In the <head> of your site. -->
<link rel="preconnect" href="https://unpkg.com" crossorigin>
<link rel="stylesheet" href="https://unpkg.com/@ritterim/platform-ui/dist/platform-ui.min.css" crossorigin>
<!-- Directly before the closing </body> tag of your site. -->
<script src="https://unpkg.com/@ritterim/platform-ui/dist/js/platform-ui.min.js" crossorigin defer></script>
{{< /highlight >}}
{{< /code-markup >}}

{{< callout header="Pro Tip">}}
<p>Leaving out a version will always fetch the latest. Adding <code>@1.3.7</code>, or whatever version you're looking for, after <code>platform-ui</code> will get that specific version. </p>
{{< /callout >}}

{{% anchor name="JSDELIVR" %}}

{{< code-markup >}}
{{< highlight html >}}
<!-- In the <head> of your site. -->
<link rel="dns-prefetch" href="https://cdn.jsdelivr.net" crossorigin>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ritterim/platform-ui/dist/platform-ui.min.css" crossorigin>
<!-- Directly before the closing </body> tag of your site. -->
<script src="cdn.jsdelivr.net/npm/@ritterim/platform-ui/dist/js/platform-ui.min.js" crossorigin defer></script>
{{< /highlight >}}
{{< /code-markup >}}

{{% anchor name="Skypack" %}}

{{< code-markup >}}
{{< highlight html >}}
<!-- In the <head> of your site. -->
<link rel="dns-prefetch" href="https://cdn.skypack.dev" crossorigin>
<link rel="stylesheet" href="https://cdn.skypack.dev/@ritterim/platform-ui/dist/platform-ui.min.css" crossorigin>
<!-- Directly before the closing </body> tag of your site. -->
<script src="https://https:/cdn.skypack.dev/@ritterim/platform-ui/dist/js/platform-ui.min.js" crossorigin defer></script>
{{< /highlight >}}
{{< /code-markup >}}

