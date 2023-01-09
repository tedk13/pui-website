---
title: Colors
colors:
- navy
- skyblue
- lightblue
- med-blue
- beige
- peach
- salmon
- brown
- orange
- black
- dark
- base
- light
- lighter
- white
description: Platform UI's base color pallette includes navy, skyblue, light blue and more!
---

{{% anchor name="Base" %}}

Platform UIs base color pallet.

<section class="mb-4">
    <div class="block-container blocks p-2 tablet-up-2 lg-tablet-up-3 laptop-up-4">
        <div class="block">
            {{% color color="#003f70" color_name="navy" %}}
        </div>
        <div class="block">
            {{% color color="#91b9dc" color_name="skyblue" %}}
        </div>
        <div class="block">
            {{% color color="#e5f5ff" color_name="lightblue" %}}
        </div>
        <div class="block">
            {{% color color="#3f7bad" color_name="med-blue" %}}
        </div>
        <div class="block">
            {{% color color="#ecd7b1" color_name="beige" %}}
        </div>
        <div class="block">
            {{% color color="#dfa278" color_name="peach" %}}
        </div>
        <div class="block">
            {{% color color="#e58967" color_name="salmon" %}}
        </div>
        <div class="block">
            {{% color color="#866657" color_name="brown" %}}
        </div>
        <div class="block">
            {{% color color="#f48418" color_name="orange" %}}
        </div>
    </div>    
</section>

{{% anchor name="Greyscale" %}}

<section class="mb-4">
    <div class="block-container blocks p-2 tablet-up-2 lg-tablet-up-3 laptop-up-4">
        <div class="block">
            {{% color color="#ffffff" color_name="white" %}}
        </div>
        <div class="block">
            {{% color color="#efefef" color_name="lighter" %}}
        </div>
        <div class="block">
            {{% color color="#999999" color_name="light" %}}
        </div>
        <div class="block">
            {{% color color="#666666" color_name="base" %}}
        </div>
        <div class="block">
            {{% color color="#333333" color_name="dark" %}}
        </div>
        <div class="block">
            {{% color color="#222222" color_name="black" %}}
        </div>
    </div>    
</section>

{{% anchor name="Alpha" %}}

Every color in Platform UI has a corresponding alpha value (opacity) ranging from 10% to 90%. 

Hover over each color to see it's exported css custom property.

{{< alpha-colors >}}

{{% anchor name="Custom Properties" %}}

We export all of our colors to `:root` as `--{ color name }` to be leveraged in any additional style sheets using `var()`. Alpha colors are `--{ color name }-a{ 10-90 }`.

{{< code-markup >}}
{{< highlight scss >}}
// Represented in :root 
:root {
  --navy-a30;  
}
// Represented in your style sheet 
div {
  background-color: var(--navy-a30);  
}
{{< /highlight >}}
{{< /code-markup >}}