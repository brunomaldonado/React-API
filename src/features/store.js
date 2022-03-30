import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import longer from 'redux-logger'
import seriesReducer from './Serieslice/Serieslice';

export const store = configureStore({
  reducer: {
    series: seriesReducer,
    movies: seriesReducer
  },
});
// export const store = configureStore({
//   reducer: seriesReducer,
//   middleWare: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// });