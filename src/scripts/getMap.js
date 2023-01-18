export function getMap(long, latt) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamlvbmdxaXBhbiIsImEiOiJjbGQwazA3eXgyeWJkM3BrNmI5bjFtcXF1In0.K6FfXFCQgn5x31jHvjaW2Q';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/jiongqipan/cld0k1ilh000515qffkp57mli', // style URL
        center: [-74.01, 40.71], // starting position [lng, lat]
        zoom: 11 // starting zoom
    });
    return map;
}