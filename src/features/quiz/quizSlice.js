import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    quizData: {},
};


export const quizSlice = createSlice({
  name:'quiz',
  initialState,
  reducers : {
    showQuiz: (state,actions) => {
      const quizDataa = actions.payload;
      state.quizData = quizDataa;
      console.log(state.quizData);
    },
  }
});

export const {showQuiz} = quizSlice.actions;
export default quizSlice.reducer;