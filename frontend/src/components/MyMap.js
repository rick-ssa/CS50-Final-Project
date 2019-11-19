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
    let marks = ()=>{
      const event = [THEFT_ICON,KIDNAPPING_ICON,ROBBERY_ICON,MURDER_ICON]
      let m = []
        console.log(props.points.length)
        for(let i=0; i<props.points.length; i++){
          m.push(<Marker 
                key={i+1}
                position={{lat:props.points[i].lat , lng:props.points[i].lng}}
                //onClick={()=>{props.onMarkerClick(nlat ,nlng +(i*0.001))}}
                icon={{
                  url:event[props.points[i].icon],
                  scaledSize:new window.google.maps.Size(24,24)
                }}
              />)
        }
      return m
    }

    return(
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{lat: -12.964150, lng: -38.505820}}
        onClick={(obj)=>{props.onMapClick([obj.latLng.lat(),obj.latLng.lng()])}}
       >
        {marks()}
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