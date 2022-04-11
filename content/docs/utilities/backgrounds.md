---
title: Backgrounds
---
Used to modify the appearance of the background.


## Colors

The background color classes are used to set, or change a `background--color` on a specific element. 

<table class="table mb-4">
  <thead>
    <tr>
      <th>Color</th>
      <th>Class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Color">
        <p class="background--white">White</p>
      </td>
      <td data-label="Class"><code>.background--white</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="background--lighter">Lighter</p>
      </td>
      <td data-label="Class"><code>.background--lighter</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="background--light-mid">Light Mid</p>
      </td>
      <td data-label="Class"><code>.background--light-mid</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="background--light">Light</p>
      </td>
      <td data-label="Class"><code>.background--light</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="background--base text--white">Base</p>
      </td>
      <td data-label="Class"><code>.background--base</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="background--dark text--white">Dark</p>
      </td>
      <td data-label="Class"><code>.background--dark</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="background--black text--white">Black</p>
      </td>
      <td data-label="Class"><code>.background--black</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="background--navy text--white">Navy</p>
      </td>
      <td data-label="Class"><code>.background--navy</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="background--skyblue text--white">Skyblue</p>
      </td>
      <td data-label="Class"><code>.background--skyblue</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="background--med-blue text--white">Med Blue</p>
      </td>
      <td data-label="Class"><code>.background--med-blue</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="background--beige text--white">Beige</p>
      </td>
      <td data-label="Class"><code>.background--beige</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="background--peach text--white">Peach</p>
      </td>
      <td data-label="Class"><code>.background--peach</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="background--salmon text--white">Salmon</p>
      </td>
      <td data-label="Class"><code>.background--salmon</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="background--brown text--white">Brown</p>
      </td>
      <td data-label="Class"><code>.background--brown</code></td>
    </tr>
    <tr>
      <td data-label="Color">
        <p class="background--orange text--white">Orange</p>
      </td>
      <td data-label="Class"><code>.background--orange</code></td>
    </tr>
  </tbody>
</table>


## Inverted

The `inverted` class changes the color of an element to white. It has a transition, so after the class is added, the color
will transition to white.

<div class="card background--black">
  <h1 class="inverted">Hello world</h1>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="card background--black">
  <h1 class="inverted">Hello world</h1>
</div>
{{< /highlight >}}
</div>


## Transparent

If you want to remove the background color and border color on an element, add the class `transparent`.

<div class="block-container card background--lighter">
  <div class="block-6">
    <button class="button">Button</button>
  </div>
  <div class="block-6">
    <button class="button transparent">Transparent Button</button>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container card background--lighter">
  <div class="block-6">
    <button class="button">Button</button>
  </div>
  <div class="block-6">
    <button class="button transparent">Transparent Button</button>
  </div>
</div>
{{< /highlight >}}
</div>


## Images

<div class="mb-4">
{{% requires-js %}}
</div>

You can use platform UI to add background images using data attributes and some javascript.

For starters, you'll need to add the class `background-image` onto the element where you want to use add an image. From there, use data attributes to change the look of the background image.

See the example below to see it all come together. You may notice a `ratio-` class on the image container. We talk more about that <a href="https://style.rimdev.io/section-utilities.html#utilities-backgroundratio" rel="external" target="_blank">here</a>.

<table class="table mb-4">
  <thead>
    <tr>
      <th>Class</th>
      <th>Data-Attribute</th>
      <th>Scenarios</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Class"><code>.background-image</code></td>
      <td data-label="Data-Attribute"><code>data-background-image</code></td>
      <td data-label="Scenarios">image path; <code>no-repeat</code>, position <code>center</code>, and size <code>cover</code> all default</td>
    </tr>
    <tr>
      <td data-label="Class"></td>
      <td data-label="Data-Attribute"><code>data-background-position</code></td>
      <td data-label="Scenarios">overrides default</td>
    </tr>
    <tr>
      <td data-label="Class"></td>
      <td data-label="Data-Attribute"><code>data-background-size</code></td>
      <td data-label="Scenarios">overrides default</td>
    </tr>
    <tr>
      <td data-label="Class"></td>
      <td data-label="Data-Attribute"><code>data-background-repeat</code></td>
      <td data-label="Scenarios">overrides default</td>
    </tr>
  </tbody>
</table>

