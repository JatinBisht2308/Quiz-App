import {createSlice} from '@reduxjs/toolkit';

const initialState = [{
    quizData: {},
}];


export const quizSlice = createSlice({
  name:'quiz',
  initialState,
  reducers : {
    showQuiz: (state,actions) => {
      const quizData = actions.payload;
      console.log(quizData);
    },
  }
});

export const {showQuiz} = quizSlice.actions;
export default quizSlice.reducer;