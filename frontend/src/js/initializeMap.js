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
            console.log(image)
            if(!bts[0].classList.contains('disabled')){
                markerCluster.markers_.push(
                    new google.maps.Marker(
                        {
                            position:{lat:e.latLng.lat(), lng: e.latLng.lng()},
                            animation: google.maps.Animation.DROP,
                            icon: image,
                        }
                    )
                )
                map.setCenter({lat:map.getCenter().lat() + 0.00001, lng:map.getCenter().lng()})
            }
        }
    )
    // Create an array of alphabetical characters used to label the markers.

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function(location, i) {
      return new google.maps.Marker({
        position: location,
      });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}
  var locations = []

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

  var eventDate = document.getElementById('dateEvent');

  eventDate.addEventListener("change",(e)=>{
      enabled(true);
  })



