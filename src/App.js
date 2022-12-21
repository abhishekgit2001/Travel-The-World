import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import AddNewPost from './components/add_new_post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route eaxct path= "/" element={<Main />}></Route>
          <Route eaxct path='/add_new_post' element={<AddNewPost />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
