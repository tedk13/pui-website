---
title: Drawer
date: 2018-07-20T12:59:15-04:00
---

Drawers slide up or in-from-right.

There are some key classes you need for the drawer to work properly. Be sure to use `drawer drawer--closed` on each drawer.
From this point, you want to add the proper animation class to the drawer. In the examples below, we have the classes set for the
direction of the drawer animation. Now all you need to do is toggle the class `drawer--closed` to show or hide the drawer.

You can have a drawer open from the bottom by using the class `drawer-bottom`. To have a drawer open from the right
use `drawer-right`.

If you want a smaller drawer you can add the class `drawer--single-row`. This class has a min-height and is
best used in cases where less content will be needed.



<div class="block-container">
  <button class="button button--post button--lg drawer__open mr-2" data-drawer="default">Toggle default drawer</button>
  <button class="button button--post button--lg drawer__open" data-drawer="single-row">Toggle single row drawer</button>
</div>
<div id="default" class="drawer drawer-bottom drawer--closed animated slideInUp fastest">
  <div class="drawer__inner animated slideInUp fastest">
    <div class="drawer__header">
      <button class="button drawer__close" data-drawer="default">Close <i class="pi-times" aria-hidden="true"></i></button>
      <h3 class="mb-2">Header.</h3>
    </div>
    <div class="drawer__content">
      <p>Content.</p>
    </div>
  </div>
</div>
<div id="single-row" class="drawer drawer-bottom drawer--single-row drawer--closed animated slideInUp fastest">
  <div class="drawer__inner animated slideInUp fastest">
    <div class="drawer__content">
      <button class="button drawer__close" data-drawer="single-row">Close <i class="pi-times" aria-hidden="true"></i></button>
      <p>Single row drawer without a header.</p>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
 <div class="block-container">
   <button class="button button--post button--lg drawer__open mr-2" data-drawer="default">Toggle default drawer</button>
   <button class="button button--post button--lg drawer__open" data-drawer="single-row">Toggle single row drawer</button>
 </div>
 <div id="default" class="drawer drawer-bottom drawer--closed animated slideInUp fastest">
   <div class="drawer__inner animated slideInUp fastest">
     <div class="drawer__header">
       <button class="button drawer__close" data-drawer="default">Close <i class="pi-times" aria-hidden="true"></i></button>
       <h3 class="mb-2">Header.</h3>
     </div>
     <div class="drawer__content">
       <p>Content.</p>
     </div>
   </div>
 </div>
 <div id="single-row" class="drawer drawer-bottom drawer--single-row drawer--closed animated slideInUp fastest">
   <div class="drawer__inner animated slideInUp fastest">
     <div class="drawer__content">
       <button class="button drawer__close" data-drawer="single-row">Close <i class="pi-times" aria-hidden="true"></i></button>
       <p>Single row drawer without a header.</p>
     </div>
   </div>
 </div>
{{< /highlight >}}
</div>


{{< heading heading="h2" id="drawer-right">}}
Drawer Right
{{< /heading >}}

This Drawer slides in from the right.


<button class="button button--post button--lg drawer__open" data-drawer="right">Toggle right drawer</button>

 <div id="right" class="drawer drawer-right slide-right-enter-active drawer--closed background-note pt-5 pb-3 px-4">
   <div class="flex flex--align-center flex--justify-between pb-3 mb-2">
     <div class="flex flex--align-center">
       <button class="button button--secondary js-toggle-form">
         <i class="pi-plus"></i>
       </button>
       <h2 class="ml-2 my-0 text-navy">Drawer Right</h2>
     </div>
     <button class="button drawer__close" data-drawer="right">Close <i class="pi-times" aria-hidden="true"></i></button>
   </div>
 </div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<button class="button button--post button--lg drawer__open" data-drawer="right">Toggle right drawer</button>

 <div id="right" class="drawer drawer-right slide-right-enter-active drawer--closed background-note pt-5 pb-3 px-4">
   <div class="flex flex--align-center flex--justify-between pb-3 mb-2">
     <div class="flex flex--align-center">
       <button class="button button--secondary js-toggle-form">
         <i class="pi-plus"></i>
       </button>
       <h2 class="ml-2 my-0 text-navy">Drawer Right</h2>
     </div>
     <button class="button drawer__close" data-drawer="right">Close <i class="pi-times" aria-hidden="true"></i></button>
   </div>
 </div>
 {{< /highlight >}}
 </div>


{{< heading heading="h2" id="drawer-left">}}
Drawer Left
{{< /heading >}}

This Drawer slides in from the left.


<button class="button button--post button--lg drawer__open" data-drawer="left">Toggle left drawer</button>

 <div id="left" class="drawer drawer-left slide-left-enter-active drawer--closed background-note pt-5 pb-3 px-4">
   <div class="flex flex--align-center flex--justify-between pb-3 mb-2">
     <div class="flex flex--align-center">
       <button class="button button--secondary js-toggle-form">
         <i class="pi-plus"></i>
       </button>
       <h2 class="ml-2 my-0 text-navy">Drawer Left</h2>
     </div>
     <button class="button drawer__close" data-drawer="left">Close <i class="pi-times" aria-hidden="true"></i></button>
   </div>
 </div>

<div class="mt-3 mb-4">
 {{< highlight html >}}
<button class="button button--post button--lg drawer__open" data-drawer="left">Toggle left drawer</button>

 <div id="left" class="drawer drawer-left slide-left-enter-active drawer--closed background-note pt-5 pb-3 px-4">
   <div class="flex flex--align-center flex--justify-between pb-3 mb-2">
     <div class="flex flex--align-center">
       <button class="button button--secondary js-toggle-form">
         <i class="pi-plus"></i>
       </button>
       <h2 class="ml-2 my-0 text-navy">Drawer Left</h2>
     </div>
     <button class="button drawer__close" data-drawer="left">Close <i class="pi-times" aria-hidden="true"></i></button>
   </div>
 </div>
{{< /highlight >}}
</div>

