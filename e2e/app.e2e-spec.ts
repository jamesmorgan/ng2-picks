import { Ng2PicksCliPage } from './app.po';

describe('ng2-picks-cli App', function() {
  let page: Ng2PicksCliPage;

  beforeEach(() => {
    page = new Ng2PicksCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
