# Dropdown

Dropdown element in NEL.

- [Design Spec](https://invisionapp.com/d/main)

## Internal Structure

### Markup

```html
<div class="nel-dropdownContainer">
  <button
    class="nel-dropdown"
    aria-haspopup="listbox"
    aria-invalid="{true|false}"
    aria-expanded="{true|false}"
  >
    when normal
    <svg class="nel-dropdownIcon nel-icon"></svg>
  </button>
  <ul
    class="nel-dropdownOptions"
    role="listbox"
    aria-activedescendant="option id"
    tabindex="-1"
  >
    <li
      class="nel-dropdownOption"
      role="option"
      aria-selected="{true|false}"
    >
      Option
    </li>
  </ul>
</div>
```

### Styling concerns

- States
  - Default
  - Disabled
  - Warning
  - Error
- Interaction
  - Hover/Focus/Active
    - border colour & interaction border
- Additional functionality beyond agreed MVP
  - Collision detection
  - Reposition options above

## Interaction

## Accessibility consideration

- [A11y style guide - Select lists](https://a11y-style-guide.com/style-guide/section-forms.html#kssref-forms-select-lists)
- [listbox combo](https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html)

## Test cases

### Visual (display/render)

- when normal
- when hovered
- when focussed
- when active
- when disabled
- when error
- when warning
- with placeholder
- with default selected option

### Interaction:

- click
- focus
- blur
- keydown
  - esc
  - space
  - enter
  - up
  - down
- when opened scrolls to current option

## Component API

### React

```jsx
const options = [
  {
    id: 'option-1',
    value: 'option 1',
    text: 'Option 1'
  }
]

<Dropdown
  id="dropdown1"
  placeholder="Please select an option"
  options={options}
  value="option 1"
  disabled
  alert=""
/>
```
