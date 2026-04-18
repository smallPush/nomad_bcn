---
name: tailwind
description: Styling with Tailwind CSS 4+. Use when designing UIs, applying utility classes, or configuring theme variables in a Tailwind v4 environment.
---

# Tailwind CSS 4+ Styling

## Core Principles

- **Utility-First**: Use atomic utility classes for most styling.
- **CSS-Based Configuration**: Tailwind v4 uses CSS for configuration. Define variables in the `@theme` block.
- **Responsive Design**: Use prefix like `md:`, `lg:` for responsive styles.
- **Hover/Focus/Active**: Use pseudo-class variants (e.g., `hover:bg-blue-600`).

## Usage Patterns

### Standard Component
```tsx
export default function Card() {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
      <h2 className="text-xl font-bold text-gray-900">Card Title</h2>
      <p className="mt-2 text-gray-600">This is a description.</p>
    </div>
  );
}
```

### Layout with Flex/Grid
```tsx
<div className="flex flex-col md:flex-row gap-4">
  <div className="flex-1">Column 1</div>
  <div className="flex-1">Column 2</div>
</div>
```

## Theme Customization (v4)

Customizations are typically done in your main CSS file (e.g., `globals.css`).

```css
@import "tailwindcss";

@theme {
  --color-primary: #3b82f6;
  --font-display: "Inter", sans-serif;
}
```

## Tips

- Use the `@container` utility for container queries.
- Use `group` and `group-hover` for styling child elements based on parent state.
- Prefer standard Tailwind colors and spacing before adding custom ones.
