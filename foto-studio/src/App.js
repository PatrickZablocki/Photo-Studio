import './App.css';

import Navbar from './components/Navbar';
import Slides from './components/Slides';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slides/>
      <Welcome/>
    </div>
  );
}

export default App;
