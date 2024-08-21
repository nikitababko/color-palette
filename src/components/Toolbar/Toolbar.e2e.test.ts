import { expect, test } from '@playwright/test';

test.describe('Toolbar Component', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    if (baseURL) {
      await page.goto(baseURL);
    }
  });

  test('should render the Toolbar component', async ({ page }) => {
    const toolbarContainer = await page.getByTestId('ToolbarContainer');

    await expect(toolbarContainer).toBeVisible();
  });

  test('should contain the ToolbarGenerateButton', async ({ page }) => {
    const generateButton = await page.getByTestId('ToolbarGenerateButtonContainer');

    await expect(generateButton).toBeVisible();
  });
});
