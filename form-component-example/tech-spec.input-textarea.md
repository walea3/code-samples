# Input & Textarea

Input & Textarea elements in NEL.

## Internal Structure

### Markup

Valid state

```html
<!-- input -->
<div class="nel-input">
  <!-- optional - prefix -->
  <div class="nel-input-prefix">{text|element}</div>

  <input
    class="nel-input-control"
    aria-invalid="{bool}"
    aria-disabled="{bool}"
    aria-describedby="{id by user}"
    ...
  />

  <!-- optional - suffix -->
  <div class="nel-input-suffix">{text|element}</div>
</div>

<!-- input w/ label -->
<div class="nel-container">
  <label>...</label>
  <div class="nel-input">
    <input class="nel-input-control" ... />
  </div>
</div>

<!-- textarea -->
<textarea
  class="nel-textarea"
  aria-invalid="{bool}"
  aria-disabled="{bool}"
></textarea>
```

### Styling concerns

- states
  - default
    - typography, proximity, padding
  - disabled
    - background color & border color
  - alert (warning, error)
    - background color & border color
- interaction
  - focus
    - border color & interaction border (box-shadow)

## Interaction

- focus
- input label click > focus on input

## Accessibility consideration

- label for input id
- error/warning state with `aria-invalid`, `aria-describedby`
- disabled state with `aria-disabled`, `aria-describedby`

## Test cases

- default state
- disabled state
- alert states
  - error
  - warning
- with label
- with prefix and/or suffix
- interactions
  - click: displays in focussed default/alert state
  - focus: displays in focussed default/alert state
  - blur: displays in unfocussed default/alert state

## Component API

### React

```tsx
<Input
  label={text} // optional
  alert="warning|error" // optional
  prefix={text | component} // optional
  suffix={text | component} // optional
  {...inputProps}
/>
```
