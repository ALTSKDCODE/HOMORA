// Mapbox access token from EJS
mapboxgl.accessToken = mapToken;

// Initialize map
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: coordinates, // <-- THIS FIXES the Bengaluru issue
  zoom: 11,
  pitch: 45,
  bearing: -17.6,
});

// Controls like Airbnb
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
map.addControl(new mapboxgl.FullscreenControl(), 'bottom-right');

// Popup (Airbnb style)
const popup = new mapboxgl.Popup({
  offset: 25,
  closeButton: false,
  className: 'airbnb-popup',
}).setHTML(`
  <div style="font-weight:600; font-size:14px;">
    ${listingTitle}
  </div>
  <div style="color:#555; font-size:12px;">
    ${listingLocation}
  </div>
`);

// Marker (Airbnb red)
new mapboxgl.Marker({
  color: '#FE424D',
  scale: 0.9,
})
  .setLngLat(coordinates)
  .setPopup(popup)
  .addTo(map);

// Auto-open popup
popup.addTo(map);
