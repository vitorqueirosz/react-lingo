import { Home, Lessons } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from './constants/paths';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={PATHS.LESSONS} element={<Lessons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
