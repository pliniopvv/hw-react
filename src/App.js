import './App.css';
import BootstrapComponents from './components/BootstrapComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorMode from './components/ColorMode';
import FormTextExample from './components/FormTextExemple';
import BasicExample from './components/BasicExemple';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <BasicExample />
      </div>
    </div>
  )
}

export default App;
