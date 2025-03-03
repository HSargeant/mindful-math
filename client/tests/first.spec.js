import { test, expect } from '@playwright/test';

test('check title', async ({ page }) => {
    // Navigate to the page you want to test
    await page.goto('/');

    // Get the title of the page
    const title = await page.title();

    // Assert that the title is what you expect
    expect(title).toBe('Mindful Math');
});
test('login', async ({ page }) => {
    // Navigate to the page you want to test
    await page.goto('/');

    // Get the title of the page
    const title = await page.title()

    // Assert that the title is what you expect
    expect(title).toBe('Mindful Math');
});