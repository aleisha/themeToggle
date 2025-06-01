import './App.css';
import Philodendron from './Philodendron';
import { useState } from 'react';
import PlantMenu from './PlantMenu';
import { Routes, Route } from 'react-router-dom';
import PlantDashboard from './PlantDashboard';
import Monstera from './Monstera';
import Hoya from './Hoya';

function App() {
  const [selectedTheme, setSelectedTheme] = useState("Dark")
  return (
    <div className={`App ${selectedTheme}`}>
      <PlantMenu selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />
      <header className="App-content">
        <Routes>
          <Route path="/" element={<PlantDashboard />} />
          <Route path="/philodendron" element={<Philodendron />} />
          <Route path="/monstera" element={<Monstera />} />
          <Route path="/hoya" element={<Hoya/>}>Hoya</Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
