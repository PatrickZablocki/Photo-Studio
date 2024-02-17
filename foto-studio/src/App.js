import './App.css';
import Kontakt from './components/Kontakt';

import Leistung from './components/Leistung';
import Navbar from './components/Navbar';
import Slides from './components/Slides';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slides/>
      <Welcome/>
      <Leistung/>
      <Kontakt/>
    </div>
  );
}

export default App;
