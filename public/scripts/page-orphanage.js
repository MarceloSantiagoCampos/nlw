
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


const map = L.map('mapid', options).setView([-18.9281093, -48.2955692], 15);

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


//--- criando poiter/ponteiro no mapa, simbolo que indica no mapa a coordenada especificada [-18.9281093, -48.2955692] ---------
L.marker([-18.9281093, -48.2955692], { icon }).addTo(map) // { icon } é a abreviação de { icon: icon } por já haver uma 



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


 //-------------- Galeria de Imagens  ------------------------------------------------------------------------------------------
 function selectImage(event) {
    const button = event.currentTarget

    // Remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClasse) 

    function removeActiveClasse (button) {
        button.classList.remove("active")
    }
        /* Arrow Function () => {} é uma abreviação da Function convencional function () {} 
        * buttons.forEach((button) => { bloco de códigos })
        */


    // Selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // Atualizar o Container de imagem
    imageContainer.src = image.src


    //Adicionar a classe .active para o botão selecionado/disparador do evento/currentTarget
    button.classList.add('active')


 }