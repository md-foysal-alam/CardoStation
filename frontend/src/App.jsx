import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPageApp } from './LandingPage/LandingPageApp';
import AdminPanel from './AdminPanel/AdminPanel';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<LandingPageApp />} />
        <Route path='/admin' element={<AdminPanel/>} />
        
      </Routes>
    </BrowserRouter>
  );
}
