import { CasinhaPage } from './app.po';

describe('casinha App', function() {
  let page: CasinhaPage;

  beforeEach(() => {
    page = new CasinhaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
