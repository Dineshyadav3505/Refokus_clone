import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Work from './Components/Work/Work';
import Carreers from './Components/Careers/Carreers';
import News from './Components/News/News';

const App = () => {
  return (
    <div className='min-h-screen w-screen bg-zinc-900 cursor-none '>

      <Routes>
        <Route  path='/'        element={<Home/>} />
        <Route  path='/work'    element={<Work/>} />
        <Route  path='/careers' element={<Carreers/>} />
        <Route  path='/news'    element={<News/>} />

        {/* <Route path='/home'>Home</Route> */}

      </Routes>

  

      
    </div>
  );
}

export default App;
