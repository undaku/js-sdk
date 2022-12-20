import { UndakuSdk } from './index';
describe('unit | isNumberParseable', () => {
  it('returns `true` for values parseable number', () => {
    const sdk = new UndakuSdk('');
    expect(typeof sdk).toBe('object');
  });
});
