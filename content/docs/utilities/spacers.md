---
title: Spacers
date: 2018-07-20T12:59:15-04:00
---

Platform UI provides padding and margin utilities for most scenarios based on it's spacer map;

| Direction      |                 |                  |                  |                  |                  |                  |                  |
| -------------- | --------------- | ---------------- | ---------------- | ---------------- | ---------------- | ---------------- | ---------------- |
| location       | surrounding     | top              | bottom           | left             | right            | x-axis           | y-axis           |
| padding prefix | <code>p-</code> | <code>pt-</code> | <code>pb-</code> | <code>pl-</code> | <code>pr-</code> | <code>px-</code> | <code>py-</code> |
| margin prefix  | <code>m-</code> | <code>mt-</code> | <code>mb-</code> | <code>ml-</code> | <code>mr-</code> | <code>mx-</code> | <code>my-</code> |

| Spacer Number values map |                   |                     |                    |                   |                   |                   |                     |                     |
| ------------------------ | ----------------- | ------------------- | ------------------ | ----------------- | ----------------- | ----------------- | ------------------- | ------------------- |
| number value             | 0                 | 1                   | 2                  | 3                 | 4                 | 5                 | 6                   | 7                   |
| rem value                | <code>0rem</code> | <code>.25rem</code> | <code>.5rem</code> | <code>1rem</code> | <code>2rem</code> | <code>3rem</code> | <code>4.5rem</code> | <code>6.5rem</code> |

Usage: `{padding, p or margin, m }{ direction if not surrounding: t, b, l, r, x, y }-{ number }`

Example:
{{< highlight scss >}}
.pl-2 // padding-left: .5rem;
.mx-3 // margin: 0 1rem;
{{< /highlight >}}

## Responsive

Currently we only have responsive spacers for mobile. We are also only using them for `margin-bottom` and `padding-bottom`.

Example:
{{< highlight scss >}}
.mobile-mb-3 // margin-bottom: 1rem
.mobile-pb-3 // padding-bottom: 1rem
{{< /highlight >}}
