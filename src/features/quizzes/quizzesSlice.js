import { createSlice } from "react-redux";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz(state, action) {
      state.quizzes[action.payload.id] = action.payload;
    }
  }
});

export const selectQuizzes = (state) => state.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;