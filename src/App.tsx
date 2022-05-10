import { Home, Lessons } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from './constants/paths';
import { LessonsProvider } from './contexts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <LessonsProvider>
          <Route index element={<Home />} />
          <Route path={PATHS.LESSONS} element={<Lessons />} />
        </LessonsProvider>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
