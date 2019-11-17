import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap,Marker} from 'react-google-maps'



function MyMapp() {
  function Map(){
    return(
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{lat: -12.964150, lng: -38.505820}}
      >
        <Marker 
          key={1}
          position={{lat:-12.914730 , lng: -38.493570}}
        />
      </GoogleMap>
    )
  }
  
  const WrappedMap = withScriptjs(withGoogleMap(Map))
  return(
    <div>
      <div style={{right:'0', height:'100vh', position:'absolute',left:'200px'}}>
        <WrappedMap 
          googleMapURL ={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC-evz73n0NIWqzTB-TLHPKlvcLZ9rMrTE&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement = {<div style={{ height: '100%' }} />}
          containerElement=  {<div style={{ height: '100%   ',right:'0px', left:'250px' }} />}
          mapElement = {<div style={{ height: '100%' }} />}
        />
      </div>
    </div>
  )
}

export default MyMapp;