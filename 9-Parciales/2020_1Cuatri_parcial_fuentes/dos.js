/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro

ANTONIO AGUIRRE

*/

function mostrar()
{
  let tipoIngresado;
  let cantidadIngresada;
  let precioIngresado;
  let acumuladorBolsas;
  let acumuladorBolsasArena;
  let acumuladorBolsasCal;
  let acumuladorBolsasCemento;
  let MayorCantidad
  let precio;
  let descuento;
  let continuarIngresando;

  continuarIngresando = "s";

  precio = 0;
  acumuladorBolsas = 0;

  while (continuarIngresando = "s")	{

		tipoIngresado = prompt("Ingrese el tipo de producto (arena/cal/cemento)");

		while (isNaN(tipoIngresado) == false ||tipoIngresado != "arena" && tipoIngresado != "cal" && tipoIngresado != "cemento")
		{

			tipoIngresado = prompt("Error, ingrese un tipo válido (arena/cal/cemento)");
			
		}

    cantidadIngresada = prompt ("Ingrese la cantidad de bolsas");
		cantidadIngresada = parseInt(cantidadIngresada);

		while (isNaN(cantidadIngresada) == true || cantidadIngresada < 1)
		{

			cantidadIngresada = prompt ("Ingrese una cantidad valida");
			cantidadIngresada = parseInt(cantidadIngresada);

		}

    precioIngresado = prompt ("Ingrese el precio por bolsa");
		precioIngresado = parseInt(precioIngresado);

		while (isNaN(precioIngresado) == true || precioIngresado < 1)
		{

			precioIngresado = prompt ("Error, ingrese un precio valido");
			precioIngresado = parseInt(precioIngresado);

		}

    precio += (cantidadIngresada * precioIngresado);

    acumuladorBolsas += cantidadIngresada;
    
    switch (tipoIngresado)
    {
      case "arena":
        acumuladorBolsasArena += cantidadIngresada;
      break;

      case "cal":
        acumuladorBolsasCal += cantidadIngresada;
      break;

      case "cemento":
        acumuladorBolsasCemento += cantidadIngresada;
      break;

    }

    continuarIngresando = prompt ("Desea agregar otro producto? (s/n)")

  } //fin del while

  if (acumuladorBolsas > 30)
  {
    descuento = 25;
  } else {
    if (acumuladorBolsas > 10)
    {
      descuento = 15;
    }
  }
  
  
  if (acumuladorBolsasArena > acumuladorBolsasCal && acumuladorBolsasArena > acumuladorBolsasCemento)
  {

    MayorCantidad = "Arena";

  } else  {

    if (acumuladorBolsasCemento > acumuladorBolsasCal)
    {

      MayorCantidad = "Cemento";

    } else  {

      MayorCantidad = "Cal";

    }

  }
  
  
  
  if (descuento == 0)
  {

    alert ("El importe total a pagar es de:" + precio +
    "\nEl material con mas cantidad de bolsas es: " + MayorCantidad);

  } else  {

    alert ("El importe total a pagar es de:" + precio + 
    "\nEl importe con descuento es: " + ((precio * descuento) / 100) +
    "\nEl material con mas cantidad de bolsas es: " + MayorCantidad);


  }


  alert("dos");
}
