import { ConsumingComponentLibPage } from './app.po';

describe('consuming-component-lib App', function() {
  let page: ConsumingComponentLibPage;

  beforeEach(() => {
    page = new ConsumingComponentLibPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
