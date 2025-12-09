# Button Component Documentation

## Overview
The Button component is a reusable, accessible button that can be used throughout the application with consistent styling and behavior.

## Installation
The button component is located in `src/components/Button`. To use it, simply import it into your component:

```jsx
import Button from '../components/Button';
```

## Usage Examples

### Basic Usage
```jsx
<Button>Click Me</Button>
```

### Variants
```jsx
// Primary button (default)
<Button variant="primary">Primary Button</Button>

// Secondary button
<Button variant="secondary">Secondary Button</Button>

// Outline button
<Button variant="outline">Outline Button</Button>
```

### Sizes
```jsx
// Small button
<Button size="small">Small Button</Button>

// Medium button (default)
<Button size="medium">Medium Button</Button>

// Large button
<Button size="large">Large Button</Button>
```

### States
```jsx
// Disabled button
<Button disabled>Disabled Button</Button>

// Full width button
<Button fullWidth>Full Width Button</Button>
```

### Interactive Button
```jsx
<Button onClick={() => console.log('Button clicked!')}>
  Interactive Button
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | node | null | Content to be displayed inside the button |
| variant | string | 'primary' | Button style variant ('primary', 'secondary', 'outline') |
| size | string | 'medium' | Button size ('small', 'medium', 'large') |
| disabled | boolean | false | Disables the button |
| fullWidth | boolean | false | Makes the button take full width of its container |
| onClick | function | null | Click handler function |
| type | string | 'button' | Button type ('button', 'submit', 'reset') |
| className | string | '' | Additional CSS classes |

## Styling
The button component uses CSS variables from `theme.css` for consistent styling:
- `--primary-blue`: Primary button color
- `--secondary-red`: Secondary button color
- `--light-bg`: Text color for colored buttons
- `--shadow-light`: Light shadow for buttons
- `--shadow-medium`: Medium shadow for hover states

All styles are defined in `Button.css` and can be customized as needed.