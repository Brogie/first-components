import { newE2EPage } from '@stencil/core/testing';

describe('k-greeting', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-greeting></k-greeting>');

    const element = await page.find('k-greeting');
    expect(element).toHaveClass('hydrated');
  });
});
