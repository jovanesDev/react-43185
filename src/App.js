import './App.css';
import ItemCount from './components/ItemCount';
import TutorEze from './components/TutorEze';
import TutorFede from './components/TutorFede';

function App() {

  return (
    <div className="App">
      <TutorFede calificacion={10}/>
      <TutorEze calificacion={10}/>

    </div>
  );
}

export default App;
