import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic(state, action) {
      console.log("action", action);
      state.topics = { topics: { [action.payload.id]: action.payload } };
      state.topics.quizIds = [];
    }
  }
});

export const selectTopics = (state) => {
  return state.topics;
};

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
