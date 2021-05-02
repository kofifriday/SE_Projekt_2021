

// Marker code goes here
const LocationOfMarker = { lat: 53.56, lng: 10.03 };

// Create a marker icon from an image URL:
const icon = new H.map.Icon('https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg');

// Create a marker using the previously instantiated icon:
const marker = new H.map.Marker(LocationOfMarker, { icon: icon });

// Add the marker to the map:
map.addObject(marker);

"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Closed_Book_Icon.svg/512px-Closed_Book_Icon.svg.png"

