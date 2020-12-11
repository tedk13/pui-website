---
title: Tabs
date: 2018-07-20T12:59:15-04:00
---
The content for a tabbed section needs to live inside the `.tabs` class. The tabs are radio inputs.
Be sure to add a specific `id` to the input and add a `for` to the label with a value that matches the
corresponding input. The label needs the class of `tab`.
The content for the tabs needs the class of `tab-panel` and it needs to be directly after the `tab` label.
The tabs themselves or the `.tab` have a specific width of `16rem` as well as a specific
height of `4rem`.

Work in progress. At a mobile resolution (below 768px) an active tab will collapse when clicked. 

<div class="tabs">
  <input type="radio" id="tab-input-a" name="tabs" checked>
  <label for="tab-input-a" class="tab">
    <i class="pi-folder-open" focusable="false" aria-hidden="hidden"></i> Tab 1
  </label>
  <div class="tab-panel">
    <img src="https://placeimg.com/640/480/animals?t=1565635383449" style="max-width: 100%;">
  </div>
  <input type="radio" id="tab-input-b" name="tabs">
  <label for="tab-input-b" class="tab">
    <i class="pi-folder" focusable="false" aria-hidden="hidden"></i> Tab 2
  </label>
  <div class="tab-panel">
    <img src="https://placeimg.com/640/480/animals?t=1565635267224" style="max-width: 100%;">
  </div>
  <input type="radio" id="tab-input-c" name="tabs">
  <label for="tab-input-c" class="tab">
    <i class="pi-users" focusable="false" aria-hidden="hidden"></i> Tab 3
  </label>
  <div class="tab-panel">
    <img src="https://placeimg.com/640/480/animals?t=1565635322782" style="max-width: 100%;">
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="tabs">
  <input type="radio" id="tab-input-a" name="tabs" checked>
<<<<<<< HEAD
  <label for="tab-input-a" class="tab">
    <i class="pi-folder-open" focusable="false" aria-hidden="hidden"></i> Tab 1
=======
  <label for="tab-input-a" class="pui-tab">
    <i class="pi-folder-open" focusable="false"></i> Tab 1
>>>>>>> rt-remove-aria-from-examples
  </label>
  <div class="tab-panel">
    <img src="https://placeimg.com/640/480/animals?t=1565635383449" style="max-width: 100%;">
  </div>
  <input type="radio" id="tab-input-b" name="tabs">
<<<<<<< HEAD
  <label for="tab-input-b" class="tab">
    <i class="pi-folder" focusable="false" aria-hidden="hidden"></i> Tab 2
=======
  <label for="tab-input-b" class="pui-tab">
    <i class="pi-folder" focusable="false"></i> Tab 2
>>>>>>> rt-remove-aria-from-examples
  </label>
  <div class="tab-panel">
    <img src="https://placeimg.com/640/480/animals?t=1565635267224" style="max-width: 100%;">
  </div>
  <input type="radio" id="tab-input-c" name="tabs">
<<<<<<< HEAD
  <label for="tab-input-c" class="tab">
    <i class="pi-users" focusable="false" aria-hidden="hidden"></i> Tab 3
=======
  <label for="tab-input-c" class="pui-tab">
    <i class="pi-users" focusable="false"></i> Tab 3
>>>>>>> rt-remove-aria-from-examples
  </label>
  <div class="tab-panel">
    <img src="https://placeimg.com/640/480/animals?t=1565635322782" style="max-width: 100%;">
  </div>
</div>
{{< /highlight >}}
</div>


{{< heading heading="h2" id="tabs-flat">}}
Tabs Flat
{{< /heading >}}

If you want the borders removed from the tabs, add the class `tab--flat` to the `tab`.

