/* 
fil: js.js 
formål: at bruge leaflet (https://leafletjs.com/) til at sætte markør på kort integeret med openstreetmap
*/

//konstant til at bruge senere for at gør det nemmere, den er lidt mere nordlig end 1. punkt
const kortCenter = [56.23621, 10.08489]

//,13 = hvor meget zoomet ind vi er på kortet
var map = L.map('map').setView(kortCenter, 15);

//copyright filer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//&copy; = copy symbol


//tilføj markør/prik på landkortet ud fra breddegrad i [breddegrad, længdegrad] - i aarhus
var marker = L.marker([56.15, 10.22]).addTo(map);



//tilføj markør/prik med en konstant
var marker = L.marker(kortCenter).addTo(map);

var circle = L.circle([56.235849, 10.082338], 20, {
    color: 'palevioletred',
    fillColor: '#d87093',
    fillOpacity: 0.5,
    radius: 100
}).addTo(map);

var polygon = L.polygon([
    [56.238628, 10.085964],
    [56.237742, 10.086651],
    [56.237715, 10.086002],  
    [56.237571, 10.085964],
    [56.237642, 10.08517]
]).addTo(map);

//openPopup() bruges til den der skal være poppet op fra starten af
marker.bindPopup("<b>Hej verden</b><br>Velkommen til Søften").openPopup();
circle.bindPopup("Dette er mine forældres hus");
polygon.bindPopup("Det her er kirken og kirkegården");

//til søftenkortet
var marker2 = L.marker([56.23769, 10.087928]).addTo(map);
marker2.bindPopup("<b>Her ligger Netto</b><br>Den ligger i den Rema's gamle lokaler<br>Netto er altid tom");

var marker3 = L.marker([56.238316, 10.087295]).addTo(map);
marker3.bindPopup("<b>Her ligger Rema 1000</b><br>De har bygget nyt for at få mere plads og flere parkeringspladser<br>Rema er altid fyldt");

var marker4 = L.marker([56.236778, 10.085245]).addTo(map);
marker4.bindPopup("<b>Børnehaven Engen</b><br>Her gik jeg i børnehave");

var circle2 = L.circle([56.233612, 10.091436], 20, {
    color: 'palevioletred',
    fillColor: '#d87093',
    fillOpacity: 0.5,
    radius: 100
}).addTo(map);
circle2.bindPopup("Dette er min farmor og farfars hus");


var polygon2 = L.polygon([
    [56.236193, 10.08469],
    [56.23614, 10.085042],
    [56.235764, 10.084977],  
    [56.235573, 10.086565],
    [56.233079, 10.088217], 
    [56.232816, 10.081716]
]).addTo(map);
polygon2.bindPopup("<b>Dette er skolens område</b><br> Der er både en bygning til udskoling, mellemskoling og indkoling, en hal, en tandlæge, og en masse legepladser");



var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

//søften url: https://www.openstreetmap.org/#map=16/56.23621/10.08489

