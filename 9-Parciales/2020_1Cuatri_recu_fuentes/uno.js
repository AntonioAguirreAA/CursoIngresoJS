/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total

ANTONIO AGUIRRE
*/
function mostrar()
{
	let vuelta;
	let productoIngresado;
	let precioIngresado;
	let cantidadIngresada;
	let marcaIngresada;
	let fabricanteIngresado;
	//a)
	let unidadesJabonCaro;
	let fabricanteJabonCaro;
	let jabonCaro;
	let primerJabon;
	//b)
	let acumuladorBarbijo;
	let acumuladorJabon;
	let acumuladorAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let contadorAlcohol;
	let promedioB;


	primerJabon = true;
	vuelta = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;
	acumuladorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	contadorAlcohol = 0;

	while (vuelta < 5)
	{

		productoIngresado = prompt("Ingrese un producto (barbijo/jabon/alcohol)")
		while ( isNaN(productoIngresado) == false || productoIngresado != "barbijo" && productoIngresado != "jabon" && productoIngresado != "alcohol")
		{

			productoIngresado = prompt ("Error, ingrese un producto válido:");

		}

		precioIngresado = prompt("Ingrese el precio (100/300)");
		precioIngresado = parseInt(precioIngresado);
		while (isNaN(precioIngresado) == true || precioIngresado < 100 || precioIngresado > 300)
		{

			precioIngresado = prompt ("Error, ingrese un precio válido (100/300):");
			precioIngresado = parseInt(precioIngresado);

		}

		cantidadIngresada = prompt("Ingrese la cantidad (menor a 1000)");
		cantidadIngresada = parseInt(cantidadIngresada);
		while (isNaN(cantidadIngresada) == true || cantidadIngresada <= 0 || cantidadIngresada > 1000)
		{

			cantidadIngresada = prompt("Ingrese una cantidad valida (menor a 1000)");
			cantidadIngresada = parseInt(cantidadIngresada);

		}

		marcaIngresada = prompt ("Ingrese una marca:");
		while (isNaN(marcaIngresada) == false)
		{

			marcaIngresada = prompt("Ingrese una marca válida");

		}

		fabricanteIngresado = prompt ("Ingrese un fabricante:");
		while (isNaN(fabricanteIngresado) == false)
		{

			fabricanteIngresado = prompt("Ingrese un fabricante válido");

		}

		//a)
		if (productoIngresado == "jabon" && primerJabon == true || precioIngresado > jabonCaro)
		{

			unidadesJabonCaro = cantidadIngresada;
			fabricanteJabonCaro = fabricanteIngresado;
			jabonCaro = precioIngresado;
			primerJabon = false;

		}	

		//b)
		switch (productoIngresado)
		{

			case "barbijo":
				acumuladorBarbijo += cantidadIngresada;
				contadorBarbijo++;
			break;

			case "jabon":
				acumuladorJabon += cantidadIngresada;
				contadorJabon++;
			break;

			case "alcohol":
				acumuladorAlcohol += cantidadIngresada;
				contadorAlcohol;
			break;

		}

		vuelta++;

	} //FIN WHILE

	if (acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon)
	{

		promedioB = (acumuladorBarbijo / contadorBarbijo);

	}	else	{

		if (acumuladorJabon > acumuladorAlcohol)
		{

			promedioB = (acumuladorJabon / contadorJabon);

		}	else	{

			promedioB = (acumuladorAlcohol / contadorAlcohol);

		}

	}

	alert("a) Del jabon mas caro, el fabricante es: " + fabricanteJabonCaro + " y las unidades son: " + unidadesJabonCaro +
	"\nb) El promedio del producto con mas unidades es: " + promedioB +
	"\nc) Hay en total: " + acumuladorBarbijo + " barbijos");
}
