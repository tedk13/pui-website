---
title: Position
date: 2018-07-20T12:59:15-04:00
---

If you need to postion something absolute you can use the following classes.

Remember that when positioning an element absolute, the element will position
according to the closest parent element that has `position: relative`. For this
you can use the class `pos-rel` on the parent element you want to position the
absolute element to.

| Class               | CSS Attribute                              |
| ------------------- | ------------------------------------------ |
| `pos-rel`           | `position: relative`                       |
| `pos-abs`           | `position: absolute`                       |
| `pos-fix`           | `position: fixed`                          |
| `pos-stick`         | `position: sticky`                         |
| `pin-top`           | `top: 0`                                   |
| `pin-right`         | `right: 0`                                 |
| `pin-bottom`        | `bottom: 0`                                |
| `pin-left`          | `left: 0`                                  |
| `pin-center-top`    | `top: 50%; transform: translateY(-50%)`    |
| `pin-center-right`  | `right: 50%; transform: translateX(-50%)`  |
| `pin-center-bottom` | `bottom: 50%; transform: translateY(-50%)` |
| `pin-center-left`   | `left: 50%; transform: translateX(-50%)`   |