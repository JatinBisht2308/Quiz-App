import { combineReducers } from "@reduxjs/toolkit";
 import authReducer from '../features/auth/authSlice';
import quizReducer from '../features/quiz/quizSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    quiz: quizReducer,
});

export default rootReducer;