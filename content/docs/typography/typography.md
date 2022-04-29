---
title: Typography
skellycss: true
---

{{% anchor name="heading" %}}

{{< code-demo >}}
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
{{< /code-demo >}}

{{% anchor name="paragraph" %}}

Why include a paragraph tag? Mostly to note that our paragraphs have a bottom margin of `1rem`.

{{< code-demo >}}
<p class="skeleton" data-lines="3"></p>
{{< /code-demo >}}

{{% anchor name="utilities" %}}

{{% anchor name="case" level="3" %}}

{{< classes result="true">}}
{{< classes-row 
  class="text--uppercase" 
  result="Uppercase text." 
>}}
{{< classes-row 
  class="text--lowercase" 
  result="Lowercase text." 
>}}
{{< classes-row 
  class="text--capitalize" 
  result="Capitalize each first letter." 
>}}
{{< /classes >}}

{{% anchor name="color" level="3" %}}

{{< classes result="true">}}
{{< classes-row 
  class="text--{ color }" 
  result="Set text color using our [colors](link)." 
>}}
{{< classes-row 
  class="text-hover--{ color }" 
  result="Set text hover color using our [colors](link)." 
>}}
{{< /classes >}}

{{% anchor name="sizing" level="3" %}}

`text--size-{ size }` augments our defaut `font-size` of `1rem`.

{{< code-demo >}}
<p class="text--size-2xs">Hello World!</p>
<p class="text--size-xs">Hello World!</p>
<p class="text--size-sm">Hello World!</p>
<p class="text--size-md">Hello World!</p>
<p class="text--size-lg">Hello World!</p>
<p class="text--size-xl">Hello World!</p>
<p class="text--size-2xl">Hello World!</p>
<p class="text--size-3xl">Hello World!</p>
{{< /code-demo >}}

{{< classes result="true">}}
{{< classes-row class="text--size-2xs" result="2xs smaller text." >}}
{{< classes-row class="text--size-xs" result="xs text." >}}
{{< classes-row class="text--size-sm" result="sm text." >}}
{{< classes-row class="text--size-md" result="medium text." >}}
{{< classes-row class="text--size-lg" result="large text." >}}
{{< classes-row class="text--size-xl" result="xl text." >}}
{{< classes-row class="text--size-2xl" result="2xl larger text." >}}
{{< classes-row class="text--size-3xl" result="3xl larger text." >}}
{{< /classes >}}


{{% anchor name="general" level="3" %}}

{{< code-demo >}}
<p class="text--bold">Hello World!</p>
<p class="text--underline">Hello World!</p>
<p class="text--center">Hello World!</p>
<p class="text--right">Hello World!</p>
<p class="text--nowrap">The quick brown fox jumped over the lazy dog.</p>
{{< /code-demo >}}
   
{{< classes result="true">}}
{{< classes-row class="text--bold" result="Bold text." >}}
{{< classes-row class="text--underline" result="Underlined text." >}}
{{< classes-row class="text--center" result="Centered text." >}}
{{< classes-row class="text--right" result="Right-aligned text." >}}
{{< classes-row class="text--nowrap" result="Set no-wrap on a line of text." >}}
{{< /classes >}}