<div class="tabs tabs--flat">
  <input type="radio" id="tab-input-2a" name="tabs-2" checked>
  <label for="tab-input-2a" class="tab">
    <i class="pi-folder-open" focusable="false" aria-hidden="hidden"></i> Tab 1
  </label>
  <div class="tab-panel">
    <img src="https://placeimg.com/640/480/animals?t=1565635383449" style="max-width: 100%;">
  </div>
  <input type="radio" id="tab-input-2b" name="tabs-2">
  <label for="tab-input-2b" class="tab">
    <i class="pi-folder" focusable="false" aria-hidden="hidden"></i> Tab 2
  </label>
  <div class="tab-panel">
    <img src="https://placeimg.com/640/480/animals?t=1565635267224" style="max-width: 100%;">
  </div>
  <input type="radio" id="tab-input-2c" name="tabs-2">
  <label for="tab-input-2c" class="tab">
    <i class="pi-users" focusable="false" aria-hidden="hidden"></i> Tab 3
  </label>
  <div class="tab-panel">
    <img src="https://placeimg.com/640/480/animals?t=1565635322782" style="max-width: 100%;">
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="tabs tabs--flat">
  <input type="radio" id="tab-input-2a" name="tabs-2" checked>
  <label for="tab-input-2a" class="pui-tab">
    <i class="pi-folder-open" focusable="false"></i> Tab 1
  </label>
  <div class="tab-panel">
    <img src="https://placeimg.com/640/480/animals?t=1565635383449" style="max-width: 100%;">
  </div>
  <input type="radio" id="tab-input-2b" name="tabs-2">
  <label for="tab-input-2b" class="pui-tab">
    <i class="pi-folder" focusable="false"></i> Tab 2
  </label>
  <div class="tab-panel">
    <img src="https://placeimg.com/640/480/animals?t=1565635267224" style="max-width: 100%;">
  </div>
  <input type="radio" id="tab-input-2c" name="tabs-2">
  <label for="tab-input-2c" class="pui-tab">
    <i class="pi-users" focusable="false"></i> Tab 3
  </label>
  <div class="tab-panel">
    <img src="https://placeimg.com/640/480/animals?t=1565635322782" style="max-width: 100%;">
  </div>
</div>
{{< /highlight >}}
</div>



{{< heading heading="h2" id="tabs-flat-responsive ">}}
Tabs Flat-Responsive 
{{< /heading >}}

The flat tabs do not change at lower/higher screen resolutions. You can make the tabs respond, however, by adding
the class `responsive` to `tabs tabs--flat`. This will make the tabs stack at the mobile breakpoint and 
go back to the flat tab look above mobile.


<div class="tabs tabs--flat responsive">
  <input type="radio" id="tab-input-ar" name="tabs-r" checked>
  <label for="tab-input-ar" class="tab">
    <i class="pi-folder-open" focusable="false" aria-hidden="hidden"></i> Tab 1
  </label>
  <div class="tab-panel">
    <img src="https://placeimg.com/640/480/animals?t=1565635383449" style="max-width: 100%;">
  </div>
  <input type="radio" id="tab-input-br" name="tabs-r">
  <label for="tab-input-br" class="tab">
    <i class="pi-folder" focusable="false" aria-hidden="hidden"></i> Tab 2
  </label>
  <div class="tab-panel">
    <img src="https://placeimg.com/640/480/animals?t=1565635267224" style="max-width: 100%;">
  </div>
  <input type="radio" id="tab-input-cr" name="tabs-r">
  <label for="tab-input-cr" class="tab">
    <i class="pi-users" focusable="false" aria-hidden="hidden"></i> Tab 3
  </label>
  <div class="tab-panel">
    <img src="https://placeimg.com/640/480/animals?t=1565635322782" style="max-width: 100%;">
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="tabs tabs--flat responsive">
  <input type="radio" id="tab-input-ar" name="tabs-r" checked>
  <label for="tab-input-ar" class="pui-tab">
    <i class="pi-folder-open" focusable="false"></i> Tab 1
  </label>
  <div class="tab-panel">
    <img src="https://placeimg.com/640/480/animals?t=1565635383449" style="max-width: 100%;">
  </div>
  <input type="radio" id="tab-input-br" name="tabs-r">
  <label for="tab-input-br" class="pui-tab">
    <i class="pi-folder" focusable="false"></i> Tab 2
  </label>
  <div class="tab-panel">
    <img src="https://placeimg.com/640/480/animals?t=1565635267224" style="max-width: 100%;">
  </div>
  <input type="radio" id="tab-input-cr" name="tabs-r">
  <label for="tab-input-cr" class="pui-tab">
    <i class="pi-users" focusable="false"></i> Tab 3
  </label>
  <div class="tab-panel">
    <img src="https://placeimg.com/640/480/animals?t=1565635322782" style="max-width: 100%;">
  </div>
</div>
{{< /highlight >}}
</div>
