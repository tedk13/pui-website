---
title: Forms
weight: 1
---

Out of the box, our form fields have a margin-top added to them. This spacing should work just fine for smaller, simple forms. For larger,
responsive forms, we recommend that you utilize the block layout and our spacers to build the perfect form.

<i class="pi-warning text--orange"></i> **Note:** All of the following form elements must be nested inside the `form` class to get the desired look.

<form action="" class="form">
  <label for="first-name-a" class="form__field">First Name
    <input id="first-name-a" type="text" placeholder="First Name">
  </label>
  <label for="last-name-a" class="form__field">Last Name
    <input id="last-name-a" type="text" placeholder="Last Name">
  </label>
</form>

<div class="mt-3 mb-4">
{{< highlight html >}}
<form action="" class="form">
  <label for="first-name-a" class="form__field">First Name
    <input id="first-name-a" type="text" placeholder="First Name">
  </label>
  <label for="last-name-a" class="form__field">Last Name
    <input id="last-name-a" type="text" placeholder="Last Name">
  </label>
</form>
{{< /highlight >}}
</div>


## Fancy Forms

You want a fancy form that animates the `label`? You got it.
To get the animation, add the class `form__field--fancy` to the `form__field`.
You will also need to change the markup slightly. Instead of a `label` the `form__field` should now be a `div`
put the `label` under the `input` as a sibling of the `form__field` `div`. See markup below.

<i class="pi-warning text--orange"></i> **NOTE:** Firefox does not have a way to hide the date and time placeholder for those inputs. This style of form would
probably be best for a simple form that has text inputs.

<form action="" class="form">
  <div class="form__field form__field--fancy">
    <input id="first-name-b" type="text" required placeholder="Jane">
    <label for="first-name-b">First Name</label>
  </div>
  <div class="form__field form__field--fancy">
    <input id="last-name-b" type="text" required placeholder="Smith">
    <label for="last-name-b">Last Name</label>
  </div>
  <div class="form__field form__field--fancy">
    <input id="zipcode-b" type="tel" pattern="^\d{5,6}(?:[-\s]\d{4})?$" required placeholder="12345">
    <label for="zipcode-b">ZIP Code</label>
  </div>
  <div class="form__field form__field--fancy">
    <div class="form__select-wrapper">
      <select name="Option Select" id="option-b" required placeholder="Option">
        <option value=""></option>
        <option value="Option1">Option 1</option>
        <option value="Option2">Option 2</option>
        <option value="Option3">Option 3</option>
        <option value="Option4">Option 4</option>
        <option value="Option5">Option 5</option>
        <option value="Option6">Option 6</option>
      </select>
      <label for="option-b">Option</label>
    </div>
  </div>
</form>

<div class="mt-3 mb-4">
{{< highlight html >}}
<form action="" class="form">
  <div class="form__field form__field--fancy">
    <input id="first-name-b" type="text" required placeholder="Jane">
    <label for="first-name-b">First Name</label>
  </div>
  <div class="form__field form__field--fancy">
    <input id="last-name-b" type="text" required placeholder="Smith">
    <label for="last-name-b">Last Name</label>
  </div>
  <div class="form__field form__field--fancy">
    <input id="zipcode-b" type="tel" pattern="^\d{5,6}(?:[-\s]\d{4})?$" required placeholder="12345">
    <label for="zipcode-b">ZIP Code</label>
  </div>
  <div class="form__field form__field--fancy">
    <div class="form__select-wrapper">
      <select name="Option Select" id="option-b" required placeholder="Option">
        <option value=""></option>
        <option value="Option1">Option 1</option>
        <option value="Option2">Option 2</option>
        <option value="Option3">Option 3</option>
        <option value="Option4">Option 4</option>
        <option value="Option5">Option 5</option>
        <option value="Option6">Option 6</option>
      </select>
      <label for="option-b">Option</label>
    </div>
  </div>
</form>
{{< /highlight >}}
</div>


## Form Border

This modifier class adds a full border to each input within the form. Just add `form--bordered`

