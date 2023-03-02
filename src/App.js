import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './page/HomePage/homepage'
import CategoryPage from './page/CategoryPage/CategoryPage'
import Personal from './page/Personal/Personal'
import Work from './page/Work/Work'
import Health from './page/Health/Health'
import Travel from './page/Travel/Travel'
import Shopping from './page/Shopping/Shopping'
import Education from './page/Education/Education'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/categorypage' element={<CategoryPage />} />
          <Route path='/personal' element={<Personal />} />
          <Route path='/work' element={<Work />} />
          <Route path='/health' element={<Health />} />
          <Route path='/travel' element={<Travel />} />
          <Route path='/shopping' element={<Shopping />} />
          <Route path='/education' element={<Education />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
