import fp from 'lodash/fp';

import {select, $each} from '../src';

const state = {
  users: {
    joe: {
      name: {
        first: 'Joe'
      }
    },
    mary: {
      name: {
        first: 'Mary'
      }
    }
  }
};

export default [
  {
    name: 'lodash-fp flow',
    test: () => fp.flow(
      fp.get('users'),
      fp.map(fp.get(['name', 'first']))
    )(state),
    key: 'lodashFpFlow'
  },
  {
    name: 'qim select',
    test: () => select(['users', $each, 'name', 'first'], state),
    compare: {
      lodashFpFlow: 1.0
    }
  }
];
