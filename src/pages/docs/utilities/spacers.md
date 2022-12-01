---
layout: ../../../layouts/single.astro
title: Spacers
---
{{% anchor name="Padding and margin" %}}
{{% anchor name="How does it work" level="3" %}}

Using our padding and margin utilities is simple. It's _what_ you're setting, the _direction_, and the number based on our spacing map.

`{padding, p or margin, m }{ direction if not surrounding: t, b, l, r, x, y }-{ number }`

{{% anchor name="basic" level="3" %}}

{{< classes result="true" >}}
{{< classes-row class="{padding, p or margin, m }-{ 0-7 }" result="Set `padding` or `margin` from `0`-`6.5rem`." >}}
{{< /classes >}}

{{% anchor name="x y axis" level="3" %}}

{{< classes result="true" >}}
{{< classes-row class="{padding, p or margin, m }x-{ 0-7 }" result="Set `padding` or `margin` from `0`-`6.5rem` on the x-axis (left and right)." >}}
{{< classes-row class="{padding, p or margin, m }y-{ 0-7 }" result="Set `padding` or `margin` from `0`-`6.5rem` on the y-axis (top and bottom)." >}}
{{< /classes >}}

{{% anchor name="top bottom left right" level="3" %}}

{{< classes result="true" >}}
{{< classes-row class="{padding, p or margin, m }{ t, b, l, r}-{ 0-7 }" result="Set `padding` or `margin` from `0`-`6.5rem` for top, bottom, left, and right." >}}
{{< /classes >}}

{{< code-markup >}}
{{< highlight html >}}
$spacer: 1rem;
$spacers: (
  0: 0,
  1: ($spacer * .25),
  2: ($spacer * .5),
  3: $spacer,
  4: ($spacer * 2),
  5: ($spacer * 3),
  6: ($spacer * 4.5),
  7: ($spacer * 6.5)
);
{{< /highlight >}}
{{< /code-markup >}} 
