import { Dispatch } from '../types';

export const TOGGLE_THEME = 'TOGGLE_THEME';

export const toggleTheme = () => (dispatch: Dispatch) => {
  dispatch({
    type: TOGGLE_THEME,
  });
};
