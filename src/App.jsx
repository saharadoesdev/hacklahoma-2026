import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ExplorePage from './pages/ExplorePage';
import OpportunityPage from './pages/OpportunityPage';
import CreateListingPage from './pages/CreateListingPage';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/opportunity/:id" element={<OpportunityPage />} />
        <Route path="/create" element={<CreateListingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
