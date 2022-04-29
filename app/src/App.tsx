import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTER } from './utils/router';
import Home from './pages/home';
import './App.css';
import Page1 from './pages/page1';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            {ROUTER.map(item => {
              return <Route path={item.path} key={item.path} element={<item.component />
              } />
            })}
            <Route path="*" element={<Home />} />
          </Route>
          <Route path="*" element={<Page1 />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
