import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { shallowEqual, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './modules/root';

const reducers = combineReducers({
  root: rootReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  // 配置持久化存在白名单
  whitelist: ['app'],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

// const state = store.getState()
// types StateType = typeof state

type GetStateFnType = typeof store.getState;
export type IRootState = ReturnType<GetStateFnType>;
type DispatchType = typeof store.dispatch;

// useAppSelector的hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => DispatchType = useDispatch;
export const shallowEqualApp = shallowEqual;

export default store;
