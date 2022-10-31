import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  return (
    <div className='min-vh-100 d-flex flex-column'>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
