
      function initMap() {

        const location = { lat: 14.1037977, lng: -87.197274 };
       
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: location,
        });
        const marker = new google.maps.Marker({
          position: location,
          map: map,
        });
      }