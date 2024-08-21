import { expect, test } from '@playwright/test';

test.describe('ToolbarGenerateButton Component', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    if (baseURL) {
      await page.goto(baseURL);
    }
  });

  test('should render the ToolbarGenerateButton component', async ({ page }) => {
    const buttonContainer = await page.getByTestId('ToolbarGenerateButtonContainer');
    await expect(buttonContainer).toBeVisible();
  });
});
