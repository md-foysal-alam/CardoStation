import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPageApp } from './LandingPage/LandingPageApp';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Main Landing Page */}
        <Route path="/" element={<LandingPageApp />} />
        
      </Routes>
    </BrowserRouter>
  );
}