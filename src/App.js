import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import DetailPage from './pages/DetailsPage';
import StartPage from './pages/StartPage';
import ResultPage from './pages/ResultPage';
import PageNotFound from './pages/PageNotFound';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DetailPage/>} />
      <Route path="/startquiz" element={<StartPage/>} />
      <Route path="/results" element={<ResultPage/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
