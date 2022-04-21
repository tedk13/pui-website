---
title: Forms
description: Documentation for Platform UI's form components and elements.
weight: 1
---
{{% anchor name="form" %}}

Out of the box, our form fields have a margin-top added to them. This spacing should work just fine for smaller, simple forms. For larger,
responsive forms, we recommend that you utilize the block layout and our spacers to build the perfect form.

{{% anchor name="form level modifiers" %}}

All of the following form elements must be nested inside the `form` class to get the desired look.

{{< modifiers >}}
<tr>
  <td data-label="Base">
    <code>form</code>
  </td>
  <td data-label="Modifier">
    <code>form--fancy</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    Adds placeholder/label animation
  </td>
</tr><tr>
  <td data-label="Base">
    <code>form</code>
  </td>
  <td data-label="Modifier">
    <code>form--bordered</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    Add input borders.
  </td>
</tr><tr>
  <td data-label="Base">
    <code>form</code>
  </td>
  <td data-label="Modifier">
    <code>form--rounded</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    Adds circular borders to inputs.
  </td>
</tr><tr>
  <td data-label="Base">
    <code>form</code>
  </td>
  <td data-label="Modifier">
    <code>form--light</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    what the hell does this do?
  </td>
</tr>
{{< /modifiers >}}

{{% anchor name="error styles" %}}

If there is an error on a specific input after submission, add the `error` class to the specific `form__field`. 

If you add the `error` class to a `form__field` that contains check boxes or radios, each input in that
field will receive the error styling. However, if you only want to highlight on specific check or radio, simply add
`error` to the proper input. This will give the icon as well as the corresponding label the error style.

{{< code-demo >}}
<form class="form my-4">
  <div class="form__field error">
    <input type="text">
  </div>
</form>
{{< /code-demo >}}


{{% anchor name="has icon" %}}

If you would like the icon to be on the right side of the input, add the class `has-icon--right` to the `form__field` class.

{{< code-demo >}}
<form class="form block-container tablet-up-3 laptop-up-4 desktop-up-6 blocks mb-3 p-2 my-2">
  <div class="block">
    <label for="dob-g" class="form__field has-icon--right">Birthday
      <input id="dob-g" type="date">
      <i class="pi-calendar background--white"></i>
    </label>
  </div>
  <div class="block">
    <label for="date-g" class="form__field has-icon">Date
      <input id="date-g" type="date">
      <i class="pi-calendar text--med-blue background--white"></i>
    </label>
  </div>
  <div class="block">
    <label for="time-g" class="form__field has-icon--right">Your Time
      <input id="time-g" type="time" placeholder="10:00 AM">
      <i class="pi-clock"></i>
    </label>
  </div>
  <div class="block">
    <div class="form__field form__button-group">
      <button class="button button--md p-2">Submit</button>
    </div>
  </div>
</form>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<form action="" class="form block-container tablet-up-3 laptop-up-4 desktop-up-6 blocks mb-3 p-2">
  <div class="block">
    <label for="dob-g" class="form__field has-icon--right">Birthday
      <input id="dob-g" type="date">
      <i class="pi-calendar background--white"></i>
    </label>
  </div>
  <div class="block">
    <label for="date-g" class="form__field has-icon">Date
      <input id="date-g" type="date">
      <i class="pi-calendar text--med-blue background--white"></i>
    </label>
  </div>
  <div class="block">
    <label for="time-g" class="form__field has-icon--right">Your Time
      <input id="time-g" type="time" placeholder="10:00 AM">
      <i class="pi-clock"></i>
    </label>
  </div>
  <div class="block">
    <div class="form__field form__button-group">
      <button class="button button--lg">Submit</button>
    </div>
  </div>
</form>
{{< /highlight >}}
{{< /code-markup >}}

{{% anchor name="checkbox" %}}

For better semantics, it would be best to wrap the check boxes in a `fieldset` using this element as your `form__field` then adding a `legend`. See the example below.

{{< code-demo >}}
<form class="form block-container">
  <div class="block block-5">
    <fieldset class="form__field">
      <legend>Choose</legend>
        <input id="choose-this-one" type="checkbox">
        <label for="choose-this-one">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          Option 1
        </label>
        <input id="choose-that-one" type="checkbox">
        <label for="choose-that-one">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          Option 2
        </label>   
    </fieldset>
  </div>
</form>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<form class="form block-container">
  <div class="block block-5">
    <fieldset class="form__field">
      <legend>Choose</legend>
        <input id="choose-this-one" type="checkbox">
        <label for="choose-this-one">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          Option 1
        </label>
        <input id="choose-that-one" type="checkbox">
        <label for="choose-that-one">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          Option 2
        </label>   
    </fieldset>
  </div>
</form>
{{< /highlight >}}
{{< /code-markup >}}


