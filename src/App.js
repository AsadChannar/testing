
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from './componets/Navigation';
import Slider from './componets/Slider';
import Info from './componets/Info';
import Infographs from './componets/Infographs';
import INITIATIVES from './componets/INITIATIVES';
import School from './componets/School';
import Footer from './componets/Footer';
import Developer from './componets/Developer';
function App() {
  return (
    <div className="App">
    <Navigation/>
    <Slider/>
    <Info/>
    <Infographs />
    <INITIATIVES/>
    <School/>
    <Footer/>
    <Developer/>
    </div>
  );
}

export default App;
