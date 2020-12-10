# Password

> Support for password to show and toggle `type` prop, with support to `<Field />` for cta `React.Node` e.g. toggle action support.

## Internal Structure

### Markup

```html
// GET COMPONENT RENDERED TREE
```

### Styling concerns

- states
  - default
    - `type` - password
    - right aligned area for cta
  - active
    - `type` - text
    - cta updated to reflect behaviour

## Interaction

- On `<Input />` expect behaviour
- Toggle Support
  - CTA behaviour
  - `<Input />` - props `type="password"` <==> `type="text"`

## Accessibility consideration

- `<Input />`
  - `onChange` - toggle when `onClick` is fired
  - `<Field />` order selects cta, followed by `<Input />` field

## Test cases

- default state
- selected state
- keyboard navigation

## Component API

### React

```tsx
<Field
  id=""
  label=""
>
  {(fieldProps) => {
    <Input {..fieldProps} />
  }}
</Field>
```
