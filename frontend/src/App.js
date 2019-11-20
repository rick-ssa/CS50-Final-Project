import React, {useState, useEffect} from 'react';
import './App.css';
import MyMapp from './components/MyMap'
import ToogleButton from './components/ToogleButton'


function App() {

  const [enable,setEnable] = useState('disabled')
  const [points,setPoints]=useState([])
  let canMark;
  useEffect(()=>{
    //console.log(enable)
  })

  function handleToogleButton() {
    setEnable('toogleOff')
  }

  function Mark(center) {
    if (canMark){
      const [lat,lng] = center
      let pt = JSON.parse(JSON.stringify(points))
      pt.push({lat:lat,lng:lng,icon:document.getElementById('criminal_events').value})
      setPoints(pt)
    }
  }

  function onTgl(toogled){
    console.log(toogled)
    return canMark = toogled
  }

  return(
    <div>
      <div id='map' style={{width:'100vw', height:'100vh'}}>
        <div id='menu'>
          <input type='date'  onChange={handleToogleButton}/>
          <select id='criminal_events' name='crimanal_events'>
            <option name='robbery' value={2}>Robbery</option>
            <option name='theft' value={0}>Theft</option>
            <option name='murder' value={3}>Murder</option>
            <option name='kidnapping' value={1}>Kidnapping</option>
          </select>
          <ToogleButton onTgl={onTgl} value='Mark' enable={enable} className={enable}/>
        </div>
        <MyMapp points={points} onMapClick={(center)=>Mark(center)} onMarkerClick={(lat,lng)=>alert(lat + ' ' + lng)}/>
      </div>
    </div>
  )
}

export default App;
