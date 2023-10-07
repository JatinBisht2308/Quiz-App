import { combineReducers } from "@reduxjs/toolkit";
 import authReducer from '../features/auth/authSlice';
import quizReducer from '../features/quiz/quizSlice';
import userResponseReducer from '../features/quiz/quizSlice';
import updateResponseReducer from '../features/quiz/quizSlice';

const rootReducer = combineReducers({
    login: authReducer,
    showQuiz: quizReducer,
    getUserResponse: userResponseReducer,
    updateUserResponse: updateResponseReducer,
});

export default rootReducer;