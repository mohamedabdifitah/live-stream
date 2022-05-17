import { createSlice,PayloadAction} from "@reduxjs/toolkit";
interface IIIState{
  value:boolean[],
}
const initialState={
  value:false
}
export const storyOnSlice = createSlice({
  name:"showStory",
  initialState,
  reducers:{
    setShowStory:(state,action:PayloadAction<boolean>) => {
      state.value = action.payload
    }
    
  }
  
})
export const {setShowStory} = storyOnSlice.actions;
export default storyOnSlice.reducer;