// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai';
import config, { setProvider } from '../../../server/lib/config';

describe('config', () => {
  describe('#get', () => {
    it('should return setting from provider if configured', () => {
      setProvider((key) => {
        if (key === 'DUMMY_KEY') {
          return 'CUSTOM_VALUE';
        }
        return 12345;
      });
      expect(config('DUMMY_KEY')).to.equal('CUSTOM_VALUE');
    });
  });
});
