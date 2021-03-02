/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio, 
de cada una debo obtener los siguientes datos: 
el tipo (validar "barbijo" , "jabón" o "alcohol") , 
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante. 
Se debe Informar al usuario lo siguiente:

a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra 
c) Cuántas unidades de jabones hay en total

ANTONIO AGUIRRE
1° Div "A"

*/
function mostrar()
{
	// VARIABLES
	let contadorVuelta;
	let tipoIngresado;
	let precioIngresado;
	let cantidadIngresada;
	let marcaIngresada;
	let fabricanteIngresado;
	let primerAlcohol;
	// VARIABLES A)
	let alcoholMinimo;
	let alcoholMinimoCantidad;
	let alcoholMinimoFabricante;
	// VARIABLES B)
	let contadorBarbijo;
	let contadorJabon;
	let contadorAlcohol;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let acumuladorAlcohol;
	let cantidadMaxima;
	let divisorPromedio;

	acumuladorBarbijo = 0;
	acumuladorJabon = 0;
	acumuladorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	contadorAlcohol = 0;

	// ASIGNAR VALORES
	contadorVuelta = 0;
	primerAlcohol = true;
	primerMayorUnidad = true;

	while (contadorVuelta < 5)	{

		tipoIngresado = prompt("Ingrese el tipo de producto (barbijo/jabón/alcohol)");

		while (isNaN(tipoIngresado) == false ||tipoIngresado != "barbijo" && tipoIngresado != "jabón" && tipoIngresado != "alcohol")
		{

			tipoIngresado = prompt("Error, ingrese un tipo válido (barbijo/jabón/alcohol)");
			console.log (tipoIngresado);
		}

		precioIngresado = prompt ("Ingrese el precio del producto (entre 100 y 300)");
		precioIngresado = parseInt(precioIngresado);

		while (isNaN(precioIngresado) == true || precioIngresado > 300 || precioIngresado < 100)
		{

			precioIngresado = prompt ("Error, ingrese un precio entre 100 y 300:");
			precioIngresado = parseInt(precioIngresado);

		}

		cantidadIngresada = prompt ("Ingrese la cantidad de unidades (hasta 1000)");
		cantidadIngresada = parseInt(cantidadIngresada);

		while (isNaN(cantidadIngresada) == true || cantidadIngresada < 1 || cantidadIngresada > 1000)
		{

			cantidadIngresada = prompt ("Ingrese una cantidad valida (hasta 1000)");
			cantidadIngresada = parseInt(cantidadIngresada);

		}

		marcaIngresada = prompt("Ingrese la marca");

		while (isNaN(marcaIngresada) == false)
		{

			marcaIngresada = prompt("Ingrese una marca válida");

		}

		fabricanteIngresado = prompt("Ingrese el fabricante:");

		while (isNaN(fabricanteIngresado) == false)
		{

			fabricanteIngresado = prompt("Ingrese un fabricante válido:");

		}

		//	A)
		/*if (tipoIngresado == "alcohol" && primerAlcohol == true || cantidadIngresada < alcoholMinimo)
		{

			alcoholMinimo = precioIngresado;
			alcoholMinimoCantidad = cantidadIngresada;
			alcoholMinimoFabricante = fabricanteIngresado;
			primerAlcohol = false;

		}*/

		//	B)
		
		switch (tipoIngresado)	{

			case "alcohol":
				contadorAlcohol ++;
				acumuladorAlcohol += cantidadIngresada;
				if (contadorAlcohol == 1 || cantidadIngresada < alcoholMinimo) //EL IF USADO EN EL PUNTO A) SE PUEDE MEJORAR INSERTANDO EL IF DE ESTA FORMA
				{

					alcoholMinimo = precioIngresado;
					alcoholMinimoCantidad = cantidadIngresada;
					alcoholMinimoFabricante = fabricanteIngresado;
					primerAlcohol = false;

				}
			break;

			case "barbijo":
				contadorBarbijo ++;
				acumuladorBarbijo += cantidadIngresada;
			break;

			case "jabón":
				contadorJabon ++;
				acumuladorJabon += cantidadIngresada;
			break;

		}

		contadorVuelta++;
		
	}// fin de while
	
	if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
	{

		cantidadMaxima = acumuladorAlcohol;
		divisorPromedio = contadorAlcohol;

	}	else	{

		if (acumuladorBarbijo > acumuladorJabon)
		{

			cantidadMaxima = acumuladorBarbijo;
			divisorPromedio = contadorBarbijo;

		}	else	{

			cantidadMaxima = acumuladorJabon;
			divisorPromedio = contadorJabon;

		}

	}

	alert("Del alcohol mas barato, la cantidad es: " + alcoholMinimoCantidad + ", y su fabricante es: " + alcoholMinimoFabricante +
	"\nEl promedio de compras para el producto con mas unidades es: " + (cantidadMaxima / divisorPromedio) + 
	"\nLa cantidad de jabones en total es: " + acumuladorJabon);

}
