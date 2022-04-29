---
title: Backgrounds
---
{{% anchor name="color" %}}

The background color classes are used to set, or change a `background--color` on a specific element. 

{{< classes >}}
{{< classes-row 
  class="background--{ color }"
  result="Set background color using our [colors](link)."
>}}
{{< /classes >}}

{{< visualizer header="Change the background color!" >}}
<div class="actions block">
  <ul class="list">
    <li>
      <button class="button" data-example-elements="background--white">
        <pre>.background--white</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="background--lighter">
        <pre>.background--lighter</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="background--light-mid">
        <pre>.background--light-mid</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="background--light">
        <pre>.background--light</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="background--base text--white">
        <pre>.background--base</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="background--dark text--white">
        <pre>.background--dark</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="background--black text--white">
        <pre>.background--black</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="background--navy text--white">
        <pre>.background--navy</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="background--skyblue">
        <pre>.background--skyblue</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="background--lightblue">
        <pre>.background--lightblue</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="background--med-blue">
        <pre>.background--med-blue</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="background--beige">
        <pre>.background--beige</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="background--peach">
        <pre>.background--peach</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="background--salmon">
        <pre>.background--salmon</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="background--brown text--white">
        <pre>.background--brown</pre>
      </button>
    </li>
    <li>
      <button class="button" data-example-elements="background--orange">
        <pre>.background--orange</pre>
      </button>
    </li>
    <li>
      <button class="button button--salmon text--white" data-reset="true">
        Reset
      </button>
    </li>
  </ul>
</div>
<div class="results rounded-2 block background--dark p-3" data-default-class="block-container flex--center-content">
  <div class="block block-9 h-100 card transition">
    <span class="text--size-md">Example Card</span>
    <p class="skeleton" data-lines="3" role="presentation"></p>
  </div>
</div>
{{< /visualizer >}}


{{% anchor name="inverted" %}}

{{< classes result="true" >}}
{{< classes-row class="inverted" result="Changes text color to white with a transition effect.">}}
{{< /classes >}}

{{% anchor name="transparent" %}}

Set background color and border color on an element to `transparent`.

{{< classes result="true" >}}
{{< classes-row class="transparent" result="Set background color and border color on an element to transparent.">}}
{{< /classes >}}


{{% anchor name="images" %}}
{{% anchor name="background" level="3" %}}

<div class="mb-4">
{{% requires-js %}}
</div>

Sometimes you just don't have access to add a background image properly when you're using a static site generator. Now you can add background images using data attributes and Javascript.

{{< classes result="true" >}}
{{< classes-row class="background-image" result="Set a background image with custom properties.">}}
{{< /classes >}}

{{< code-demo >}}
<div
  class="block-container background-image vh-25"
  data-background-image="https://picsum.photos/id/1012/1000/400"
  data-background-position="center center"
  data-background-size="cover"
  data-background-repeat="no-repeat">
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div
  class="block-container background-image vh-25"
  data-background-image="https://picsum.photos/id/1012/1000/400"
  data-background-position="center center"
  data-background-size="cover"
  data-background-repeat="no-repeat">
</div>
{{< /highlight >}}
{{< /code-markup >}}

{{< data >}}
{{< data-row attr="data-background-image" behavior="image path; no-repeat, position center, and size cover all default" >}}
{{< data-row attr="data-background-position" behavior="Overrides default." >}}
{{< data-row attr="data-background-size" behavior="Overrides default." >}}
{{< data-row attr="data-background-repeat" behavior="Overrides default." >}}
{{< /data >}}

{{% anchor name="gradient" level="3" %}}

<div class="mb-4">
{{% requires-js %}}
</div>

Create your own custom linear gradient using a class and data attributes! Yeah, that's right!

{{< classes result="true" >}}
{{< classes-row class="linear-gradient" result="Custom linear-gradient.">}}
{{< /classes >}}

{{< data >}}
{{< data-row attr="data-gradient-direction" behavior="Set the direction of your gradient." >}}
{{< data-row attr="data-gradient-start" behavior="Set the start of your gradient." >}}
{{< data-row attr="data-background-stop" behavior="Set the stop of your gradient." >}}
{{< data-row attr="data-background-fallback" behavior="" >}}
{{< /data >}}

{{< code-demo >}}
<div class="block-container">
  <div
    class="linear-gradient block vh-25"
    data-gradient-direction="to left"
    data-gradient-start="lavender 40%"
    data-gradient-stop="indigo"
    data-gradient-fallback="indigo">
  </div>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="block-container">
  <div
    class="linear-gradient block vh-25"
    data-gradient-direction="to left"
    data-gradient-start="lavender 40%"
    data-gradient-stop="indigo"
    data-gradient-fallback="indigo">
  </div>
</div>
{{< /highlight >}}
{{< /code-markup >}}

{{% anchor name="ratio" level="3" %}}


{{< classes result="true" >}}
{{< classes-row class="ratio-{1_1, 2_1, 4_3, 16_9 }" result="Set the size of an element equal to a common ratio: 1:1, 2:1, 4:3, 16:9">}}
{{< /classes >}}

{{< code-demo >}}
<div class="block-container tablet-up-2 laptop-up-4 blocks my-3 px-2">
  <div class="block">
    <div class="background--navy ratio-1_1 flex--center-content">
      <span class="text--white text--size-2xl">1:1</span>
    </div>
  </div>
  <div class="block">
    <div class="background--med-blue ratio-4_3 flex--center-content">
      <span class="text--white text--size-2xl">4:3</span>
    </div>
  </div>
  <div class="block">
    <div class="background--lightblue ratio-16_9 flex--center-content">
      <span class="text--size-2xl">16:9</span>
    </div>
  </div>
  <div class="block">
    <div class="background--skyblue ratio-2_1 flex--center-content">
      <span class="text--size-2xl">2:1</span>
    </div>
  </div>
</div>
{{< /code-demo >}}

<div class="mb-4">
{{< highlight html >}}
<div class="block-container tablet-up-2 laptop-up-4 blocks my-3 px-2">
  <div class="block">
    <div class="background--navy ratio-1_1 flex--center-content">
      <span class="text--white text--size-2xl">1:1</span>
    </div>
  </div>
  <div class="block">
    <div class="background--skyblue ratio-2_1 flex--center-content">
      <span class="text--size-2xl">2:1</span>
    </div>
  </div>
  <div class="block">
    <div class="background--med-blue ratio-4_3 flex--center-content">
      <span class="text--white text--size-2xl">4:3</span>
    </div>
  </div>
  <div class="block">
    <div class="background--lightblue ratio-16_9 flex--center-content">
      <span class="text--size-2xl">16:9</span>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>