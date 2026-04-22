import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Company } from './pages/Company';
import { PhysicalAI } from './pages/business/PhysicalAI';
import { Education } from './pages/business/Education';
import { DataContent } from './pages/business/Data';
import { Manpower } from './pages/business/Manpower';
import { Global } from './pages/business/Global';
import { Community } from './pages/Community';
import { Inquiry } from './pages/Inquiry';

function App() {
  return (
    <Router basename="/physical-ai">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="company" element={<Company />} />
          <Route path="physical-ai" element={<PhysicalAI />} />
          <Route path="business">
            <Route index element={<Education />} />
            <Route path="education" element={<Education />} />
            <Route path="data" element={<DataContent />} />
            <Route path="manpower" element={<Manpower />} />
            <Route path="global" element={<Global />} />
          </Route>
          <Route path="community" element={<Community />} />
          <Route path="inquiry" element={<Inquiry />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
