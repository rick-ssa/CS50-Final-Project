import React from 'react';
import './App.css';
import DateInput from './components/dateInput'

function App() {

  const getDate = (d)=>{
    document.getElementById('date').innerHTML = d
  }

  const style ={
    color:"blue",
    marginTop:"10px",
    marginLeft:"10px",
    marginBottom:"10px",
    borderColor:"lightblue"
  }

  
  return (
    <>
      
      <DateInput 
        label='entrada' 
        style ={style} 
        ids={{day:'day1',month:'month1',year:'year1'}} 
        getDate={getDate} 
        color='blue'
        dayDefault={(new Date()).getDate()}
        monthDefault={(new Date()).getMonth() + 1}
        yearDefault={(new Date()).getFullYear()}
      />

      <div id='date'></div>
    </>
  );
}

export default App;
