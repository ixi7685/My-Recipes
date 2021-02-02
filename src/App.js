import React, {useState} from 'react';
import {GlobalProvider} from './store/GlobalState'
import styled from 'styled-components'
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'



import Header from './components/Header'
import Content from './components/Content'
import RecipePage from './components/RecipePage'
import Modal from './components/Modal'

import './App.css';

function App() {

  const [isModalOpen, setModal] = useState(false)
  

  return (
    <GlobalProvider>
      <AppWrapper>
      
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Content setModal={setModal}/>
          </Route>
          <Route path='/recipe/:id'>
            <RecipePage />
          </Route>
        </Switch>

      </Router>
       
        
        {isModalOpen && <Modal setModal={setModal}/>}
      </AppWrapper>
    </GlobalProvider>
  );
}

export default App;


const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;


`