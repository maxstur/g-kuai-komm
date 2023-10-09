















/*Tercera y planteo de proyecto para la entrega final*/

class Producto {
  constructor(id, nombre, precio, categoria, imagen) {
    this.id = id;
    this.name = nombre;
    this.price = precio;
    this.category = categoria;
    this.img = imagen;
  }
}
class DataBase {
    constructor(){
        //Para visualizar catálogo
        this.products = [];
        //Carga de productos
        this.addProduct(1, "Arroz", 400, "limentos",  "arroz.png");
    }

    addProduct(id, nombre, precio, categoria, imagen){
        const producto = new Producto(id, nombre, precio, categoria, imagen);
        this.products.push(producto)
    }
    
    // Nos brinda  el catálogo de productos
    traerRegistros(){
        return this.products;
    }

    registroPorId(id){
        return this.products.find((product) => product.id === id);
    }

    //Revela coincidencias de productos buscados
    resgistroPorNombre(palabra){
        return this.product.filter(producto) => product.name.toLowercase().includes(palabra.toLowercase())
    }
}

//

const bd = new DataBase();

//Elementos
const divProductos = document.querySelector(#productos);

cargarProductos(bd.traerRegistros())

function cargarProducts(productos){
    //
    divProductos.innerHTML = "";
    //
    for  (const producto of products) {
        divProductos.innerHTML += `
        <div class="producto"
            <h4>${product.name}</h4>
            <p class="precio">${product.price}</p>
            <div class="imagen">
                <img src="img/${product.img}"/>
            </div>
            <a href="#" class="btnAgregar" data-id="${product.id}>Agregar al carrito</a>
        </div>
        `;
    }
}

console.log(bd.traerRegistros);