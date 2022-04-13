import logo from './logo.svg';
import { Avatar } from './components/Avatar';
import { Description } from './components/Description';
import { ExperienceBox } from './components/ExperienceBox';
import './App.css';

function App() {
  return (
    
    <main className="App">
      <Avatar/>
      <Description title="Descrizione"/>
      <ExperienceBox work="Esperienze Lavorative" lang="Lingue" hobby="Hobby"/>
    </main>
  );
}

export default App;
