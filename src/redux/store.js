import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { persistedReducer } from './reducers';

export const store = configureStore({
    reducer: {
    contacts: persistedReducer,
  },
  middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
     } 
});

export const persistor = persistStore(store);




