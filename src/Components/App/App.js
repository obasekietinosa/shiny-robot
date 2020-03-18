import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Journal from '../Journal/Journal';
import JournalPicker from '../Journal/JournalPicker';
import Navbar from '../Navbar/Navbar';
import Default from '../Default';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" >
            <JournalPicker />
          </Route>
          <Route path='/journal/:slug'>
            <Journal />
          </Route>
          <Route component={ Default } />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
