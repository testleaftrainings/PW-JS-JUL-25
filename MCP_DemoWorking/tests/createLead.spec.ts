import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CreateLeadPage } from '../pages/CreateLeadPage';
import { faker } from '@faker-js/faker';

/**
 * Test to create a lead in leaftaps application using Page Object Model
 */
test('Create Lead in leaftaps', async ({ page }) => {
  // Instantiate page objects
  const loginPage = new LoginPage(page);
  const createLeadPage = new CreateLeadPage(page);

  // Test data
  const username = 'democsr';
  const password = 'crmsfa';
  const company = faker.company.name();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  // Login
  await loginPage.goto();
  await loginPage.login(username, password);
  await loginPage.clickCRMSFA();

  // Navigate to Create Lead and create lead
  await createLeadPage.navigateToCreateLead();
  await createLeadPage.createLead(company, firstName, lastName);

  // Assertion: Check if lead was created (simple check for now)
  await expect(page.locator('text=View Lead')).toBeVisible();
});
