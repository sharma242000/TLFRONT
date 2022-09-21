import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar } from 'react-bootstrap';
import './App.css';
import Eventcard1 from './events/Eventcard1';
import Eventcard2 from './events/Eventcard2';
// import Background from './Components/Background';
import Navbar from './Components/Navbar';
import People from './Components/Contact/People/People';
 import Project from "./Components/Project"
import Form from './Components/Contact/Form/Form';
import Quote from './Components/Quote';
import Background from './Components/Background';
import Machines from './Components/Machines';
import Centrado from './Components/Centrado';
import Event from './Components/Event';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Homelast from './Components/Homelast/Components/Homelast';

function App() {
  return (
    <> 
   <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<> <Background/></>} />
      <Route path='/Project' element={<Project/>}/>
      <Route path= '/Machine' element={<Machines/>}/>
      <Route path='/Contacts' element={ <People/> }/> 
      <Route path='/Events' element = {<Event/>} />
     </Routes>
    

    </BrowserRouter>
    </>
  );
}

export default App;
