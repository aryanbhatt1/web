mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ5YW5iaGF0dDEwMDIiLCJhIjoiY2tqaDFmcnloNDFpYTJybnFvbmk0cTliNyJ9.ImW_FZl5b1VBm1bYaLyziA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
	center: [77.11853, 28.53907], // starting position
    zoom: 13 // starting zoom
});

// create the popup
var popup = new mapboxgl.Popup({ offset: 40 }).setText(
    'New Delhi, Delhi 110037'
);

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';

// create the marker
new mapboxgl.Marker(el)
    .setLngLat([77.11853, 28.53907])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

// Add geolocate control to the map.
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

// disable map zoom when using scroll
map.scrollZoom.disable();
