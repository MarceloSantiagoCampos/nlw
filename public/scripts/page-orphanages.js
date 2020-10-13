
//------ Variável -----------
const map = L.map('mapid').setView([-18.9281093, -48.2955692], 15);

//--- criando layer Mapa, a visualização em si do mapa ----------
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

// Criando Icone (olhar documentação do Leaflet)
const icon = L.icon({
    iconUrl: "/public/images/map-marker.svg", 
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2],
});

// Criando PopUp overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="/public/images/arrow-white.svg"/> </a>');


//--- criando poiter/ponteiro no mapa, simbolo que indica no mapa a coordenada especificada [51.5, -0.09] ----------
L.marker([-18.9281093, -48.2955692], { icon }).addTo(map) // { icon } é a abreviação de { icon: icon } por já haver uma 
    .bindPopup(popup)                                     // constante que se chama icon


/** Como mudar a latitude e longitude do mapa
 * 
 * url google maps 
 * https://www.google.com/maps/place/Uberl%C3%A2ndia,+MG/@-18.9281093,-48.2955692,13.75z/data=!4m5!3m4!1s0x94a4450c10bbbaef:0xae370c93616d5c9c!8m2!3d-18.9127534!4d-48.275484
 * 
 * nesse url podemos tirar a localização, bem como o zoom, depois do sibolo @ 
 * /@-18.9281093,-48.2955692,13.75z
 * 
 * sendo os valores de acordo com o pedido nas funções JavaScript:
 * [-18.9281093, -48.2955692], 13.75
 */