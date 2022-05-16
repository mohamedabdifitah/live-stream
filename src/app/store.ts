import {configureStore} from "@reduxjs/toolkit";
import  storyOnSlice from "../header/StoryOnSlice"
export const store = configureStore({
  reducer:{
    showStory:storyOnSlice
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch