import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  series: {},
  movies: {}
}

const Serieslice = createSlice({
  name: "series",
  name: "movies",
  initialState,
  reducers: {
    addSeries: (state, { payload }) => {
      state.series = payload;
    },
    addMovies: (state, { payload }) => {
      state.movies = payload;
    }
  }
});

export const {addSeries} = Serieslice.actions;
export const getAllSeries = (state) => state.series.series;
export const {addMovies} = Serieslice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default Serieslice.reducer;

