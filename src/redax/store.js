import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './contactsReduсer';
import { authReducer } from './authReducer';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

//підключаємо редюсер до стору
export const rootReducer = combineReducers({
  contactStore: contactsReducer,
  auth: persistReducer(authConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
