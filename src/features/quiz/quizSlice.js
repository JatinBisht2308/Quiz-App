import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    quizData: {},
    // the below array will have objects inside it and the objects look like: 
    // {questionIndex: 1, checkedOption:"Java Language is more popular", isAnswerCorrect: true/false}
    userResponse: [],
};


export const quizSlice = createSlice({
  name:'quiz',
  initialState,
  reducers : {
    showQuiz: (state,actions) => {
      const quizDataa = actions.payload;
      state.quizData = quizDataa;
    },
    getUserResponse: (state,actions) =>{
      const response = actions.payload;
      state.userResponse.push(response);
    },
  }
});

export const {showQuiz,getUserResponse} = quizSlice.actions;
export default quizSlice.reducer;