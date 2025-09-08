import { Page } from '@playwright/test';

/**
 * Page Object Model for the Create Lead Page of leaftaps application
 */
export class CreateLeadPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToCreateLead() {
    await this.page.click("text='Leads'");
    await this.page.click("text='Create Lead'");
  }

  async createLead(company: string, firstName: string, lastName: string) {
    await this.page.fill('#createLeadForm_companyName', company);
    await this.page.fill('#createLeadForm_firstName', firstName);
    await this.page.fill('#createLeadForm_lastName', lastName);
    await this.page.click('input[name="submitButton"]');
  }
}
