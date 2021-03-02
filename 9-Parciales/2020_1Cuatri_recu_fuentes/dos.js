/* Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro

ANTONIO AGUIRRE*/ 
function mostrar()
{
  let productoIngresado;
  let cantidadIngresada;
  let precioIngresado;
  let continuar;
  let totalCantidad;
  let descuento;
  let mensaje;
  let acumuladorArena;
  let acumuladorCal;
  let acumuladorCemento;
  let productoMasComprado;
  let primerPrecioMasAlto;
  let precioMasAlto
  let productoMasCaro;

  acumuladorArena = 0;
  acumuladorCal = 0;
  acumuladorCemento = 0;
  descuento = 0;
  totalCantidad = 0;
  continuar = "s";
  primerPrecioMasAlto = true;

  while (continuar == "s")
  {

    productoIngresado = prompt("Ingrese un producto (arena/cal/cemento)")
		while ( isNaN(productoIngresado) == false || productoIngresado != "arena" && productoIngresado != "cal" && productoIngresado != "cemento")
		{

			productoIngresado = prompt ("Error, ingrese un producto válido:");

		}

    cantidadIngresada = prompt("Ingrese la cantidad:");
		cantidadIngresada = parseInt(cantidadIngresada);
		while (isNaN(cantidadIngresada) == true || cantidadIngresada <= 0)
		{

			cantidadIngresada = prompt("Ingrese una cantidad valida:");
			cantidadIngresada = parseInt(cantidadIngresada);

		}

    precioIngresado = prompt("Ingrese el precio ");
		precioIngresado = parseInt(precioIngresado);
		while (isNaN(precioIngresado) == true || precioIngresado < 1)
		{

			precioIngresado = prompt ("Error, ingrese un precio válido:");
			precioIngresado = parseInt(precioIngresado);

		}

    switch (productoIngresado)
    {
      case "arena":
        acumuladorArena += cantidadIngresada;
      break;

      case "cal":
        acumuladorCal += cantidadIngresada;
      break;

      case "cemento":
        acumuladorCemento += cantidadIngresada;
      break;
    }

    if (primerPrecioMasAlto == true || precioIngresado > precioMasAlto)
    {

      precioMasAlto = precioIngresado;
      productoMasCaro = productoIngresado;
      primerPrecioMasAlto = false;

    }

    totalCantidad +=  cantidadIngresada;
    totalCantidad = parseInt(totalCantidad);

    continuar = prompt("Desea agregar otro producto? (s/n)")

  } //FIN WHILE

  // d)
  if (acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento)
  {

    productoMasComprado = "arena";

  } else  {

    if (acumuladorCal > acumuladorCemento)
    {

      productoMasComprado = "cal";

    } else  {

      productoMasComprado = "cemento";

    }

  }

  if (totalCantidad > 30)
  {

    descuento = 25;
    mensaje = "a) El precio bruto total es: " + totalCantidad +
    "\nb) El precio con descuento es: " + (totalCantidad - ((totalCantidad * descuento) / 100)) +
    "\nd) Producto mas comprado: " + productoMasComprado +
    "\nf) El producto mas caro es: " + productoMasCaro;

  } else  {

    if (totalCantidad > 10)
    {

      descuento = 15;
      mensaje = "a) El precio bruto total es: " + totalCantidad +
    "\nb) El precio con descuento es: " + (totalCantidad - ((totalCantidad * descuento) / 100)) +
    "\nd) Producto mas comprado: " + productoMasComprado +
    "\nf) El producto mas caro es: " + productoMasCaro;

    } else  {

      mensaje = "a) El precio bruto total es: " + totalCantidad +
      "\nd) Producto mas comprado: " + productoMasComprado +
      "\nf) El producto mas caro es: " + productoMasCaro;

    }

  }

  alert (mensaje);

}
