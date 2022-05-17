import { Home, Lessons, Result } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from './constants/paths';
import { LessonsProvider } from './contexts';

function App() {
  return (
    <BrowserRouter>
      <LessonsProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path={PATHS.LESSONS} element={<Lessons />} />
          <Route path={PATHS.RESULT} element={<Result />} />
        </Routes>
      </LessonsProvider>
    </BrowserRouter>
  );
}

export default App;
