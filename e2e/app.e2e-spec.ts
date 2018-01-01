import { SnapbizwebPage } from './app.po';

describe('snapbizweb App', () => {
  let page: SnapbizwebPage;

  beforeEach(() => {
    page = new SnapbizwebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
