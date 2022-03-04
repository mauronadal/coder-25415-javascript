

// Array 

// class Producto {
//     constructor(idProducto, nombreProducto, precioProducto) {
//         this.idProducto = parseFloat(idProducto);
//         this.nombreProducto  = nombreProducto.toUpperCase();
//         this.precioProducto  = parseFloat(precioProducto);
//     }
//     sumaIva() {
//         this.precioProducto = this.precioProducto * 1.21;
//     }

//     
    
//   }
  
//   const productos = [];
  
//   productos.push(new Producto("1", "disco ssd", "9.789"));
//   productos.push(new Producto("2", "placa de video", "112.569"));
//   productos.push(new Producto("3","gabinetes", "30.524"));
  
//   console.log(JSON.stringify(productos))
  
  
  
//   for (const producto of productos){
  
//      producto.sumaIva();
     
//      alert ("El precio final de " + producto.nombreProducto + " es de " + producto.precioProducto)

     
//   }
    

 


//Funciones y Objetos

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.ver = function(){ console.log(this.nombre + " $" + this.precio)}
}
const producto1 = new Producto("DISCO SSD", 9.789);
const producto2 = new Producto("PLACAS DE VIDEO", 112.569);
const producto3 = new Producto("GABINETES", 30.524);

producto1.ver();
producto2.ver();
producto3.ver();

  
  
  
  
          let producto = prompt("¿Que producto necesitas? Discos SSD, Placas de Video, Gabinetes");
          const aviso = "Producto agregado al carrito";
          const aviso2 = "Inicie el proceso de selección nuevamente";
  
          while (producto != "") {
              switch (producto.toUpperCase()) {
                  case producto1.nombre:
                      const compra1 = prompt("El precio es de $ " + producto1.precio + " Queres agregarlo al carrito? ¿SI o NO?");
                      if (compra1.toUpperCase() == "SI") {
                          alert(aviso);
                          producto = ""
                      } else {
                          const nuevoproducto = prompt("Queres agregar otro producto ¿SI o NO?");
                          if (nuevoproducto.toUpperCase() !== "SI") {
                              alert("Gracias por visitarnos!!!");
                              producto = ""
                          } else {
                              alert(aviso2);
                              producto = ""
                          }
                      }
                      break
                  case producto2.nombre:
                      const compra2 = prompt("El precio es de $ " + producto2.precio + " Queres agregarlo al carrito? ¿SI o NO?");
                      if (compra2.toUpperCase() == "SI") {
                          alert(aviso);
                          producto = ""
                      } else {
                          const nuevoproducto = prompt("Queres agregar otro producto ¿SI o NO?");
                          if (nuevoproducto.toUpperCase() !== "SI") {
                              alert("Gracias por visitarnos!!!");
                              producto = ""
                          } else {
                              alert(aviso2);
                              producto = ""
                          }
  
                      }
                      break
  
                  case producto3.nombre:
                      const compra3 = prompt("El precio es de $ " + producto3.precio + " Queres agregarlo al carrito? ¿SI o NO?");
                      if (compra3.toUpperCase() == "SI") {
                          alert(aviso);
                          producto = ""
                      } else {
                          const nuevoproducto = prompt("Queres agregar otro producto ¿SI o NO?");
                          if (nuevoproducto.toUpperCase() !== "SI") {
                              alert("Gracias por visitarnos!!!");
                              producto = ""
                          } else {
                              alert(aviso2);
                              producto = ""
                          }
  
                      }
                      break
  
                  default:
                      alert("Por el momento no contamos con stock de ese producto");
                      producto = prompt("¿Que producto necesitas?");
                      break
              }
  
  
          }
  
   
    
        
        
               
        
        
       

   