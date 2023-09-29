// import logo from './logo.svg';
import './App.css';

// _______ Import routing ______________
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// ______________ Import components ______________
import Header from './components/global/header/Header';
import Home from './pages/home/Home';
import Footer from './components/global/footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className='background-gradient-top-page'></div>
      <Header/>

      <Routes>
        <Route path='/' element={<Home />}/>

      </Routes>

      <Footer /> 

    </BrowserRouter>
  );
}

export default App;
