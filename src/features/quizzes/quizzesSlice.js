import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz(state, action) {
      console.log("payload: ", action.payload);
      state.quizzes[action.payload.id] = action.payload;
    }
  }
});

export const quizThunkCreator = (payload) => {
  return (dispatch) => {
    dispatch(addQuiz(payload));
    dispatch(addQuizId(payload));
  };
};

export const selectQuizzes = (state) => {
  console.log("quizzes", state);
  return state.quizzes.quizzes;
};
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
