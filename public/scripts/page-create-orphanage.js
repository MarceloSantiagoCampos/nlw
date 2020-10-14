
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
});


// marcador que salvará os dados que serão feitos na função a seguir
let marker;

// Criar e adicionar Marcador
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remover icone anterior (&& verificar se o marker existe e se existir ativa o resto da função)
    marker && map.removeLayer(marker)
    
    //add icon layer
    marker = L.marker([lat,lng], {icon}).addTo(map)

});

// Acidionar o campo de fotos
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images');

    //pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');

    //realizar clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    //verificar se o campo esta vazio, se sim, não adicionar ao container de images
    const input = newFieldContainer.children[0]
    if (input.value == "") {
        return
    }

    //limpar o campo antes de adicionar ao container de imagens
    newFieldContainer.children[0].value = "";

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

// Deletar o campo de fotos
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload');
    if(fieldsContainer.length <= 1){
        //Limpar o valor do campo
        span.parentNode.children[0].value="";
        return
    }

    // Deletar o campo
    span.parentNode.remove();
}

// Selecionar do sim e não
function toggleSelect(event) {
    // Retirar a classe active dos botões
    document.querySelectorAll('.button-select button').forEach(button => button.classList.remove('active'));

    // Colocar a classe active
    const button = event.currentTarget
    button.classList.add('active')

    // Atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    //verificar se sim ou não
    input.value = button.dataset.value

    
}