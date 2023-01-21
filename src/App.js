import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRouter from './Pages/AllRouter';
import AddProductLanding from './Pages/HomeComponents/AddProductLanding';
//<AddProductLanding/>
function App() {
  return (
    <div className="App">
    <Navbar/>
    <AllRouter/>
    <Footer/>
    </div>
  );
}

export default App;