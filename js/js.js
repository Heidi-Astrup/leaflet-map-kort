/* 
fil: js.js 
formål: at bruge leaflet (https://leafletjs.com/) til at sætte markør på kort integeret med openstreetmap
*/

//konstant til at bruge senere for at gør det nemmere, den er lidt mere nordlig end 1. punkt
const kortCenter = [56.23621, 10.08489]

//,13 = hvor meget zoomet ind vi er på kortet
var map = L.map('map').setView(kortCenter, 13);

//copyright filer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//&copy; = copy symbol


//tilføj markør/prik på landkortet ud fra breddegrad i [breddegrad, længdegrad]
var marker = L.marker([56.15, 10.22]).addTo(map);



//tilføj markør/prik med en konstant
var marker = L.marker(kortCenter).addTo(map);

var circle = L.circle(kortCenter, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [56.16, 10.22],
    [56.16, 10.25],
    [56.17, 10.25]
]).addTo(map);

//openPopup() bruges til den der skal være poppet op fra starten af
marker.bindPopup("<b>Hej verden</b><br>Her er Søften").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

//søften url: https://www.openstreetmap.org/#map=16/56.23621/10.08489
