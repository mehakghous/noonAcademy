import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout';
import Careerview from './views/CareerView';
import HomeView from './views/homeView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Layout />} >
          <Route path='/' element={<HomeView />} />
          <Route path='/career' element={<Careerview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
