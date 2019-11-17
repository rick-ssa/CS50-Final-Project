import React, {useState, useEffect} from 'react';
import './App.css';
import MyMapp from './components/MyMap'
import ToogleButton from './components/ToogleButton'


function App() {

  const [enable,setEnable] = useState('disabled')

  useEffect(()=>{
    console.log(enable)
  })

  function handleToogleButton() {
    setEnable('toogleOff')
  }

  return(
    <div>
      <div id='map' style={{width:'100vw', height:'100vh'}}>
        <div id='menu'>
          <input type='date'  onChange={handleToogleButton}/>
          <select name='crimanal_events'>
            <option name='robbery'>Robbery</option>
            <option name='theft'>Theft</option>
            <option name='murder'>Murder</option>
            <option name='kidnapping'>Kidnapping</option>
          </select>
          <ToogleButton value='Mark' enable={enable} className={enable}/>
        </div>
        <MyMapp onMapClick={()=>alert('maps')} onMarkerClick={(lat,lng)=>alert(lat + ' ' + lng)}/>
      </div>
    </div>
  )
}

export default App;
