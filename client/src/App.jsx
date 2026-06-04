import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
// 1. Yeni sayfamızı içe aktarıyoruz
import CariYonetimi from './pages/CariYonetimi'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* 2. Yeni sayfamızın rotasını (URL yolunu) belirliyoruz */}
        <Route path="/cari" element={<CariYonetimi />} /> 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;