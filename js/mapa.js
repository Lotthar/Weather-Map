var map;
var infoWin = [];
var mapa = document.getElementById("map");
var marker = "";
function initMap() {
	var podgorica = {
		lat: 42.4304,
		lng: 19.2594
	};
	map = new google.maps.Map(mapa, {
		zoom: 5,
		center: podgorica
	});
	//addMarker(podgorica);
	google.maps.event.addListener(map, "click", function(e) {
		for (let i = 0; i < infoWin.length; i++) {
			infoWin[i].close();
		}
		infoWin = [];
		let latitude = e.latLng.lat().toFixed(2);
		let longitude = e.latLng.lng().toFixed(2);
		let l = new google.maps.LatLng(latitude, longitude);
		selectGrad(l);
	});
}
function addMarker(location) {
	marker = new google.maps.Marker({
		position: location,
		map: map
	});
	marker.setMap(map);
}
