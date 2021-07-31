import './App.css';
import About from './components/About';
import TechStacks from './components/TechStacks';
import Projects from './components/Projects';
import ContacMe from './components/ContacMe';
//import Routes from './Routes';

function App() {
  return (
    <div className="App">
    <About/>
    <TechStacks />
    <Projects />
    <ContacMe/>
    </div>
  );
}

export default App;
