import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { blockingViolations } from '../src/lib/blocking-violations';

test('home page has no serious or critical accessibility violations', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  expect(blockingViolations(results).map((v) => ({ id: v.id, impact: v.impact }))).toEqual([]);
});