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

//Variables Globales

let mostrador = document.getElementById("mostrador")
let cartList = document.getElementById("carrito")
let cart = [] //---> Aca se agregaran los profuctos con  el btn


//----------------------------------------------

//Generador de cards

listaProductos.forEach((x) => {  // Para cada indice del array 


    let container = document.createElement("div") //---> Para asignar mas estilo
    container.classList.add("card", "col-sm-4")



    //Body
    let cardBody = document.createElement("div") // Elemento padre
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
    cardButton.setAttribute("atributoId", x.id) //---> Setea/ asigna un ID a cada boton correspondiente al ID del producto

    cardButton.addEventListener("click", addProdToCart)


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

//----------------------------------------------------------------------

//Funciones

function addProdToCart(parametro) {
    cart.push(parametro.target.getAttribute("atributoId")) //---> Hace un push al array "cart" del producto con el atributo ID con la clave "atributoId" que se seleccione 
    renderCart()
}



//---------------------------------------------------------------------------------


function renderCart() {

    cartList.innerHTML = " "

    let cartWhithoutRepetedElements = [...new Set(cart)] //--> Filtrara las productos repetidos y los dejara en un nuevo array

    cartWhithoutRepetedElements.forEach((itemId) => {

        let item = listaProductos.filter((producto) => {  // Guardara el objeto de "listaProductos" que tenga el id que se busca
            return producto.id === parseInt(itemId)
        })

        let quantity = cart.reduce((total, id) => {
            return id === itemId ? total += 1 : total      // Guarda el valor final del reduce y va acumulando la cantidad del  producto
        }, 0)



        let linea = document.createElement("li")
        linea.classList.add("list-group-item", "text-right", "mx-2")
        linea.innerText = `${quantity} x ${item[0].nombre} - $${item[0].precio}`

        let buttonDelete = document.createElement("button")
        buttonDelete.classList.add("btn", "btn-danger", "mx-5")
        buttonDelete.innerText = "Borrar"
        buttonDelete.dataset.item = itemId
        /* buttonDelete.addEventListener("click", deleteProduct) */

        linea.append(buttonDelete)
        carrito.append(linea)
    })
}