<div
  class="block-container background-image p-4 mb-4"
  data-background-image="https://picsum.photos/id/1012/1000/400"
  data-background-position="center center"
  data-background-size="cover"
  data-background-repeat="no-repeat">
    <div class="block lg-tablet-up-6 background--black-a90 rounded-2 p-4">
      <h1 class="mb-3 mt-0 text--white">Hero Heading</h1>
      <p class="text--white mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit elit, efficitur a purus eget, porttitor aliquam turpis.</p>
     </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div
  class="block-container background-image p-4 mb-4"
  data-background-image="https://picsum.photos/id/1012/1000/400"
  data-background-position="center center"
  data-background-size="cover"
  data-background-repeat="no-repeat">
    <div class="block lg-tablet-up-6 background--black-a90 rounded-2 p-4">
      <h1 class="mb-3 mt-0 text--white">Hero Heading</h1>
      <p class="text--white mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit elit, efficitur a purus eget, porttitor aliquam turpis.</p>
     </div>
</div>
{{< /highlight >}}
</div>

<div
  class="background-image block-container flex--justify-around p-4 mb-4"
  data-background-image="https://picsum.photos/id/120/1400/600"
  data-background-position="center bottom"
  data-background-size="cover"
  data-background-repeat="no-repeat">
    <div class="block lg-tablet-up-5 py-4">
      <h1 class="mb-3 mt-0 text--white">Signup Today!</h1>
      <p class="text--white mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in blandit urna. Phasellus tristique tortor non quam maximus mattis. Sed ullamcorper et dui et pretium. In condimentum magna a vehicula aliquam. Suspendisse potenti. Integer posuere, lectus at viverra vestibulum, urna leo rhoncus massa, quis congue lorem metus et quam.</p>
    </div>
    <div class="block lg-tablet-up-4 background--white-a70 border-t border--color-orange border--width-5 p-4">
      <p class="text--black">Signup for a newsletter! We promise we won't spam you.</p>
      <form action="" class="form form--rounded">
         <div class="block form__field mb-3">
         <label class="sr-only" for="first-name">First Name</label>
         <input id="first-name" class="background--white-a70" type="text" placeholder="First Name" />
       </div>
       <div class="block form__field mb-3">
         <label class="sr-only" for="last-name">Last Name</label>
         <input id="last-name" class="background--white-a70" type="text" placeholder="Last Name" />
       </div>
       <div class="block form__field mb-3">
         <label class="sr-only" for="email">Email Address</label>
         <input id="email" class="background--white-a70" type="email" placeholder="name@example.com" />
       </div>
       <div class="block flex flex--justify-center">
         <button class="button button--lg button--orange">Submit</button>
       </div>
     </form>
    </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div
  class="background-image block-container flex--justify-around p-4 mb-4"
  data-background-image="https://picsum.photos/id/120/1400/600"
  data-background-position="center bottom"
  data-background-size="cover"
  data-background-repeat="no-repeat">
    <div class="block lg-tablet-up-5 py-4">
      <h1 class="mb-3 mt-0 text--white">Signup Today!</h1>
      <p class="text--white mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in blandit urna. Phasellus tristique tortor non quam maximus mattis. Sed ullamcorper et dui et pretium. In condimentum magna a vehicula aliquam. Suspendisse potenti. Integer posuere, lectus at viverra vestibulum, urna leo rhoncus massa, quis congue lorem metus et quam.</p>
    </div>
    <div class="block lg-tablet-up-4 background--white-a70 border-t border--color-orange border--width-5 p-4">
      <p class="text--black">Signup for a newsletter! We promise we won't spam you.</p>
      <form action="" class="form form--rounded">
         <div class="block form__field mb-3">
         <label class="sr-only" for="first-name">First Name</label>
         <input id="first-name" class="background--white-a70" type="text" placeholder="First Name" />
       </div>
       <div class="block form__field mb-3">
         <label class="sr-only" for="last-name">Last Name</label>
         <input id="last-name" class="background--white-a70" type="text" placeholder="Last Name" />
       </div>
       <div class="block form__field mb-3">
         <label class="sr-only" for="email">Email Address</label>
         <input id="email" class="background--white-a70" type="email" placeholder="name@example.com" />
       </div>
       <div class="block flex flex--justify-center">
         <button class="button button--lg button--orange">Submit</button>
       </div>
     </form>
    </div>
