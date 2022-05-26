---
title: Icon
weight: 3
---
{{% anchor name="Icon menu" %}}

Sometimes you need a smaller menu for a specific area or a smaller viewport. Try an icon menu!

{{< code-demo >}}
<div class="icon-menu">
  <div class="icon-menu__item">
    <a class="icon-menu__action">
      <i class="pi-edit"></i>
    </a>
  </div>
  <div class="icon-menu__item">
    <a class="icon-menu__action">
      <i class="pi-clock"></i>
    </a>
  </div>
  <div class="icon-menu__item">
    <a class="icon-menu__action">
      <i class="pi-trash"></i>
    </a>
  </div>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="icon-menu">
  <div class="icon-menu__item">
    <a href="" class="icon-menu__action">
      <i class="pi-edit"></i>
    </a>
  </div>
  <div class="icon-menu__item">
    <a href="" class="icon-menu__action">
      <i class="pi-clock"></i>
    </a>
  </div>
  <div class="icon-menu__item">
    <a href="" class="icon-menu__action">
      <i class="pi-trash"></i>
    </a>
  </div>
</div>
{{< /highlight >}}
{{< /code-markup >}} 

{{< modifiers >}}
{{< modifiers-row 
  modifier="icon-menu--vertical" 
  behavior="Shift the menu's orientation to vertical." 
>}}
{{< /modifiers >}}
