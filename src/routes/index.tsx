import App from '@/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
