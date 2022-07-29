import React, { Component } from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import { Route, Routes } from 'react-router-dom';
import Piano from './components/Piano';
import Registration from './components/Registration';
import Entrance from './components/Entrance';
import IconsDesk from './components/IconsDesk';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Routes>
        <Route path='' element={<FirstPage/>}>
          <Route path='/registration' element={<Registration/>} />
          <Route path='/entrance' element={<Entrance/>} />
        </Route>
        <Route path='/piano' element={<Piano/>}>
          <Route path='/piano/icons' element={<IconsDesk/>} />
        </Route> 
      </Routes>
    </div>
  );
}
}

export default App;
