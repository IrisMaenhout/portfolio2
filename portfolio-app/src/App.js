// import logo from './logo.svg';
import './App.css';

// _______ Import routing ______________
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// ______________ Import components ______________
import Header from './components/global/header/Header';
import Home from './pages/home/Home';
import Footer from './components/global/footer/Footer';
import ProjectDetail from './pages/projectDetail/ProjectDetail';
import ScrollToTop from './components/global/scrollToTop/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className='gradients'>
          <div div className='background-gradient-top-page'></div>
          <div className='background-gradient-2'></div>
        </div>
        <Header/>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/project-detail' element={<ProjectDetail />}/>

        </Routes>

        <Footer /> 
      </ScrollToTop>

    </BrowserRouter>
  );
}

export default App;
