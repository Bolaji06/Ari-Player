import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './services/shazamCore';
import { shazamCountryApi } from './services/shazamCountry';
import { shazamGenreApi } from './services/shazamGenre';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    [shazamCountryApi.reducerPath]: shazamCountryApi.reducer,
    [shazamGenreApi.reducerPath]: shazamGenreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware, 
    shazamCountryApi.middleware, shazamGenreApi.middleware),
  
});
