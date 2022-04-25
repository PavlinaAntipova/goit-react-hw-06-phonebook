import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { addContact, deleteContact, addFilter } from './actions';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
}

const contactsReducer = createReducer([], {
    [addContact]: (state, action) => [...state, action.payload],
    [deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer('', {
    [addFilter]: (state, action) => action.payload,
});

const rootReducer = combineReducers({ items: contactsReducer, filter: filterReducer });
export const persistedReducer = persistReducer(persistConfig, rootReducer);