<form action="" class="form form--bordered block-container tablet-up-3 laptop-up-4 desktop-up-6 blocks mb-3 p-2">
  <div class="block">
    <label for="first-name-c" class="form__field">First Name
      <input id="first-name-c" type="text" placeholder="First Name">
    </label>
  </div>
  <div class="block">
    <label for="last-name-c" class="form__field">Last Name
      <input id="last-name-c" type="text" placeholder="Last Name">
    </label>
  </div>
  <div class="block">
    <label for="dob-c" class="form__field">Birthday
      <input id="dob-c" type="date">
    </label>
  </div>
  <div class="block">
    <label for="zipcode-c" class="form__field">ZIP Code
      <input id="zipcode-c" type="tel" placeholder="e.g.90012" pattern="^\d{5,6}(?:[-\s]\d{4})?$">
    </label>
  </div>
</form>

<div class="mt-3 mb-4">
{{< highlight html >}}
<form action="" class="form form--bordered block-container tablet-up-3 laptop-up-4 desktop-up-6 blocks mb-3 p-2">
  <div class="block">
    <label for="first-name-c" class="form__field">First Name
      <input id="first-name-c" type="text" placeholder="First Name">
    </label>
  </div>
  <div class="block">
    <label for="last-name-c" class="form__field">Last Name
      <input id="last-name-c" type="text" placeholder="Last Name">
    </label>
  </div>
  <div class="block">
    <label for="dob-c" class="form__field">Birthday
      <input id="dob-c" type="date">
    </label>
  </div>
  <div class="block">
    <label for="zipcode-c" class="form__field">ZIP Code
      <input id="zipcode-c" type="tel" placeholder="e.g.90012" pattern="^\d{5,6}(?:[-\s]\d{4})?$">
    </label>
  </div>
</form>
{{< /highlight >}}
</div>


## Form Rounded Border

This modifier class adds a full border with a `5rem` radius to each input within the form. Just add `form--rounded`.
If you want to give the label an indented look, we suggest moving the `form__field` class to a wrapping div containing 
both the `label` and `input` as siblings. This way, you can add something like `ml-2` to the label to align it closer to 
the padding of the rounded input. Checkout the markup below.

<form action="" class="form form--rounded block-container tablet-up-3 laptop-up-4 desktop-up-6 blocks mb-3 p-2">
  <div class="block form__field">
    <label class="ml-2" for="first-name-d">First Name</label>
    <input id="first-name-d" type="text" placeholder="First Name">
  </div>
  <div class="block form__field">
    <label class="ml-2" for="last-name-d">Last Name</label>
    <input id="last-name-d" type="text" placeholder="Last Name">
  </div>
  <div class="block form__field">
    <label class="ml-2" for="dob-d">Birthday</label>
    <input id="dob-d" type="date">
  </div>
  <div class="block form__field">
    <label class="ml-2" for="zipcode-d">ZIP Code</label>
    <input id="zipcode-d" type="tel" placeholder="e.g.90012" pattern="^\d{5,6}(?:[-\s]\d{4})?$">
  </div>
</form>

<div class="mt-3 mb-4">
{{< highlight html >}}
<form action="" class="form form--rounded block-container tablet-up-3 laptop-up-4 desktop-up-6 blocks mb-3 p-2">
  <div class="block form__field">
    <label class="ml-2" for="first-name-d">First Name</label>
    <input id="first-name-d" type="text" placeholder="First Name">
  </div>
  <div class="block form__field">
    <label class="ml-2" for="last-name-d">Last Name</label>
    <input id="last-name-d" type="text" placeholder="Last Name">
  </div>
  <div class="block form__field">
    <label class="ml-2" for="dob-d">Birthday</label>
    <input id="dob-d" type="date">
  </div>
  <div class="block form__field">
    <label class="ml-2" for="zipcode-d">ZIP Code</label>
    <input id="zipcode-d" type="tel" placeholder="e.g.90012" pattern="^\d{5,6}(?:[-\s]\d{4})?$">
  </div>
</form>
{{< /highlight >}}
</div>


## Form Light

Adding a `form--light` modifier gives the form a white theme. The text color and border colors are both white.

