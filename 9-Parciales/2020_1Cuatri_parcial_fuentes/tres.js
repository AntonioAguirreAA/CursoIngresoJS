/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.

ANTONIO AGUIRRE 1° A*/ 

function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let continuar;
	//a)
	let primeraTmeperatura;
	let temperaturaMaxima;
	let nombreTMaxima;
	//b)
	let mayoresViudos;
	//c)
	let hombresSolterosViudos
	//d)
	let mayoresEnfermos;
	//e)
	let HombresSolteros;
	let contHombresSolteros;

	HombresSolteros = 0;
	contHombresSolteros = 0;
	mayoresEnfermos = 0;
	hombresSolterosViudos = 0;
	mayoresViudos = 0;
	continuar = "s";
	primeraTmeperatura = true;

	while (continuar == "s")
	{

		nombre = prompt ("Ingrese un nombre:");
		while (isNaN(nombre) == false)
		{

			nombre = prompt("Error, ingrese un nombre válido");
			
		}

		edad = prompt ("Ingrese una edad:");
		edad = parseInt(edad);
		while (isNaN(edad) == true || edad < 1)
		{

			edad = prompt ("Ingrese una edad valida");
			edad = parseInt(edad);

		}

		sexo = prompt("Ingrese el sexo (m/f)");
		while (isNaN(sexo) == false ||sexo != "m" && sexo != "f")
		{

			sexo = prompt("Error, ingrese un sexo válido (m/f)");
			
		}

		estadoCivil = prompt("Estado civil (soltero/casado/viudo):");
		while (isNaN(estadoCivil) == false ||estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{

			estadoCivil = prompt("Error, ingrese un tipo válido (soltero/casado/viudo)");

		}

		temperatura = prompt("Ingrese la temperatura corporal:");
		temperatura = parseInt(temperatura);
		while (isNaN(temperatura) == true )
		{

			temperatura = prompt ("Ingrese una temperatura valida");
			temperatura = parseInt(temperatura);

		}
		//a)
		if (primeraTmeperatura == true)
		{
			temperaturaMaxima = temperatura;
			primeraTmeperatura = false;
			nombreTMaxima = nombre;

		}	else	{

			if (temperatura > temperaturaMaxima)
			{

				nombreTMaxima = nombre;

			}

		}
		//b)
		if (edad >= 18 && estadoCivil == "viudo")
		{

			mayoresViudos++;

		}
		//c)
		if (sexo == "m" && estadoCivil == "soltero" || estadoCivil == "viudo")
		{

			hombresSolterosViudos++;

		}
		//d)
		if (edad >= 60 && temperatura >= 38)
		{

			mayoresEnfermos++;

		}
		//e)
		if (sexo == "m" && estadoCivil == "soltero")
		{

			contHombresSolteros++;
			HombresSolteros += edad;

		}


		continuar = prompt ("Desea agregar otro pasajero? (s/n)")

	} //FIN DEL WHILE

	alert ("a) La temperatura maxima es de: " + nombreTMaxima +
	"\nb) Cantidad de mayores de edad viudos: " + mayoresViudos +
	"\nc) Cantidad de hombres solteros y viudos: " + hombresSolterosViudos +
	"\nd) Cantidad de adultos mayores con mas de 38° de temperatura: " + mayoresEnfermos +
	"\ne) Promedio de edad de hombres solteros: " + (HombresSolteros / contHombresSolteros));

}
