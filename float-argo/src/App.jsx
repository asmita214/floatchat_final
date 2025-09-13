import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegionDashboard from './pages/RegionDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-deep-navy text-white font-inter">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard/:regionId" element={<RegionDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;