{{% anchor name="radio" %}}

For better semantics, it would be best to wrap the radios in a `fieldset` using this element as your
`form__field` then adding a `legend`. 

{{< code-demo >}}
<form action="" class="form block-container">
  <div class="block block-4">
    <fieldset class="form__field">
      <legend>Pick one</legend>
      <div class="form__option-group">
        <input id="choose-big" type="radio" name="choose-one">
        <label for="choose-big">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-circle-solid'></i>
          </div>
          Big
        </label>
        <input id="choose-small" type="radio" name="choose-one">
        <label for="choose-small">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-circle-solid'></i>
          </div>
          Small
        </label>
        <input id="choose-bigger" type="radio" name="choose-one">
        <label for="choose-bigger">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-circle-solid'></i>
          </div>
          Bigger
        </label>
        <input id="choose-smaller" type="radio" name="choose-one">
        <label for="choose-smaller">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-circle-solid'></i>
          </div>
          Smaller
        </label>
      </div>
    </fieldset>
  </div>
</form>

{{< /code-demo >}}


{{< code-markup >}}
{{< highlight html >}}
<form action="" class="form block-container">
  <div class="block block-4">
    <fieldset class="form__field">
      <legend>Pick one</legend>
      <div class="form__option-group">
        <input id="choose-big" type="radio" name="choose-one">
        <label for="choose-big">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-circle-solid'></i>
          </div>
          Big
        </label>
        <input id="choose-small" type="radio" name="choose-one">
        <label for="choose-small">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-circle-solid'></i>
          </div>
          Small
        </label>
        <input id="choose-bigger" type="radio" name="choose-one">
        <label for="choose-bigger">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-circle-solid'></i>
          </div>
          Bigger
        </label>
        <input id="choose-smaller" type="radio" name="choose-one">
        <label for="choose-smaller">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-circle-solid'></i>
          </div>
          Smaller
        </label>
      </div>
    </fieldset>
  </div>
</form>
{{< /highlight >}}
{{< /code-markup >}}


{{% anchor name="select" %}}


{{< code-demo >}}
<form action="" class="form block-container">
  <div class="block block-4">
    <label for="Option" class="form__field">Option
      <div class="form__select-wrapper">
        <select name="Option Select" id="Option">
          <option value="Option1">Option 1</option>
          <option value="Option2">Option 2</option>
        </select>
      </div>
    </label>
  </div>
</form>
{{< /code-demo >}}


{{< code-markup >}}
{{< highlight html >}}
<form action="" class="form block-container">
  <div class="block block-4">
    <label for="option" class="form__field">Option
      <div class="form__select-wrapper">
        <select name="Option Select" id="option">
          <option value="Option1">Option 1</option>
          <option value="Option2">Option 2</option>
        </select>
      </div>
    </label>
  </div>
</form>
{{< /highlight >}}
{{< /code-markup >}}

{{% anchor name="toggle" %}}

{{< code-demo >}}
<form class="form">
  <div class="block-container">
    <fieldset class="form__field block-4">
      <legend>Are You</legend>
      <div class="toggle">
        <input id="Tall-2" type="radio" checked name="height">
        <label for="Tall-2">
          <i class='pi-check pi-heavy'></i> Tall
        </label>
        <input id="Short-2" type="radio" name="height">
        <label for="Short-2">
          <i class='pi-check pi-heavy'></i> Short
        </label>
      </div>
    </div>
  </fieldset>
</form>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
  <form class="form">
    <div class="block-container">
      <fieldset class="form__field block-4">
        <legend>Are You</legend>
        <div class="toggle">
          <input id="Tall-2" type="radio" checked name="height">
          <label for="Tall-2">
            <i class='pi-check pi-heavy'></i> Tall
          </label>
          <input id="Short-2" type="radio" name="height">
          <label for="Short-2">
            <i class='pi-check pi-heavy'></i> Short
          </label>
        </div>
      </div>
    </fieldset>
  </form>
{{< /highlight >}}
{{< /code-markup >}}

{{% anchor name="switch" level="3" %}}
 
A variation of the toggle, for a smaller widget, use the class `switch`. This is a great option for a checkbox. 


{{< code-demo >}}
<form class="form">
  <div class="block-container">
    <fieldset class="form__field block-4">
      <legend>Active</legend>
      <div class="switch">
        <input id="active" type="checkbox" name="active">
        <label for="active">
        </label>
      </div>
    </div>
  </fieldset>
</form>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
  <form class="form">
    <div class="block-container">
      <fieldset class="form__field block-4">
        <legend></legend>
        <div class="toggle-small">
          <input id="active" type="checkbox" name="active">
          <label for="active">
          </label>
        </div>
      </div>
    </fieldset>
  </form>
{{< /highlight >}}
{{< /code-markup >}}