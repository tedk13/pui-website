---
title: Height and Width
---

We handle height and width both in percentages and view-height/width. Both are broken into quarters.

{{% anchor name="Percentage" %}}

{{< classes result="true" >}}
{{< classes-row class="h-{ 25, 50, 75, 100 }" result="Height is set to the corresponding percentage." >}}
{{< classes-row class="h-auto" result="Height is set to auto." >}}
{{< classes-row class="w-{ 25, 50, 75, 100 }" result="Width is set to the corresponding percentage." >}}
{{< classes-row class="w-auto" result="Width is set to auto." >}}
{{< /classes >}}

{{% anchor name="Viewport" %}}

{{< classes result="true" >}}
{{< classes-row class="vh-{ 25, 50, 75, 100 }" result="Height is set to the corresponding percentage based on the viewport." >}}
{{< classes-row class="vw-{ 25, 50, 75, 100 }" result="Width is set to the corresponding percentage based on the viewport." >}}
{{< /classes >}}
 