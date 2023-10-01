import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizData: {},
  // the below array will have objects inside it and the objects look like:
  // {questionIndex: 1, checkedOption:"Java Language is more popular", isAnswerCorrect: true/false}
  userResponse: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    showQuiz: (state, actions) => {
      const quizDataa = actions.payload;
      state.quizData = quizDataa;
    },
    getUserResponse: (state, actions) => {
      const response = actions.payload;
      if (state.userResponse.length > 0) {
        let checkExists;
        state.userResponse.map((item) => {
          if (item.questionIndex === response.questionIndex) {
            checkExists = true;
          } else {
            checkExists = false;
          }
        });
        if (!checkExists) {
          state.userResponse.push(response);
        }
      } else {
        state.userResponse.push(response);
      }
    },
  },
});

export const { showQuiz, getUserResponse } = quizSlice.actions;
export default quizSlice.reducer;
