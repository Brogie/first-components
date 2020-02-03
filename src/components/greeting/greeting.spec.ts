import { Greeting } from './greeting';

describe('k-greeting', () => {
  it('builds', () => {
    expect(new Greeting()).toBeTruthy();
  });
});
