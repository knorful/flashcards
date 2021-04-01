import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducer: {
    addTopic(state, action) {
      state.topics = { topics: { [action.payload.id]: action.payload } };
      state.topics.quizIds = [];
    }
  }
});

export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;
