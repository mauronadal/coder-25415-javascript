let usuarioGuardado = "coder"
let passwordGuardado = "1234"


let producto1 = "DISCO SSD"
let precio1 = 9.789
let producto2 = "PLACA DE VIDEO"
let precio2 = 112.569
let producto3 = "GABINETES"
let precio3 = 30.524


let usuario = prompt("Ingrese su usuarios (coder)");

if (usuario == usuarioGuardado) {
    alert("El usuario ingresado fue encontrado en la base de datos");
    let password = prompt("Ingrese su password (1234)");

    if (password == passwordGuardado) {
        alert("Login Correcto");



        let producto = prompt("¿Que producto necesitas? Discos SSD, Placas de Video, Gabinetes");
        const aviso = "Producto agregado al carrito";
        const aviso2 = "Inicie el proceso de selección nuevamente";

        while (producto != "") {
            switch (producto.toUpperCase()) {
                case producto1:
                    const compra1 = prompt("El precio es de $ " + precio1 + " Queres agregarlo al carrito? ¿SI o NO?");
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
                case producto2:
                    const compra2 = prompt("El precio es de $ " + precio2 + " Queres agregarlo al carrito? ¿SI o NO?");
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

                case producto3:
                    const compra3 = prompt("El precio es de $ " + precio3 + " Queres agregarlo al carrito? ¿SI o NO?");
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

    } else {
        alert("Password incorrecto, intente nuevamente")

    }

} else {
    alert("Usuario incorrecto, intente nuevamente")

}