</div>
{{< /highlight >}}
</div>

<div
  class="background-image mb-4"
  data-background-image="https://picsum.photos/id/214/1000/400"
  data-background-position="center center"
  data-background-size="cover"
  data-background-repeat="no-repeat">
    <div class="background--black-a80 text--size-xl text--center p-6">
      <i class="pi-bolt text--size-lg text-white"></i>
      <h1 class="text--white mt-4 mb-6 pb-6 text--size-xxxl text--white">Power Your World.</h1>
      <p class="text-white text--size-sm mb-0">Learn More</p>
      <i class="pi-angle-down text--white"></i>
     </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div
  class="background-image mb-4"
  data-background-image="https://picsum.photos/id/214/1000/400"
  data-background-position="center center"
  data-background-size="cover"
  data-background-repeat="no-repeat">
    <div class="background--black-a80 text--size-xl text--center p-6">
      <i class="pi-bolt text--size-lg text--white"></i>
      <h1 class="text--white mt-4 mb-6 pb-6 text--size-xxxl text--white">Power Your World.</h1>
      <p class="text--white text--size-sm mb-0">Learn More</p>
      <i class="pi-angle-down text--white"></i>
     </div>
</div>
{{< /highlight >}}
</div>


## Gradient

<div class="mb-4">
{{% requires-js %}}
</div>

You can create your own custom linear gradient. Start by adding the linear-gradient class. From there, enter the values you like for your direction and color using the appropriate data attributes. See the example and table below.

<div class="overflow-x--auto">

| Class | Data-Attribute | Scenarios |
|---|---|---|
| `.linear-gradient` | `data-gradient-direction` | `background-image: linear-gradient(0deg, rgb(2, 0, 36), rgb(0, 212, 255))` |
|  | `data-gradient-start` | `	linear-gradient(0deg, rgb(2, 0, 36), rgb(0, 212, 255))` |
|  | `data-gradient-stop` | `linear-gradient(0deg, rgb(2, 0, 36), rgb(0, 212, 255))` |
|  | `data-gradient-fallback` | Add a fallback `background-color` |

<table class="table mb-4">
  <thead>
    <tr>
      <th>Class</th>
      <th>Data-Attribute</th>
      <th>Scenarios</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Class"><code>.linear-gradient</code></td>
      <td data-label="Data-Attribute"><code>data-gradient-direction</code></td>
      <td data-label="Scenarios"><code>background-image: linear-gradient(0deg, rgb(2, 0, 36), rgb(0, 212, 255))</code></td>
    </tr>
    <tr>
      <td data-label="Class"></td>
      <td data-label="Data-Attribute"><code>data-gradient-start</code></td>
      <td data-label="Scenarios"><code>	linear-gradient(0deg, rgb(2, 0, 36), rgb(0, 212, 255))</code></td>
    </tr>
    <tr>
      <td data-label="Class"></td>
      <td data-label="Data-Attribute"><code>data-gradient-stop</code></td>
      <td data-label="Scenarios"><code>linear-gradient(0deg, rgb(2, 0, 36), rgb(0, 212, 255))</code></td>
    </tr>
    <tr>
      <td data-label="Class"></td>
      <td data-label="Data-Attribute"><code>data-gradient-fallback</code></td>
      <td data-label="Scenarios">Add a fallback <code>background-color</code></td>
    </tr>
  </tbody>
</table>

Keep in mind you can use platform UI [color variables](/section-color.html) as well. Something like `data-gradient-start="var(--navy)"` will work just fine.
You can also change the distance of your colors by adding a perceentage in the data attribute value for `data-gradient-start`. Something like `data-gradient-start="var(--navy) 20%"` would render just fine. See the first example.


<div class="block-container">
  <div
    class="linear-gradient ratio-16_9 block laptop-up-6"
    data-gradient-direction="0deg"
    data-gradient-start="#020024 20%"
    data-gradient-stop="#00d4ff"
    data-gradient-fallback="#020024">
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div
  class="linear-gradient ratio-16_9"
  data-gradient-direction="0deg"
  data-gradient-start="#020024 20%"
  data-gradient-stop="#00d4ff"
  data-gradient-fallback="#020024">
</div>
{{< /highlight >}}
</div>