The light modifier works with [form--bordered](/docs/forms/forms/#form-border) and [form--rounded](/docs/forms/forms/#form-rounded-border).

<div class="background--navy p-3">
  <form action="" class="form form--light block-container tablet-up-3 laptop-up-4 blocks mb-3 p-2">
    <div class="block form__field">
      <label for="first-name">First Name</label>
      <input id="first-name" type="text" placeholder="First Name">
    </div>
    <div class="block form__field">
      <label for="last-name">Last Name</label>
      <input id="last-name" type="text" placeholder="Last Name">
    </div>
    <div class="block form__field">
      <label for="dob">Birthday</label>
      <input id="dob" type="date">
    </div>
    <div class="block form__field">
      <label for="zipcode">ZIP Code</label>
      <input id="zipcode" type="tel" placeholder="e.g.90012" pattern="^\d{5,6}(?:[-\s]\d{4})?$">
    </div>
  </form>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="background--navy p-3">
  <form action="" class="form form--light block-container tablet-up-3 laptop-up-4 blocks mb-3 p-2">
    <div class="block form__field">
      <label for="first-name">First Name</label>
      <input id="first-name" type="text" placeholder="First Name">
    </div>
    <div class="block form__field">
      <label for="last-name">Last Name</label>
      <input id="last-name" type="text" placeholder="Last Name">
    </div>
    <div class="block form__field">
      <label for="dob">Birthday</label>
      <input id="dob" type="date">
    </div>
    <div class="block form__field">
      <label for="zipcode">ZIP Code</label>
      <input id="zipcode" type="tel" placeholder="e.g.90012" pattern="^\d{5,6}(?:[-\s]\d{4})?$">
    </div>
  </form>
</div>
{{< /highlight >}}
</div>


## Error Styles

If there is an error on a specific input after submission, add the `error` class to the specific `form__field`. 

<i class="pi-warning text--orange"></i> **Note:** If you add the `error` class to a `form__field` that contains check boxes or radios, each input in that
field will receive the error styling. However, if you only want to highlight on specific check or radio, simply add
`error` to the proper input. This will give the icon as well as the corresponding label the error style.

<form action="" class="form block-container tablet-up-3 laptop-up-4 desktop-up-6 blocks mb-3 p-2">
  <div class="block">
    <label for="first-name-f" class="form__field">First Name
      <input id="first-name-f" type="text" placeholder="First Name">
    </label>
  </div>
  <div class="block">
    <label for="last-name-f" class="form__field error">Last Name
      <input id="last-name-f" type="text" placeholder="Last Name">
    </label>
  </div>
  <div class="block">
    <label for="dob-f" class="form__field">Birthday
      <input id="dob-f" type="date">
    </label>
  </div>
  <div class="block">
    <label for="zipcode-f" class="form__field">ZIP Code
      <input id="zipcode-f" type="tel" placeholder="e.g.90012" pattern="^\d{5,6}(?:[-\s]\d{4})?$">
    </label>
  </div>
  <div class="block">
    <fieldset class="form__field error">
      <legend>Error on entire fieldset</legend>
      <div class="form__option-group">
        <input class="form__checkbox" id="youcan-this-one-f" type="checkbox">
        <label for="youcan-this-one-f">
          <div class="input-icons">
            <i class='pi-circle'></i>
            <i class='pi-check pi-heavy'></i>
          </div>This
        </label>
        <input class="form__checkbox" id="youcan-that-one-f" type="checkbox">
        <label for="youcan-that-one-f">
          <div class="input-icons">
            <i class='pi-circle'></i>
            <i class='pi-check pi-heavy'></i>
          </div>That
        </label>
      </div>
    </fieldset>
    </div>
    <div class="block">
    <fieldset class="form__field">
      <legend>Error on individual input</legend>
      <div class="form__option-group">
        <input class="form__checkbox error" id="gender-this-one-f" type="checkbox">
        <label for="gender-this-one-f">
          <div class="input-icons">
            <i class='pi-circle'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          This One
        </label>
        <input class="form__checkbox" id="gender-that-one-f" type="checkbox">
        <label for="gender-that-one-f">
          <div class="input-icons">
            <i class='pi-circle'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          That One
        </label>
      </div>
    </fieldset>
  </div>
</form>

<div class="mt-3 mb-4">
{{< highlight html >}}
<form action="" class="form block-container tablet-up-3 laptop-up-4 desktop-up-6 blocks mb-3 p-2">
  <div class="block">
    <label for="first-name-f" class="form__field">First Name
      <input id="first-name-f" type="text" placeholder="First Name">
    </label>
  </div>
  <div class="block">
    <label for="last-name-f" class="form__field error">Last Name
      <input id="last-name-f" type="text" placeholder="Last Name">
    </label>
  </div>
  <div class="block">
    <label for="dob-f" class="form__field">Birthday
      <input id="dob-f" type="date">
    </label>
  </div>
  <div class="block">
    <label for="zipcode-f" class="form__field">ZIP Code
      <input id="zipcode-f" type="tel" placeholder="e.g.90012" pattern="^\d{5,6}(?:[-\s]\d{4})?$">
    </label>
  </div>
  <div class="block">
    <fieldset class="form__field error">
      <legend>Error on entire fieldset</legend>
      <div class="form__option-group">
        <input class="form__checkbox" id="youcan-this-one-f" type="checkbox">
        <label for="youcan-this-one-f">
          <div class="input-icons">
            <i class='pi-circle'></i>
            <i class='pi-check pi-heavy'></i>
          </div>This
        </label>
        <input class="form__checkbox" id="youcan-that-one-f" type="checkbox">
        <label for="youcan-that-one-f">
          <div class="input-icons">
            <i class='pi-circle'></i>
            <i class='pi-check pi-heavy'></i>
          </div>That
        </label>
      </div>
    </fieldset>
    </div>
    <div class="block">
    <fieldset class="form__field">
      <legend>Error on individual input</legend>
      <div class="form__option-group">
        <input class="form__checkbox error" id="gender-this-one-f" type="checkbox">
        <label for="gender-this-one-f">
          <div class="input-icons">
            <i class='pi-circle'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          This One
        </label>
        <input class="form__checkbox" id="gender-that-one-f" type="checkbox">
        <label for="gender-that-one-f">
          <div class="input-icons">
            <i class='pi-circle'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          That One
        </label>
      </div>
    </fieldset>
  </div>
</form>
{{< /highlight >}}
</div>


## Has Icon

If you would like the icon to be on the right side of the input, add the class `has-icon--right` to the `form__field` class.

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

<div class="mt-3 mb-4">
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
</div>


## Input - Checkbox

The platform check boxes require some specific markup to get the look you see in the example below.
In this case, be sure to add `<div class="input-icons">` your label. Inside this `<div class="input-icons">`
add the font icons for the look of the checkbox, in this case we need `<i class='pi-circle pi-lg'></i>` and
`<i class='pi-check'></i>`. Each of these need to be siblings, nested inside the `input-icons` wrapper. Be
sure to add the `pi-lg` class to the `pi-circle` icon. This way, the circle will be large enough to allow the
checkmark to fit properly. You can try different sizes for the icons by using the font icons [size utilities](/section-icons.html#icons-sizing). 

You can wrap the inputs and labels in the class `form__option-group`. This class will ensure the proper top margin,
consistent with the rest of the form elements. It also allows the inputs inside the field to wrap using `display: flex`
 and `flex-wrap: wrap`. If you do not want the items to wrap, but rather look like block level elements, you can simplay add
different utility classes to the `form__option-group` wrapper. In this case, `flex--column` and `flex--nowrap`.

<i class="pi-warning text--orange"></i> **Note:** For better semantics, it would be best to wrap the check boxes in a `fieldset` using this element as your
`form__field` then adding a `legend`. See the example below.


<form action="" class="form block-container">
  <div class="block block-5">
    <fieldset class="form__field">
      <legend>Choose</legend>
      <div class="form__option-group">
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
        <input id="choose-that-one-2" type="checkbox">
        <label for="choose-that-one-2">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          Option 3
        </label>
        <input id="choose-that-one-3" type="checkbox">
        <label for="choose-that-one-3">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          Option 4
        </label>
      </div>
    </fieldset>
  </div>
</form>

<div class="mt-3 mb-4">
{{< highlight html >}}
<form action="" class="form block-container">
  <div class="block block-5">
    <fieldset class="form__field">
      <legend>Choose</legend>
      <div class="form__option-group">
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
        <input id="choose-that-one-2" type="checkbox">
        <label for="choose-that-one-2">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          Option 3
        </label>
        <input id="choose-that-one-3" type="checkbox">
        <label for="choose-that-one-3">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          Option 4
        </label>
      </div>
    </fieldset>
  </div>
</form>
{{< /highlight >}}
</div>


## Input - Radio

Radio buttons in platform UI are almost identical to how the check boxes work. Only different here is the input type
and the font icon that shows when the input is checked.

The platform radios require some specific markup to get the look you see in the example below.
In this case, be sure to add `<div class="input-icons">` your label. Inside this `<div class="input-icons">`
add the font icons for the look of the radio, in this case we need `<i class='pi-circle pi-lg'></i>` and
`<i class='pi-circle-solid'></i>`. Each of these need to be siblings, nested inside the `input-icons` wrapper. Be
sure to add the `pi-lg` class to the `pi-circle` icon. This way, the circle will be large enough to allow the
dot to fit properly. You can try different sizes for the icons by using the font icons [size utilities](/section-icons.html#icons-sizing). 

You can wrap the inputs and labels in the class `form__option-group`. This class will ensure the proper top margin,
consistent with the rest of the form elements. It also allows the inputs inside the field to wrap using `display: flex`
 and `flex-wrap: wrap`. If you do not want the items to wrap, but rather look like block level elements, you can simplay add
different utility classes to the `form__option-group` wrapper. In this case, `flex--column` and `flex--nowrap`.

<i class="pi-warning text--orange"></i> **Note:** For better semantics, it would be best to wrap the radios in a `fieldset` using this element as your
`form__field` then adding a `legend`. See the example below.


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

<div class="mt-3 mb-4">
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
</div>


## Select

To get this look you see in the example below, be sure to wrap your `select` in the class, `form__select-wrapper`.
This allows for the angle down arrow to show. We're using a pseudo element to create the angle down arrow here. Since
you can not add a pseudo element to a `select` we wrapped it in a `div`. The class, `form__select-wrapper` also 
allows for consistent spacing with the other form elements. If you wish to have a different arrow, you can remove the 
`form__select-wrapper` class but be sure to add the proper top margin to the element you use to wrap your `select`.


<form action="" class="form block-container">
  <div class="block block-4">
    <label for="Option" class="form__field">Option
      <div class="form__select-wrapper">
        <select name="Option Select" id="Option">
          <option value="Option1">Option 1</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
          <option value="Option4">Option 4</option>
          <option value="Option5">Option 5</option>
          <option value="Option6">Option 6</option>
        </select>
      </div>
    </label>
  </div>
</form>

<div class="mt-3 mb-4">
{{< highlight html >}}
<form action="" class="form block-container">
  <div class="block block-4">
    <label for="option" class="form__field">Option
      <div class="form__select-wrapper">
        <select name="Option Select" id="option">
          <option value="Option1">Option 1</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
          <option value="Option4">Option 4</option>
          <option value="Option5">Option 5</option>
          <option value="Option6">Option 6</option>
        </select>
      </div>
    </label>
  </div>
</form>
{{< /highlight >}}
</div>


## Putting it Together

Here's an example of a larger responsive form using the block layout.

<form action="" class="form block-container tablet-up-2 lg-tablet-up-3 laptop-up-4 desktop-up-6 blocks mb-3 p-2">
  <div class="block">
    <label for="first-name-h" class="form__field">First Name
      <input id="first-name-h" type="text" placeholder="First Name">
    </label>
  </div>
  <div class="block">
    <label for="last-name-h" class="form__field">Last Name
      <input id="last-name-h" type="text" placeholder="Last Name">
    </label>
  </div>
  <div class="block">
    <label for="dob-h" class="form__field">Birthday
      <input id="dob-h" type="date">
    </label>
  </div>
  <div class="block">
    <label for="zipcode-h" class="form__field">ZIP Code
      <input id="zipcode-h" type="tel" placeholder="e.g.90012" pattern="^\d{5,6}(?:[-\s]\d{4})?$">
    </label>
  </div>
  <div class="block">
    <fieldset class="form__field">
      <legend>Choose</legend>
      <div class="form__option-group">
        <input class="form__checkbox" id="gender-this-one-h" type="checkbox">
        <label for="gender-this-one-h">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          This One
        </label>
        <input class="form__checkbox" id="gender-that-one-h" type="checkbox">
        <label for="gender-that-one-h">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          That One
        </label>
      </div>
    </fieldset>
  </div>
  <div class="block">
    <fieldset class="form__field">
      <legend>Gender</legend>
      <div class="form__option-group">
        <input class="form__radio" id="gender-male-h" type="radio" name="gender">
        <label for="gender-male-h">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-circle-solid'></i>
          </div>
          Male
        </label>
        <input class="form__radio" id="gender-female-h" type="radio" name="gender">
        <label for="gender-female-h">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-circle-solid'></i>
          </div>
          Female
        </label>
      </div>
    </fieldset>
  </div>
  <div class="block">
    <label for="option-h" class="form__field">Option
      <div class="form__select-wrapper">
        <select name="Option Select" id="option-h">
          <option value="Option1">Option 1</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
          <option value="Option4">Option 4</option>
          <option value="Option5">Option 5</option>
          <option value="Option6">Option 6</option>
        </select>
      </div>
    </label>
  </div>
  <div class="block">
    <fieldset class="form__field">
      <legend>Are You</legend>
      <div class="toggle">
        <div class="toggle__content">
          <input id="tall-h" type="radio" checked name="height">
          <label for="tall-h"><i class='pi-check pi-heavy'></i> Tall</label>
        </div>
        <div class="toggle__content">
          <input id="short-h" type="radio" name="height">
          <label for="short-h"><i class='pi-check pi-heavy'></i> Short</label>
        </div>
      </div>
    </fieldset>
  </div>
  <div class="block">
    <label for="date-h" class="form__field has-icon">Date
      <input id="date-h" type="date">
      <i class="pi-calendar text--skyblue background--white"></i>
    </label>
  </div>
  <div class="block">
    <label for="time-h" class="form__field">Your Time
      <input id="time-h" type="time" placeholder="10:00 AM">
    </label>
  </div>
  <div class="block">
    <div class="form__field form__button-group">
      <button class="button button--lg">Submit</button>
    </div>
  </div>
</form>

<div class="mt-3 mb-4">
{{< highlight html >}}
<form action="" class="form block-container tablet-up-2 lg-tablet-up-3 laptop-up-4 desktop-up-6 blocks mb-3 p-2">
  <div class="block">
    <label for="first-name-h" class="form__field">First Name
      <input id="first-name-h" type="text" placeholder="First Name">
    </label>
  </div>
  <div class="block">
    <label for="last-name-h" class="form__field">Last Name
      <input id="last-name-h" type="text" placeholder="Last Name">
    </label>
  </div>
  <div class="block">
    <label for="dob-h" class="form__field">Birthday
      <input id="dob-h" type="date">
    </label>
  </div>
  <div class="block">
    <label for="zipcode-h" class="form__field">ZIP Code
      <input id="zipcode-h" type="tel" placeholder="e.g.90012" pattern="^\d{5,6}(?:[-\s]\d{4})?$">
    </label>
  </div>
  <div class="block">
    <fieldset class="form__field">
      <legend>Choose</legend>
      <div class="form__option-group">
        <input class="form__checkbox" id="gender-this-one-h" type="checkbox">
        <label for="gender-this-one-h">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          This One
        </label>
        <input class="form__checkbox" id="gender-that-one-h" type="checkbox">
        <label for="gender-that-one-h">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-check pi-heavy'></i>
          </div>
          That One
        </label>
      </div>
    </fieldset>
  </div>
  <div class="block">
    <fieldset class="form__field">
      <legend>Gender</legend>
      <div class="form__option-group">
        <input class="form__radio" id="gender-male-h" type="radio" name="gender">
        <label for="gender-male-h">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-circle-solid'></i>
          </div>
          Male
        </label>
        <input class="form__radio" id="gender-female-h" type="radio" name="gender">
        <label for="gender-female-h">
          <div class="input-icons">
            <i class='pi-circle pi-lg'></i>
            <i class='pi-circle-solid'></i>
          </div>
          Female
        </label>
      </div>
    </fieldset>
  </div>
  <div class="block">
    <label for="option-h" class="form__field">Option
      <div class="form__select-wrapper">
        <select name="Option Select" id="option-h">
          <option value="Option1">Option 1</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
          <option value="Option4">Option 4</option>
          <option value="Option5">Option 5</option>
          <option value="Option6">Option 6</option>
        </select>
      </div>
    </label>
  </div>
  <div class="block">
    <fieldset class="form__field">
      <legend>Are You</legend>
      <div class="toggle">
        <div class="toggle__content">
          <input id="tall-h" type="radio" checked name="height">
          <label for="tall-h"><i class='pi-check pi-heavy'></i> Tall</label>
        </div>
        <div class="toggle__content">
          <input id="short-h" type="radio" name="height">
          <label for="short-h"><i class='pi-check pi-heavy'></i> Short</label>
        </div>
      </div>
    </fieldset>
  </div>
  <div class="block">
    <label for="date-h" class="form__field has-icon">Date
      <input id="date-h" type="date">
      <i class="pi-calendar text--skyblue background--white"></i>
    </label>
  </div>
  <div class="block">
    <label for="time-h" class="form__field">Your Time
      <input id="time-h" type="time" placeholder="10:00 AM">
    </label>
  </div>
  <div class="block">
    <div class="form__field form__button-group">
      <button class="button button--lg">Submit</button>
    </div>
  </div>
</form>
{{< /highlight >}}
</div>

## Togles

To create this toggle effect around two radio buttons, you need to wrap the set of inputs in a `<div class="pui-toggle">`.
From there, be sure to add your input, followed by its label. These elements should be siblings of one another and
children of the `pui-toggle`. Each pair of inputs and children should be siblings of one another.

From a semantic perspective, we would recommend _not_ using check boxes inside the toggle. The reason being that one option needs to be checked for the toggle to make sense. Also, the toggle works so that you could never select both options.

We put the toggle inside a `fieldset` in the example below, but this is not required for the toggle to work.

<form class="pui-form">
  <div class="block-container">
    <fieldset class="pui-form__field block-4">
      <legend>Are You</legend>
      <div class="pui-toggle">
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

<div class="mt-3 mb-4">
{{< highlight html >}}
  <form class="pui-form">
    <div class="block-container">
      <fieldset class="pui-form__field block-4">
        <legend>Are You</legend>
        <div class="pui-toggle">
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
</div>


### Toggle Option Disabled

If the toggle needs to be disabled, simply add the attribute `disabled` to a `fieldset` wrapping the `pui-toggle`. See the markup below.

<form class="pui-form">
  <div class="block-container">
    <fieldset class="pui-form__field block-4" disabled>
      <legend>Are You</legend>
      <div class="pui-toggle">
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

<div class="mt-3 mb-4">
{{< highlight html >}}
  <form class="pui-form">
    <div class="block-container">
      <fieldset class="pui-form__field block-4" disabled>
        <legend>Are You</legend>
        <div class="pui-toggle">
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
</div>

### Toggle Option Small
 
For a smaller toggle component, use the class `toggle-small`. This is a great option for a checkbox. The idea for this toggle is to 
use only one input and label. Think of it as a light switch. One item, on or off. 

<form class="pui-form">
  <div class="block-container">
    <fieldset class="pui-form__field block-4">
      <legend>Active</legend>
      <div class="toggle-small">
        <input id="active" type="checkbox" name="active">
        <label for="active">
        </label>
      </div>
    </div>
  </fieldset>
</form>

<div class="mt-3 mb-4">
{{< highlight html >}}
  <form class="pui-form">
    <div class="block-container">
      <fieldset class="pui-form__field block-4">
        <legend>Active</legend>
        <div class="toggle-small">
          <input id="active" type="checkbox" name="active">
          <label for="active">
          </label>
        </div>
      </div>
    </fieldset>
  </form>
{{< /highlight >}}
</div>