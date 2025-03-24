/* 
fil: js2.js 
*Denne fil er nr2 for at lave til til kort der ikke er geografiske*
formål: at bruge leaflet (https://leafletjs.com/) til at sætte markør på kort integeret med openstreetmap
*/

var map = L.map('map', {
    crs: L.CRS.Simple
});

var bounds = [[0,0], [400,400]];
var image = L.imageOverlay('img/krop.png', bounds).addTo(map);

map.fitBounds(bounds);



//det hvor kortet starter
map.setView( [200, 200], -10);

//lunge venste
/*var lungeV = L.latLng([ 250, 250 ]);
L.marker(lungeV).addTo(map).bindPopup('venstre lunge');*/

var lunge = L.polygon([
    [350, 260],
    [350, 140],
    [230, 140],  
    [230, 260]
], {color: '216, 112, 147, 0'}
).addTo(map).bindPopup("lunger");

//lunge højre
/*var lungeH = L.latLng([ 250, 170 ]);
L.marker(lungeH).addTo(map).bindPopup('højre lunge');*/


var circle = L.circle([265, 215], {
    color: '216, 112, 147, 0',
    fillColor: '#216, 112, 147, 0',
    radius: 20
}).addTo(map).bindPopup("Hjertet");

var tarm = L.polygon([
    [148, 260],
    [80, 270],
    [35, 230],  
    [35, 190],
    [85, 139], 
    [145, 145]
], {color: '216, 112, 147, 0'}
).addTo(map).bindPopup("Tarm");
