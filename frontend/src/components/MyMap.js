import React,{useState} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap,Marker} from 'react-google-maps'
const THEFT_ICON = 'https://cdn4.iconfinder.com/data/icons/fat-police-policeman/202/fat-policeman-theft-009-512.png'
const KIDNAPPING_ICON = 'https://cdn2.iconfinder.com/data/icons/criminal-robber-burglar-kidnapper-rapist-thief/216/criminal-004-512.png'
const ROBBERY_ICON = 'https://cdn3.iconfinder.com/data/icons/crime-and-criminal-part-1-of-3/312/crime-criminal-002-512.png'
const MURDER_ICON = 'https://cdn1.iconfinder.com/data/icons/accident-1/100/People-10-512.png'
function MyMapp(props) {
  const [nlat,setLat]=useState(-12.914730)
  const [nlng,setLng]=useState(-38.493570)
  function Map(){
    return(
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{lat: -12.964150, lng: -38.505820}}
        onClick={props.onMapClick}
      >
        <Marker 
          key={1}
          position={{lat:nlat , lng:nlng}}
          onClick={()=>{props.onMarkerClick(nlat,nlng)}}
          icon={{
              url:KIDNAPPING_ICON,
              scaledSize:new window.google.maps.Size(32,32)
            }}
        />

        <Marker 
          key={2}
          position={{lat:-12.92500 , lng:nlng}}
          onClick={()=>{props.onMarkerClick(nlat,nlng)}}
          icon={{
              url:MURDER_ICON,
              scaledSize:new window.google.maps.Size(32,32)
            }}
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