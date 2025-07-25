import { Injectable } from '@angular/core';
import Aura from '@primeng/themes/aura';
import Material from '@primeng/themes/material';
import Lara from '@primeng/themes/lara';
import Nora from '@primeng/themes/nora';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = 'aura';

  constructor() {}

  /**
   * Switch between different PrimeNG presets
   */
  switchTheme(theme: 'aura' | 'material' | 'lara' | 'nora') {
    this.currentTheme = theme;
    
    // Note: In the modern PrimeNG theming system, theme switching
    // is handled through CSS custom properties and the providePrimeNG configuration
    // This service can be used for additional theme management logic
    console.log(`Switching to ${theme} theme`);
  }

  /**
   * Get current theme name
   */
  getCurrentTheme(): string {
    return this.currentTheme;
  }

  /**
   * Example: Switch to blue primary colors
   */
  setBlueTheme() {
    // Update CSS custom properties for blue theme
    document.documentElement.style.setProperty('--p-primary-color', 'oklch(49.12% 0.3096 275.75)');
    document.documentElement.style.setProperty('--p-primary-contrast-color', 'oklch(98% 0.01 275.75)');
  }

  /**
   * Example: Switch to green primary colors
   */
  setGreenTheme() {
    // Update CSS custom properties for green theme
    document.documentElement.style.setProperty('--p-primary-color', 'oklch(49.12% 0.3096 142.5)');
    document.documentElement.style.setProperty('--p-primary-contrast-color', 'oklch(98% 0.01 142.5)');
  }

  /**
   * Example: Switch to purple primary colors
   */
  setPurpleTheme() {
    // Update CSS custom properties for purple theme
    document.documentElement.style.setProperty('--p-primary-color', 'oklch(49.12% 0.3096 300)');
    document.documentElement.style.setProperty('--p-primary-contrast-color', 'oklch(98% 0.01 300)');
  }
} 