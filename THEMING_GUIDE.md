# PrimeNG Theming Best Practices Guide

This project demonstrates proper PrimeNG theming setup according to the official best practices from [PrimeNG Theming Documentation](https://primeng.org/theming).

## ✅ Implemented Best Practices

### 1. **Proper Theme Configuration**

The project uses the recommended theme configuration in `src/app/app.config.ts`:

```typescript
providePrimeNG({
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: '.app-dark', // Custom selector for toggleable dark mode
      cssLayer: {
        name: 'primeng',
        order: 'app-styles, primeng, another-css-library'
      }
    }
  }
})
```

### 2. **Dark Mode Implementation**

The project includes a complete dark mode toggle system:

- **Custom Selector**: Uses `.app-dark` instead of `system` for toggleable dark mode
- **Persistent State**: Saves preference in localStorage
- **System Preference**: Falls back to system preference on first visit
- **Real-time Toggle**: Instant switching between light and dark modes

```typescript
// Dark mode toggle functionality
toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.contains('app-dark');
  
  if (isDark) {
    html.classList.remove('app-dark');
    localStorage.setItem('darkMode', 'false');
  } else {
    html.classList.add('app-dark');
    localStorage.setItem('darkMode', 'true');
  }
}
```

### 3. **CSS Layer Setup**

Global styles in `src/styles.css` use CSS layers for better specificity control:

```css
@layer reset, primeng, app-styles;

html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: var(--font-family);
}
```

### 4. **Design Tokens Instead of Custom CSS**

Instead of overriding PrimeNG styles with custom CSS variables, the project uses design tokens:

```typescript
customButtonTokens = {
  colorScheme: {
    light: {
      root: {
        background: '{blue.500}',
        color: '{white}',
        borderRadius: '8px'
      }
    },
    dark: {
      root: {
        background: '{blue.400}',
        color: '{white}',
        borderRadius: '8px'
      }
    }
  }
};
```

### 5. **Dynamic Theme Switching**

The `ThemeService` demonstrates how to use PrimeNG's theming utilities:

- `usePreset()` for switching between theme presets
- `updatePrimaryPalette()` for changing primary colors
- `updateSurfacePalette()` for changing surface colors

### 6. **Clean Component Styling**

App-specific styles in `src/app/app.css` use PrimeNG design tokens:

```css
.demo-section {
  background: var(--surface-card);
  border: 1px solid var(--surface-border);
}
```

## 🚫 Avoided Anti-Patterns

### 1. **No Custom CSS Variables for Theming**

❌ **Avoided:**
```css
:host {
  --bright-blue: oklch(51.01% 0.274 263.83);
  --electric-violet: oklch(53.18% 0.28 296.97);
}
```

✅ **Instead, use design tokens:**
```typescript
[dt]="customButtonTokens"
```

### 2. **No Direct Style Overrides**

❌ **Avoided:**
```css
.p-button {
  background: red !important;
}
```

✅ **Instead, use design tokens or CSS layers**

### 3. **No ::ng-deep Usage**

❌ **Avoided:**
```css
::ng-deep .p-button {
  background: red;
}
```

✅ **Instead, use scoped design tokens**

## 🎨 Available Features

### Dark Mode
- **Toggleable Dark Mode** - Switch between light and dark themes
- **Persistent State** - Remembers your preference across sessions
- **System Preference** - Uses your OS preference on first visit
- **Real-time Switching** - Instant theme changes

### Theme Presets
- **Aura** - PrimeTek's own vision
- **Material** - Google Material Design v2
- **Lara** - Based on Bootstrap
- **Nora** - Enterprise applications

### Color Palettes
- **Blue Theme** - Professional blue colors
- **Green Theme** - Success-oriented green colors
- **Purple Theme** - Creative purple colors

### Button Demonstrations
- Default buttons
- Custom styled buttons using design tokens
- All severity variants (primary, secondary, success, info, help, danger)
- All style variants (filled, outlined, text, link)

## 🔧 Key Files

- `src/app/app.config.ts` - PrimeNG configuration with theme options and dark mode selector
- `src/styles.css` - Global styles with CSS layers
- `src/app/theme.service.ts` - Dynamic theme switching utilities
- `src/app/app.ts` - Component with design token examples and dark mode functionality
- `src/app/app.html` - Template demonstrating various theming approaches including dark mode toggle
- `src/app/app.css` - Component styles using design tokens

## 🌙 Dark Mode Implementation Details

### Configuration
```typescript
darkModeSelector: '.app-dark' // Custom selector for toggleable dark mode
```

### Toggle Function
```typescript
toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.contains('app-dark');
  
  if (isDark) {
    html.classList.remove('app-dark');
    localStorage.setItem('darkMode', 'false');
  } else {
    html.classList.add('app-dark');
    localStorage.setItem('darkMode', 'true');
  }
}
```

### Initialization
```typescript
private initializeDarkMode() {
  const savedMode = localStorage.getItem('darkMode');
  const html = document.documentElement;
  
  if (savedMode !== null) {
    // Use saved preference
    if (savedMode === 'true') {
      html.classList.add('app-dark');
    }
  } else {
    // Use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      html.classList.add('app-dark');
      localStorage.setItem('darkMode', 'true');
    }
  }
}
```

## 📚 Resources

- [PrimeNG Theming Documentation](https://primeng.org/theming)
- [Design Token Architecture](https://primeng.org/theming#architecture)
- [Theme Configuration API](https://primeng.org/theming#configuration-api)
- [Dynamic Theme Utilities](https://primeng.org/theming#utils)
- [Dark Mode Implementation](https://primeng.org/theming#dark-mode)

## 🎯 Best Practices Summary

1. **Use design tokens** instead of custom CSS variables
2. **Configure theme options** for better control
3. **Set up CSS layers** for proper specificity
4. **Use PrimeNG utilities** for dynamic changes
5. **Avoid direct style overrides** with CSS classes
6. **Follow the three-tier architecture**: Primitive → Semantic → Component tokens
7. **Implement toggleable dark mode** with custom selectors
8. **Persist user preferences** in localStorage
9. **Respect system preferences** on first visit

This setup provides a solid foundation for building maintainable, themeable applications with PrimeNG while following all recommended best practices, including proper dark mode implementation. 