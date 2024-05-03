
import './App.css';
import Bio from './components/Bio/Bio';
import Experiences from './components/Exprnses/Experiences';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Bio/>
      <Skills/>
      <Experiences/>
    </div>
  );
}

export default App;
