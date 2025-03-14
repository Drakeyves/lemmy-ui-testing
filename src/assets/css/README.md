# CSS Directory

This directory contains CSS styling for the Lemmy UI application.

## Structure

- **main.css**: Main CSS file with core styling
- **themes/**: Multiple theme options (darkly, litely, vaporwave, etc.)
  - Each theme has a main SCSS file and a variables file
  - The variables file controls colors, spacing, and other design tokens
  - Bootstrap variables can be overridden here for consistent styling

## Customizing Themes

To customize or create a theme:

1. Study existing themes to understand the structure
2. Modify an existing theme or create a new one:
   - Create a new `.scss` file in the themes directory
   - Define variables in a `_variables.[themename].scss` file
3. Compile themes with `pnpm themes:build`