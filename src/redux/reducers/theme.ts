import { TOGGLE_THEME } from '../actions';
import { Action } from '../types';

const initialState: 'dark' | 'light' = 'dark';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type }: Action) => {
  switch (type) {
    case TOGGLE_THEME:
      if (state === 'dark') return 'light';
      if (state === 'light') return 'dark';

    default:
      return state;
  }
};
