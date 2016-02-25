function initMap() {
  // Create center marker at UCSD
  var ucsd_ltlng = {lat:32.880, lng:-117.236};
  var CICC = {lat: 32.885008, lng: -117.241330};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    //center: ucsd_ltlng,
    center: {lat: 32.885008, lng: -117.241330},
    zoom: 15
  });

  var marker = new google.maps.Marker({
      position: CICC,
      map: map,
      title: 'UCSD'
  });

  google.maps.event.addListener(map, 'click', function(event) {
      marker = new google.maps.Marker({
        position: {lat:32.754928, lng: -117.215857},
        map: map,
        title:'phils'
      });
  });
}

