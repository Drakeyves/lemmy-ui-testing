# Themes Directory

This directory contains theme files for the Lemmy UI application.

## Available Themes

- **darkly**: Dark theme (default)
- **darkly-red**: Dark theme with red accents
- **darkly-pureblack**: Dark theme with pure black background
- **darkly-compact**: Compact version of the dark theme
- **litely**: Light theme
- **litely-red**: Light theme with red accents
- **litely-compact**: Compact version of the light theme
- **vaporwave-dark**: Dark vaporwave theme
- **vaporwave-light**: Light vaporwave theme
- **i386**: Retro theme
- **i386-dark**: Dark retro theme

## Theme Structure

Each theme consists of two main files:
- **Main theme file** (e.g., `darkly.scss`): Imports variables and applies them
- **Variables file** (e.g., `_variables.darkly.scss`): Defines theme colors and other variables

## Creating a Custom Theme

1. Create a new variables file, e.g., `_variables.mytheme.scss`
2. Create a new theme file, e.g., `mytheme.scss`
3. Import and extend the variables in your theme file
4. Run `pnpm themes:build` to compile your theme