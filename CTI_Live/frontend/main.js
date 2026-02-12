// Displays a world map using Leaflet.js and the GeoJSON data in world_borders.js (Highlights country borders)
var map = L.map('map', {}).setView([20, 0], 3);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 2,
    maxZoom: 5,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Lookup table to iterate over every element in ipData (data.js)
var dataLookup = {};
ipData.forEach(d => {
    dataLookup[d.country] = d;
})
// Joins the data in ipdata (data.js) with the Geojson (world_borders.js)
worldData.features.forEach(feature => {
    const iso3 = feature.properties.ISO_A3;

    if(dataLookup[iso3]) { // if data.js has count & count_log data for the given country it adds it to the GeoJSON (world_borders.js) feature
        feature.properties.count = dataLookup[iso3].count;
        feature.properties.count_log = dataLookup[iso3].count_log;
    } else {
        feature.properties.count = 0;
        feature.properties.count_log = 0;
    }
});

// Color Scale Options
// Grey - Yellow - Orange - Red
function getColor(d) {
    return d > 2.5 ? '#7f0000' :
           d > 2.0 ? '#b30000' :
           d > 1.5 ? '#e34a33' :
           d > 1.0 ? '#fc8d59' :
           d > 0.5 ? '#fdbb84' :
           d > 0.1 ? '#bdbdbd' :
                     '#eeeeee';
}
/* Yellow - Orange - Red - Black
function getColor(d) {
    return d > 2.5 ? '#000000' : 
           d > 2.0 ? '#67000d' :
           d > 1.5 ? '#a50f15' :
           d > 1.0 ? '#de2d26' :
           d > 0.5 ? '#fb6a4a' :
           d > 0.1 ? '#fcae91' :
                     '#fee5d9';
}
/* Green - Yellow - Red
function getColor(d) {
    return d > 2.5 ? '#7f0000' :
           d > 2.0 ? '#b30000' :
           d > 1.5 ? '#e34a33' :
           d > 1.0 ? '#fc8d59' :
           d > 0.5 ? '#fdbb84' :
           d > 0.1 ? '#c7e9b4' :
                     '#edf8e9';
}
/* Blue - Purple
function getColor(d) {
    return d > 2.5 ? '#3f007d' :
           d > 2.0 ? '#54278f' :
           d > 1.5 ? '#6a51a3' :
           d > 1.0 ? '#807dba' :
           d > 0.5 ? '#9e9ac8' :
           d > 0.1 ? '#bcbddc' :
                     '#efedf5';
}
*/

// Fills each country with a color set from getColor() based of the count_log property
function style(feature) {
    return {
        fillColor: getColor(feature.properties.count_log),
        weight: 1.5,
        color: '#36454F',
        fillOpacity: .7
    };
}

// Highlights each country when hovered over
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#36454F',
        fillOpacity: 0.7
    });

    layer.bringToFront();
    info.update(layer.feature.properties);
}

// Removes Highlight when the cursor is no longer hovering
function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

// Click listener to zoom into country
var geojson;
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

// Adds mouseover, mouseout, and zoom to our country layers
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}
geojson = L.geoJson(worldData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

// Custom info control, shows country data on over
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// Method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>Malicious IP Count</h4>' +  (props ?
        '<b>' + props.NAME + '</b><br />' + props.count + " IP Addresses Reported"
        : 'Hover over a country');
};
info.addTo(map);

