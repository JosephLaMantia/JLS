import logo from './logo.svg';
import './App.css';

import SideNav from './Components/SideNav';
import Welcome from './Components/Welcome';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">

    <SideNav/>
    <Welcome/>
    <Projects/>

    </div>
  );
}

export default App;
