let vehiculo = prompt("¿Que vehiculo necesitas? Bicicleta, Moto o Auto")
const aviso = "Tu vehiculo fue asignado"

while (vehiculo != "") {
    switch (vehiculo.toUpperCase()) {
        case "AUTO":
            const licencia = prompt("Tenes Licencia de Conducir habilitada para AUTOS?")
            if (licencia.toUpperCase() == "SI") {
                alert(aviso)
                vehiculo = ""
            } else {
                const bicicleta = prompt("Al no contar con licencia te recomendamos una Bicicleta ¿SI o NO?")
                if (bicicleta.toUpperCase() !== "SI") {
                    alert("No es posible asignarte un vehiculo, gracias!!!")
                    vehiculo = ""
                } else {
                    alert(aviso)
                    vehiculo = ""
                }
            }
            break
        case "MOTO":
            const licencia2 = prompt("Tenes Licencia de Conducir habilitada para MOTOS?")
            if (licencia2.toUpperCase() == "SI") {
                alert(aviso);
                vehiculo = ""
            } else {
                const bicicleta = prompt("Al no contar con licencia te recomendamos una Bicicleta ¿SI o NO?")
                if (bicicleta.toUpperCase() !== "SI") {
                    alert("No es posible asignarte un vehiculo, gracias!!!")
                    vehiculo = ""
                } else {
                    alert(aviso)
                    vehiculo = ""
                }

            }
            break

        case "BICICLETA":
            alert(aviso);
            vehiculo = ""
            break
        default:
            alert("Por el momento no contamos con el vehiculo solicitado")
            vehiculo = prompt("¿Que vehiculo necesitasr?")
            break
    }


}
