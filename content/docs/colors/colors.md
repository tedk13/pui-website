---
title: Colors
description: A list of colors that ship with Platform UI.
skellyCSS: true
---

{{% anchor name="Brand Colors" %}}

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

{{% anchor name="Greyscale Colors" %}}

<section class="mb-4">
    <div class="block-container blocks p-2 tablet-up-2 lg-tablet-up-3 laptop-up-4">
        <div class="block">
            {{% color color="#ffffff" color_name="white" %}}
        </div>
        <div class="block">
            {{% color color="#efefef" color_name="lighter" %}}
        </div>
        <div class="block">
            {{% color color="#999" color_name="light" %}}
        </div>
        <div class="block">
            {{% color color="#666" color_name="base" %}}
        </div>
        <div class="block">
            {{% color color="#333" color_name="dark" %}}
        </div>
        <div class="block">
            {{% color color="#222" color_name="black" %}}
        </div>
    </div>    
</section>

{{% anchor name="Alpha" %}}

Each of the colors listed above has a corresponding alpha value ranging from 10% to 90%. Below is the example for `navy`.

<section class="mb-4">
    <div class="block-container blocks p-2 tablet-up-2 lg-tablet-up-3 laptop-up-4">
        <div class="block">
            {{% color color="#003f70" color_name="navy" %}}
        </div>
        <div class="block">
            {{% color color="rgba(0,63,112,.1)" color_name="navy-a10" %}}
        </div>
        <div class="block">
            {{% color color="rgba(0,63,112,.2)" color_name="navy-a20" %}}
        </div>
        <div class="block">
            {{% color color="rgba(0,63,112,.3)" color_name="navy-a30" %}}
        </div>
        <div class="block">
            {{% color color="rgba(0,63,112,.4)" color_name="navy-a40" %}}
        </div>
        <div class="block">
            {{% color color="rgba(0,63,112,.5)" color_name="navy-a50" %}}
        </div>
        <div class="block">
            {{% color color="rgba(0,63,112,.6)" color_name="navy-a60" %}}
        </div>
        <div class="block">
            {{% color color="rgba(0,63,112,.7)" color_name="navy-a70" %}}
        </div>
        <div class="block">
            {{% color color="rgba(0,63,112,.8)" color_name="navy-a80" %}}
        </div>
        <div class="block">
            {{% color color="rgba(0,63,112,.9)" color_name="navy-a90" %}}
        </div>
    </div>    
</section>

{{% anchor name="Custom Properties" %}}

All of these colors have a corresponding custom property that we export to the `:root` as `--{color name}`. The alpha colors are `--{color name}-{1-9}`.
