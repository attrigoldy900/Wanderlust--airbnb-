let mapToken = "<%= process.env.MAP_TOKEN %>";
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: "map",
    style: `https://api.maptiler.com/maps/streets/style.json?key=${mapToken}`,
    center: listing.geometry.coordinates,
    zoom: 9
});

// Marker
const marker = new mapboxgl.Marker()
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({offset: 25}).setHTML(
            `<h4>${listing.location}</h4><p>Exact location provided after booking</p>`
        )
    )
    .addTo(map);
