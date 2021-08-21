import './App.css';
import './component/Nav/Nav';
import BrainFlixLogo from './assets/Logo/Logo-brainflix.svg';
import avitar from './assets/Images/Mohan-muruge.jpg';

function App() {
  return (
    <div className="App">
      <nav className="nav"> 
        <img src={BrainFlixLogo} alt=''></img>
        <form>
            <textarea type='text' id='SearchBar' className='Nav__SearchBar' placeholder='Search'></textarea>
        </form>
        <button>+ UPLOAD</button>
        <img src={avitar} alt='' className='Nav__Avitar'></img>
      </nav>
    </div>
  );
}

export default App;
