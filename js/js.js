/* 
fil: js.js 
formål: at bruge leaflet (https://leafletjs.com/) til at sætte markør på kort integeret med openstreetmap
*/

//,13 = hvor meget zoomet ind vi er på kortet
var map = L.map('map').setView([56.15, 10.22], 13);

//copyright filer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//&copy; = copy symbol

