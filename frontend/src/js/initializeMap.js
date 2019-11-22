

const DAY_MILLISEC = 86400000;
var eventDate = document.getElementById('dateEvent');
var todayMilli =  new Date().getTime();
var dayStartMilli = todayMilli - (30 * DAY_MILLISEC)
var locations=[]

axios.get(`http://192.168.0.101:3333/local?dateStart=${dayStartMilli}&dateEnd=${todayMilli}`)
.then(response=>{
    locations = response.data;
    console.log(response.data)
})

function initMap() {
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: -12.983010073106819, lng: -38.48730705029209}
    });
    
    map.addListener('click',
        (e)=>{
            var image={
                url:urlIcon, 
                size: new google.maps.Size(32,32), 
                scaledSize: new google.maps.Size(32,32),
            }
            
            if(!bts[0].classList.contains('disabled')){
                var dt = new Date(eventDate.value)
                dt = dt.getFullYear() + '-' + (dt.getMonth()+1) + '-' + dt.getDate()
                var contentString = `<div id='content'><div id='ev'>${urlIcon.replace('../assets/','').replace('png','')}</div><div id='dt'>${dt}</div></div>`
                var infoWindow = new google.maps.InfoWindow({content:contentString})
                var mkr = new google.maps.Marker(
                    {
                        position:{lat:e.latLng.lat(), lng: e.latLng.lng()},
                        animation: google.maps.Animation.DROP,
                        icon: image,
                    }
                )
                mkr.addListener('click',()=>infoWindow.open(map,mkr))
                markerCluster.markers_.push(
                    mkr
                )
                
                
                

                map.setCenter({lat:map.getCenter().lat() + 0.00001, lng:map.getCenter().lng()})
                axios.post('http://192.168.0.101:3333/local',{
                    lat:e.latLng.lat(),
                    lng:e.latLng.lng(),
                    dateEvent:new Date(eventDate.value).getTime(),
                    event:urlIcon.replace('../assets/','').replace('.png',''),
                })
                .then(response=>console.log(response))
            }
        }
    )
    // Create an array of alphabetical characters used to label the markers.

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    
    var markers = locations.map(function(location, i) {
        var image={
            url:`../assets/${location.event}.png`, 
            size: new google.maps.Size(32,32), 
            scaledSize: new google.maps.Size(32,32),
        }
        var dt = new Date(location.dateEvent)
        dt = dt.getFullYear() + '-' + (dt.getMonth()+1) + '-' + dt.getDate()
        var contentString = `<div id='content'><div id='ev'>${location.event}</div><div id='dt'>${dt}</div></div>`
        var infoWindow = new google.maps.InfoWindow({content:contentString})
        var mkr = new google.maps.Marker({
            position: {lat:location.lat,lng:location.lng},
            animation: google.maps.Animation.DROP,
            icon: image,
        });
        mkr.addListener('click',()=>infoWindow.open(map,mkr))
        return mkr
    });
    
    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}

var urlIcon;

let bts = document.getElementsByClassName('event')

for(let i=0; i<4; i++) {
    bts[i].addEventListener("click",()=>{
        if(bts[i].classList.contains('enabled')){
        urlIcon = `../assets/${bts[i].id}.png`
        desactiveAllBts()
        bts[i].classList.add('event-active')
        enabled(true)
        bts[i].classList.remove('enabled')
        }
    })
}

function desactiveAllBts(){
for(let i=0; i<4; i++) {
    if (bts[i].classList.contains('event-active')) {
        bts[i].classList.remove('event-active')
    }
}
}

function enabled(isEnabled) {
    for(let i=0; i<bts.length; i++){
        if(isEnabled) {
        if (bts[i].classList.contains('disabled')) {
            bts[i].classList.remove('disabled')
        }
        bts[i].classList.add('enabled')
        } else {
        if (bts[i].classList.contains('enabled')) {
            bts[i].classList.remove('enabled')
        }
        bts[i].classList.add('disabled')
        }
    }
}



eventDate.addEventListener("change",(e)=>{
    enabled(true);
})



