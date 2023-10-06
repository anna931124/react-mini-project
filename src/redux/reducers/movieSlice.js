import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:'movie',
    initialState: {popularMovies:[],topRatedMovies:[],upcomingMovies:[],genreList:[]},
    reducers:{initData:(state,action)=>{
        console.log('[movieSlice]',action);
        let {payload} =action;
        console.log('payload',payload);
        state.popularMovies = payload.popular.results
        state.topratedMovies = payload.toprated.results
        state.upcomingMovies = payload.upcoming.results
        state.genreList = payload.genre

    }}
})



export const movieReducerActions = movieSlice.actions
export default movieSlice.reducer
