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
import PageNotFound from './pages/pageNotFound/PageNotFound';
import { useEffect, useState } from 'react';
import PreloadModel from './components/global/preloadModel/PreloadModel';


function App() {

  const [apiPersonalData, setPersonalApiData] = useState(null);
  // Get personal info from api
  const getPersonalData = async () => {
    const resp = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/api/personal-info?populate=*`);
    const json = await resp.json();
    setPersonalApiData(json);
  }

  useEffect(() => {
    getPersonalData();
  }, []);


  return (
    <BrowserRouter>
      <ScrollToTop>
        <PreloadModel/>
        <div className='gradients'>
          <div div className='background-gradient-top-page'></div>
          <div className='background-gradient-2'></div>
        </div>
        <Header/>

        <Routes>
          <Route path='/' element={<Home apiPersonalData={apiPersonalData}/>}/>
          {/* <Route path='/project-detail' element={<ProjectDetail />}/> */}
          <Route path='/projecten/:projectSlug' element={<ProjectDetail personalInfo={apiPersonalData}/>}/>
          <Route path="/*" element={<PageNotFound />} />

        </Routes>

        <Footer /> 
      </ScrollToTop>

    </BrowserRouter>
  );
}

export default App;
