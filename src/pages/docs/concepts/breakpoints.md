---
layout: ../../../layouts/single.astro
title: Breakpoints
weight: 2
---

We built our framework to leverage as many screen sizes as possible. Our [responsive grid](/docs/layout/blocks/#Responsive-grids) and [display utilities](/docs/utilities/display/) are based on the following viewports.

Mobile should always be considered first, so additional breakpoints only need to be specified when something should look different in a larger viewport.

<table class="table modifiers table--no-hover">
    <thead>
    <tr>
        <th>Breakpoint </th>
        <th class="w-50">Label</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Breakpoint">
                <code>mobile</code>
            </td>
            <td data-label="Label">
            <code>>= 0</code> (mobile first 😃)
            </td>
        </tr>
        <tr>
            <td data-label="Breakpoint">
                <code>tablet</code>
            </td>
            <td data-label="Label">
                <code>>= 768px</code>
            </td>
        </tr>
        <tr>
            <td data-label="Breakpoint">
                <code>lg-tablet</code>
            </td>
            <td data-label="Label">
                <code>>= 991px</code>
            </td>
        </tr>
        <tr>
            <td data-label="Breakpoint">
                <code>laptop</code>
            </td>
            <td data-label="Label">
                <code>>= 1240px</code>
            </td>
        </tr>
        <tr>
            <td data-label="Breakpoint">
                <code>desktop</code>
            </td>
            <td data-label="Label">
                <code>>= 1800px</code>
            </td>
        </tr>
    </tbody>
</table>