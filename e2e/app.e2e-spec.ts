import { CutthroatCavernsPage } from './app.po';

describe('cutthroat-caverns App', () => {
  let page: CutthroatCavernsPage;

  beforeEach(() => {
    page = new CutthroatCavernsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
