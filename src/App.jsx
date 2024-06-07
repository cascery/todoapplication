

/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { Todos } from './assets/todos';
import { Loginform } from './assets/loginform';
import { Signupform } from './assets/signupform'
import { AuthPage} from './assets/AuthPage'
import { useState,useEffect } from 'react';

import { Loading } from './assets/loading';


import { BuilderComponent, builder } from '@builder.io/react'

  builder.init('cbd058e6297f4786b51121078d638bc7')
    
  export const MyComponent = () => {
    const [builderContentJson, setBuilderContentJson] = useState(null)
  
    useEffect(() => { 
      builder.get('page', { url: location.pathname })
        .promise().then(setBuilderContentJson)
    }, [])
  
    return <BuilderComponent model="page" content={builderContentJson} />
  }
function App() {

 
return (

   <Router>
   <Routes>
     <Route path="/todos" element={<Todos/>} />
     {/* Define your route for the Loginform component */}
     <Route path="/" exact element={<AuthPage/>} />
<Route     path="/loading"    element ={<Loading/>}/>

   </Routes>
 </Router>
 
 );

  }
  
  

export default App;

