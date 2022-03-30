import { configureStore } from "@reduxjs/toolkit";
import seriesReducer from './Serieslice/Serieslice';

export const store = configureStore({
  reducer: {
    series: seriesReducer,
    movies: seriesReducer
  },
});