# Lemmy UI Customization Guide

This guide provides instructions for customizing the Lemmy UI to match your preferences and branding.

## Before You Begin

Before making any changes:
1. Understand the codebase structure
2. Set up a development environment
3. Test your changes locally before deploying

## Customization Areas

### 1. Theme Customization

The easiest way to customize the look and feel of Lemmy UI is by modifying or creating themes.

#### Modifying an Existing Theme

1. Navigate to `src/assets/css/themes/`
2. Choose a theme to use as a base (e.g., `darkly.scss` and `_variables.darkly.scss`)
3. Edit the variables in the `_variables` file to change colors, spacing, etc.
4. Run `pnpm themes:build` to compile the theme

#### Creating a New Theme

1. Create a new variables file in `src/assets/css/themes/`, e.g., `_variables.mytheme.scss`
2. Import the base variables and override values as needed:
   ```scss
   @import './_variables.scss';
   
   $primary: #your-color;
   $body-bg: #your-background-color;
   ```
3. Create a new theme file, e.g., `mytheme.scss`:
   ```scss
   @import './_variables.mytheme';
   @import '~bootstrap/scss/bootstrap';
   ```
4. Run `pnpm themes:build` to compile your theme

### 2. Component Customization

For more extensive customization, you can modify UI components:

#### Modifying Existing Components

1. Find the component you want to modify in `src/shared/components/`
2. Make your changes to the component's JSX/TSX code
3. Test your changes by running `pnpm dev`

#### Creating New Components

1. Create a new component file in the appropriate directory
2. Follow the pattern of existing components, using Inferno's Component class
3. Import and use your component where needed

### 3. Logo and Branding

To change logos and branding:

1. Replace image files in `src/assets/images/`
2. Update references to these files in components

### 4. Layout Modifications

To change the site layout:

1. Modify components in `src/shared/components/app/`
2. For example, to change the navbar, edit files in this directory

## Development Workflow

1. Make your changes
2. Run `pnpm dev` to start the development server
3. Test your changes locally
4. Build for production with `pnpm build:prod`
5. Deploy using the instructions in `ELESTIO_DEPLOYMENT.md`

## Examples

### Example: Changing the Primary Color

```scss
// In _variables.mytheme.scss
$primary: #ff5700;
```

### Example: Creating a Custom Component

```tsx
// In src/shared/components/custom/MyComponent.tsx
import { Component } from 'inferno';

export class MyComponent extends Component<any, any> {
  render() {
    return (
      <div className="my-custom-component">
        <h3>My Custom Section</h3>
        {this.props.children}
      </div>
    );
  }
}
```

## Testing Your Changes

Always test your changes across different:
- Screen sizes (desktop, tablet, mobile)
- Browsers
- Use cases (posting, commenting, navigation)

## Best Practices

1. Make incremental changes and test frequently
2. Comment your code for future reference
3. Keep components modular and reusable
4. Consider accessibility in your design
5. Optimize images and assets for performance