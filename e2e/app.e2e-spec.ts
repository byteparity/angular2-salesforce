import { NgSalesforcePage } from './app.po';

describe('ng-salesforce App', () => {
  let page: NgSalesforcePage;

  beforeEach(() => {
    page = new NgSalesforcePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
