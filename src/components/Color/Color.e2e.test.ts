import { expect, test } from '@playwright/test';

test.describe('Application', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    if (baseURL) {
      await page.goto(baseURL);
    }
  });

  test('should render Toolbar and ColorsWrapper', async ({
    page,
  }) => {
    // Toolbar
    const toolbar = page.locator(
      '[data-testid="ToolbarContainer"]',
    );
    await expect(toolbar).toBeVisible();

    // ColorsWrapperContainer
    const colorsWrapper = page.locator(
      '[data-testid="ColorsWrapperContainer"]',
    );
    await expect(colorsWrapper).toBeVisible();
  });

  test('should render color component and its elements', async ({
    page,
  }) => {
    const colorText = page
      .locator('[data-testid="ColorText"]')
      .first();
    await expect(colorText).toBeVisible();
    const colorHex = await colorText.textContent();
    await expect(colorHex).toMatch(/^#[\da-f]{6}$/i); // Check that the color is in HEX format
    await colorText.click();

    const colorComponent = page.locator(
      '[data-testid="ColorPickerWrapper"]',
    );
    await expect(colorComponent).toBeVisible();
  });

  test('should open and close color picker on click', async ({
    page,
  }) => {
    const colorText = page
      .locator('[data-testid="ColorText"]')
      .first();
    await colorText.click();

    const colorPicker = page.locator(
      '[data-testid="ColorPickerWrapper"]',
    );
    await expect(colorPicker).toBeVisible();

    await page.click('body');

    await expect(colorPicker).toBeHidden();
  });

  test('should change color when a new color is selected', async ({
    page,
  }) => {
    const colorText = page
      .locator('[data-testid="ColorText"]')
      .first();
    await colorText.click();

    const colorPicker = page.locator(
      '[data-testid="ColorPickerWrapper"]',
    );
    await colorPicker.click();

    const newColorHex = await colorText.textContent();
    await expect(newColorHex).not.toBe(colorText);
  });
});