<div class="block-container">
  <div
    class="linear-gradient ratio-16_9 block laptop-up-6"
    data-gradient-direction="90deg"
    data-gradient-start="var(--navy)"
    data-gradient-stop="var(--blue)"
    data-gradient-fallback="var(--navy)">
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div
  class="linear-gradient ratio-16_9"
  data-gradient-direction="90deg"
  data-gradient-start="var(--navy)"
  data-gradient-stop="var(--blue)"
  data-gradient-fallback="var(--navy)">
</div>
{{< /highlight >}}
</div>

<div class="block-container">
  <div
       class="linear-gradient ratio-16_9 block laptop-up-6"
       data-gradient-direction="to left top"
       data-gradient-start="var(--violet)"
       data-gradient-stop="var(--purple)"
       data-gradient-fallback="var(--purple)">
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div
  class="linear-gradient ratio-16_9"
  data-gradient-direction="to left top"
  data-gradient-start="var(--violet)"
  data-gradient-stop="var(--purple)"
  data-gradient-fallback="var(--purple)">
</div>
{{< /highlight >}}
</div>

<div class="message message--warning mb-4">
  <p>This feature will not work in IE.</p>
</div>


## Image and Gradient

You can get really fancy with your backgrounds by adding a gradient over a background image. To do this, you will need both classes `linear-gradient` `background-image`. From there, add the appropriate data attributes to get your desired image and gradient.


<!-- Add data attributes to create your gradient and image -->
<div class="block-container">
  <div
    class="linear-gradient background-image ratio-16_9 block laptop-up-6"
    data-gradient-direction="to right"
    data-gradient-start="var(--navy)"
    data-gradient-stop="transparent"
    data-gradient-fallback="var(--navy)"
    data-background-image="http://placeimg.com/640/360/nature">
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div
  class="linear-gradient background-image ratio-16_9"
  data-gradient-direction="to right"
  data-gradient-start="var(--navy)"
  data-gradient-stop="transparent"
  data-gradient-fallback="var(--navy)"
  data-background-image="http://placeimg.com/640/360/nature">
</div>
{{< /highlight >}}
</div>


## Ratio

Set the size of an element equal to a common ratio with the ratio-{val} class.

<table class="table mb-4">
  <thead>
    <tr>
      <th>Ratio</th>
      <th>Class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Ratio">1:1</td>
      <td data-label="Class"><code>.ratio-1_1</code></td>
    </tr>
    <tr>
      <td data-label="Ratio">2:1</td>
      <td data-label="Class"><code>.ratio-2_1</code></td>
    </tr>
    <tr>
      <td data-label="Ratio">4:3</td>
      <td data-label="Class"><code>.ratio-4_3</code></td>
    </tr>
    <tr>
      <td data-label="Ratio">16:9</td>
      <td data-label="Class"><code>.ratio-16_9</code></td>
    </tr>
  </tbody>
</table>

<div class="block-container tablet-up-2 laptop-up-4 blocks my-3 px-2">
  <div class="block">
    <div class="background--navy ratio-1_1 flex--center-content">
<strong class="text--white text--size-lg">1:1</strong>
    </div>
  </div>
  <div class="block">
    <div class="background--skyblue ratio-2_1 flex--center-content">
<strong class="text--size-lg">2:1</strong>
    </div>
  </div>
  <div class="block">
    <div class="background--med-blue ratio-4_3 flex--center-content">
<strong class="text--white text--size-lg">4:3</strong>
    </div>
  </div>
  <div class="block">
    <div class="background--lightblue ratio-16_9 flex--center-content">
<strong class="text--size-lg">16:9</strong>
    </div>
  </div>
</div>

<div class="mb-4">
{{< highlight html >}}
<div class="block-container tablet-up-2 laptop-up-4 blocks my-3 px-2">
  <div class="block">
    <div class="background--navy ratio-1_1 flex--center-content">
      <strong class="text--white text--size-lg">1:1</strong>
    </div>
  </div>
  <div class="block">
    <div class="background--skyblue ratio-2_1 flex--center-content">
      <strong class="text--size-lg">2:1</strong>
    </div>
  </div>
  <div class="block">
    <div class="background--med-blue ratio-4_3 flex--center-content">
      <strong class="text--white text--size-lg">4:3</strong>
    </div>
  </div>
  <div class="block">
    <div class="background--lightblue ratio-16_9 flex--center-content">
      <strong class="text--size-lg">16:9</strong>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>