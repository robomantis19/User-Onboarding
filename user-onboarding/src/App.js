import React from 'react';
import Form from './components/Form';
import './App.css';
function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor: `Darkorange`,  marginTop: `0`,marginBottom: `-250px`, height: `200px`, paddingTop: `50px`, fontSize: `4rem`}}>The Coding Round SignUp Form</h1>
      <Form/> 

      <div style={{display: `flex`, justifyContent: `space-between`}}>
        <div style={{height:`600px`, width: `200px`, backgroundColor: `orange`}}/>
        
        <div style={{height:`600px`, width: `200px`, backgroundColor: `orange`}}/>
      </div>
    </div>
  );
}

export default App;
