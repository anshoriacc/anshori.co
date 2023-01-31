import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import reducer from './reducers';
import { Reducers } from './types';

function saveToLocalStorage(state: Reducers) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('persistedState', serializedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('persistedState');
    return serializedState !== null || serializedState === undefined
      ? JSON.parse(serializedState)
      : undefined;
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

export const store = configureStore({
  reducer,
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
