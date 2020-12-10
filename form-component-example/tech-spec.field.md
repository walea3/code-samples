# Form Field

> Flexible pattern to support a wide range on form use cases

Wrapper for form related elements in NEL - is composed of the following elements:

- Label
- Description
- Control(s) (.ie Input, Textarea, Check/Radio, ...)
- Actions
- Alert message(s) & visual state

## Internal Structure

### Markup

```html
<div class="nel-field nel-alert-error? nel-alert-warning?">
  <header>
    <h4>
      <!-- label for default field OR lagend for for fieldset -->
      <label for="id">...</label>
      <legend>...</legend>
    </h4>
    <!-- optional - Action (top position) -->
    <div class="nel-field-action">...</div>
    <!-- Options - Description -->
    <p class="nel-field-desc">...</p>
  </header>

  <!-- with conditional describedby (for alerts), with optional inline -->
  <field-control
    id="id"
    class="nel-field-control nel-field-control-inline?"
    aria-invalid="true|false"
    aria-describedby="{describedby}"
  />

  <footer>
    <!-- optional - Actions (left & right position) -->
    <div class="nel-field-actions">
      <div class="nel-field-action-left">...</div>
      <div class="nel-field-action-right">...</div>
    </div>

    <!-- Conditional - Alerts -->
    <ul class="nel-field-alerts" role="alert" id="{describedby}">
      <li><svg></svg> <strong>Error</strong>: Error message</li>
      ...
    </ul>
  </footer>
</div>
```

### Styling concerns

- states
  - default
    - proximity, spacing
  - fieldset
    - inline controls spacing
  - acitons
    - spacing
  - alerts (warnings, errors)
    - spacing
    - colours
    - icons

## Interaction

On child elements

## Accessibility consideration

- error/warning state adds `aria-invalid="true"` to child component(s), `aria-describedby` and associated `div` with equivalent id.

## Test cases

- default state
- with description
- with label
- warning state
- error state

## Component API

### React

```tsx
// simple field
<Field
  id=""
  label=""
  desc="" // optional
  errors={['a', 'b']} // optional
  warnings={['a', 'b']} // optional
>
  {({ alert?: 'warning' | 'error', 'aria-describedby': string, ...fieldProps }) => {
    <Input alert aria-describedby {..fieldProps} />
  }}
</Field>

// fieldset field
<Field
  id=""
  label=""
  fieldset
  inline
>
  {({ alert?: 'warning' | 'error', ...fieldProps }) => {
    <>
      <Input label="A" alert={ownAlert || alert} {..fieldProps} />
      <Input label="B" alert={ownAlert || alert} {..fieldProps} />
      <Input label="C" alert={ownAlert || alert} {..fieldProps} />
    </>
  }}
</Field>

// with actions
<Field
  id=""
  label=""
  actions={{
    top: (props) => <TextButton {...props} />,
    right: (props) => <TextButton {...props} />,
    left: (props) => <TextButton {...props} />
  }}
>
  {(fieldProp) => {
    <Input {...fieldProps} />
  }}
</Field>
```
