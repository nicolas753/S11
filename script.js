/**/
const DATA_URL = "https://api.chucknorris.io/jokes/random";
const container = document.getElementById("container");

async function mostrarProducto(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        mostrarInfo(data); // Llama a mostrarInfo con el objeto de un solo chiste
    } catch (error) {
        console.error("Error al obtener el chiste:", error);
    }
}

function mostrarInfo(chiste) {
    container.innerHTML = `<div class="row list-group-item d-flex justify-content-start">
        <div class="col-3">
            <img src="${chiste.icon_url}" class="img-thumbnail">
        </div>
        <div class="col-7">
            <p>${chiste.value}</p>
        </div>
    </div>`;
}

mostrarProducto(DATA_URL);




/*
//FETCH
fetch(URL)
.then(respuesta => respuesta.json())
.then(data => {

    mostrarInfo(data);
})

//const título = document.querySelector('h3')//
const URL = 'https://fakestoreapi.com/products'

//Uso del fetch para modificar o cambiar la información ya previamente establecida en el HTML//

fetch(URL)
.then(response => { return response.json()})
.then(data => {//título.innerHTML = data[0].title// //Otra forma de modificarlo con una constante ya definida//
document.querySelector('h3').innerHTML = data[0].title;
document.querySelector('p').innerHTML = data[0].description;
document.querySelector('img').src = data[0].image;
document.querySelector('small').innerHTML = data[0].price;
})
*/
