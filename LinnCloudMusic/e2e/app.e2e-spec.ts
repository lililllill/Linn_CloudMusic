import { LinnCloudMusicPage } from './app.po';

describe('linn-cloud-music App', () => {
  let page: LinnCloudMusicPage;

  beforeEach(() => {
    page = new LinnCloudMusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
