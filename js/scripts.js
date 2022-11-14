/* Productos Base de Datos */


//Aray que contiene objetos

let listaProductos = [
    {
        id: 1,
        nombre: "Proteina",
        precio: 100,
        stock: 10
    },

    {
        id: 2,
        nombre: "Creatina",
        precio: 200,
        stock: 10
    },

    {
        id: 3,
        nombre: "Aumentador",
        precio: 80,
        stock: 10
    },

    {
        id: 4,
        nombre: "Quemador",
        precio: 120,
        stock: 10
    },

    {
        id: 5,
        nombre: "Vitaminas",
        precio: 50,
        stock: 10
    },

    {
        id: 6,
        nombre: "Preentreno",
        precio: 82,
        stock: 2
    }
]

//-------------------------------------------

let mostrador = document.getElementById("mostrador")
let carrito = [] //---> Aca se agregaran los profuctos con  el btn


//----------------------------------------------

listaProductos.forEach((x) => {  // Para cada indice del array 


    let container = document.createElement("div")//---> Para asignar mas estilo
    container.classList.add("card", "col-sm-4")


    //Body
    let cardBody = document.createElement("div")// Elemento padre
    cardBody.classList.add("card-body")

    //Title
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add("card-title")
    cardTitle.innerText = `Nombre: ${x.nombre}`

    //Price
    let cardPrice = document.createElement("p")
    cardPrice.classList.add("card-text")
    cardPrice.innerText = `Precio: ${x.precio}`

    //Stock
    let cardStock = document.createElement("p")
    cardStock.classList.add("card-text")
    cardStock.innerText = `Stock: ${x.stock}`

    //Button
    let cardButton = document.createElement("button")
    cardButton.classList.add("btn", "btn-primary")
    cardButton.innerText = "comprar"
    cardButton.setAttribute("atributoId", x.id)

    cardButton.addEventListener("click", addProdToCart)
    function addProdToCart(){ 

    }



    //Apeendear a"cardBody" los hijos  (en orden que apareceran)
    cardBody.append(cardTitle)
    cardBody.append(cardPrice)
    cardBody.append(cardStock)
    cardBody.append(cardButton)

    //Apendear a "container" las "cardBody"
    container.append(cardBody)

    //Apendear a "mostrador" el "container"
    mostrador.append(container)
})