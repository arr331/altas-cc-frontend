import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  async getTitleText() {
    return await element(by.id('title')).getText();
  }
}
