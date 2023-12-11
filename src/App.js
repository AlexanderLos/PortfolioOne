import './css/App.css';
import Nav from './components/Nav'; 
import Header from './components/Header'; 
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      {/* Add other components here */}
      <Footer />
    </div>
  );
}

export default App;
