import { test, expect } from '@playwright/test';

test.describe('PhotoFirm Website - Basic Smoke Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Enable console logging for debugging
    page.on('console', msg => console.log(`Console: ${msg.text()}`));
  });

  test('Homepage loads correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page loads with correct title
    await expect(page).toHaveTitle(/PhotoFirm Studio/);
    
    // Check that main navigation is visible
    await expect(page.locator('nav')).toBeVisible();
    
    // Check that hero section is present
    await expect(page.locator('section').first()).toBeVisible();
    
    // Check that the main heading is visible
    await expect(page.locator('h1')).toContainText('Capturing Life');
  });

  test('Navigation works correctly', async ({ page }) => {
    await page.goto('/');
    
    const navLinks = [
      { text: 'Portfolio', url: '/portfolio' },
      { text: 'About', url: '/about' },
      { text: 'Contact', url: '/contact' }
    ];

    for (const link of navLinks) {
      await page.click(`nav a:has-text("${link.text}")`);
      await page.waitForURL(`**${link.url}**`);
      expect(page.url()).toContain(link.url);
      await page.goto('/');
    }
  });

  test('Dark mode toggle works', async ({ page }) => {
    await page.goto('/');
    
    const darkModeToggle = page.locator('[id*="dark-mode-toggle"]');
    if (await darkModeToggle.count() > 0) {
      const htmlElement = page.locator('html');
      const initialClass = await htmlElement.getAttribute('class') || '';
      
      await darkModeToggle.click();
      await page.waitForTimeout(500);
      
      const newClass = await htmlElement.getAttribute('class') || '';
      expect(newClass).not.toEqual(initialClass);
    }
  });

  test('Footer contains required information', async ({ page }) => {
    await page.goto('/');
    
    await page.locator('footer').scrollIntoViewIfNeeded();
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('footer')).toContainText(/PhotoFirm|Copyright/);
  });
});