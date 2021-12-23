import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { 
    textEditor: ""
};

export const blogSlice = createSlice({
  name: "blog",
  initialState: { value: initialStateValue },
  reducers: {
    setEditor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setEditor } = blogSlice.actions;

export default blogSlice.reducer;