import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

import VideoComponents from './components/VideoComments';

import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import HomeContent from './components/HomeContent';
import HomePage from './components/HomePage';
import {Route,Routes,Navigate} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import { useNavigate } from 'react-router-dom';
import Quiz from './components/QuizComponent'

function App () {
  

  // loginUser = () => {
  //   this.setState({isLoggedIn: true});
  //   this.props.history.push('/home');
  // }


  const navigate = useNavigate();
  console.log(navigate);
  
const questions={
  question1:{
    id:1,
    question:'What was the topic of this video?',
    answers:[
      {id_ans:1,
      label:'python',
      is_correct:true},
      {id_ans:2,
      label:'c++',
      is_correct:false,},
      {id_ans:3,
      label:'java',
      is_correct:false,},
      {id_ans:4,
      label:'c#',
      is_correct:false,}
      ],
  },
  question2:{
    id:2,
    question:'What was the topic of this video?',
    answers:[
      {id_ans:1,
      label:'python',
      is_correct:true},
      {id_ans:2,
      label:'c++',
      is_correct:false,},
      {id_ans:3,
      label:'java',
      is_correct:false,},
      {id_ans:4,
      label:'c#',
      is_correct:false,}
      ],
  },
  question3:{
    id:3,
    question:'What was the topic of this video?',
    answers:[
      {id_ans:1,
      label:'python',
      is_correct:true},
      {id_ans:2,
      label:'c++',
      is_correct:false,},
      {id_ans:3,
      label:'java',
      is_correct:false,},
      {id_ans:4,
      label:'c#',
      is_correct:false,}
      ],
  }
}

  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage navigate={navigate}/>}></Route>
        <Route path='/test' element={<Quiz questions={questions}></Quiz>}></Route>
        <Route path='/' element={<Navigate to="/login"/>}></Route>
      </Routes>
    </div>
    );
 
  
}

export default App;