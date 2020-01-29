import { newE2EPage } from '@stencil/core/testing';

describe('k-rating', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-rating></k-rating>');

    const element = await page.find('k-rating');
    expect(element).toHaveClass('hydrated');
  });
});
