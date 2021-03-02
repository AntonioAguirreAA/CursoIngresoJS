/*Para una institución educativa se necesitan registrar los datos de 15 alumnos. 
Nos solicitan nombre, carrera , edad, sexo("f" o "m") y modalidad("presencial", "a distancia" o "semi-presencial")
y promedio general. Luego nos solicitan los siguientes informes: 
a) La Carrera de la persona con mas promedio general. 
b) Cuantos mayores de edad(más de 17) cursan presencial. 
c) La cantidad de Mujeres que cursan a distancia o semi-presencial. 
d) Cuantas personas adultas(mas de 40 años), tienen mas de 7 de promedio general. 
e) El promedio de edad entre las mujeres que cursan a distancia.*/

function mostrar()
{

	let nombreIngresado;
	let carreraIngresado;
	let edadIngresado;
	let sexoIngresado;
	let modalidadIngresado;
	let promedioGeneralIngresado;
	let ingreso;
	//a
	let mayorPromedio
	let primerPromedio
	let nombreA;
	//b
	let contB;
	//c
	let contC;
	//d
	let contD;
	//e
	let acumuladorE;
	let contadorE;

	acumuladorE = 0;
	contadorE = 0;
	contC = 0;
	contD = 0;
	primerPromedio = true;
	contB = 0;
	ingreso = 0;

	while (ingreso < 5)
	{
		//INGRESO DE DATOS

		nombreIngresado = prompt("Ingrese el nombre.");
		while (isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Ingrese un nombre válido:");
		}

		carreraIngresado = prompt ("Ingrese su carrera");
		while (isNaN(carreraIngresado) == false)
		{
			carreraIngresado = prompt("Ingrese una carrera válida:");
		}

		edadIngresado = prompt("ingrese la edad:");
		edadIngresado = parseInt(edadIngresado);
		while (isNaN(edadIngresado) == true || edadIngresado < 1)
		{
			edadIngresado = prompt("Ingrese una edad válida:");
			edadIngresado = parseInt(edadIngresado);
		}

		sexoIngresado = prompt("Ingrese el sexo (m/f):");
		while (isNaN(sexoIngresado) == false || sexoIngresado != "m" && sexoIngresado != "f")
		{
			sexoIngresado = prompt("Ingrese un sexo válido (m/f):");
		}

		modalidadIngresado = prompt("Ingrese la modalidad (presencial/a distancia/semipresencial):");
		while (isNaN(modalidadIngresado) == false || modalidadIngresado != "presencial" && modalidadIngresado != "a distancia" && modalidadIngresado != "semipresencial")
		{
			modalidadIngresado = prompt("Ingrese una modalidad válida (presencial/a distancia/semipresencial):");
		}

		promedioGeneralIngresado = prompt("ingrese el promedio general:");
		promedioGeneralIngresado = parseInt(promedioGeneralIngresado);
		while (isNaN(promedioGeneralIngresado) == true || promedioGeneralIngresado < 1)
		{
			promedioGeneralIngresado = prompt("Ingrese un promedio general válido:");
			promedioGeneralIngresado = parseInt(promedioGeneralIngresado);
		}

		//A)
		if (primerPromedio == true || promedioGeneralIngresado > mayorPromedio)
		{
			primerPromedio = false;
			mayorPromedio = promedioGeneralIngresado;
			nombreA = carreraIngresado;
		}

		//B)
		if (edadIngresado >= 17 && modalidadIngresado == "presencial")
		{
			contB++;
		}

		//C)
		if (sexoIngresado == "f" && modalidadIngresado == "a distancia" || modalidadIngresado == "semipresencial")
		{
			contC++;
		}

		//D)
		if (edadIngresado >= 40 && promedioGeneralIngresado >= 7)
		{
			contD;
		}

		//E)
		if (sexoIngresado == "m" && modalidadIngresado == "a distancia")
		{
			acumuladorE += edadIngresado;
			contadorE++;
		}

		ingreso++;

	} //FIN DEL WHILE

	alert ("a) La Carrera de la persona con mas promedio general:" + nombreA +
	"\nb) Cuantos mayores de edad(más de 17) cursan presencial: " + contB +
	"\nc) La cantidad de Mujeres que cursan a distancia o semi-presencial:" + contC +
	"\nd) Cuantas personas adultas(mas de 40 años), tienen mas de 7 de promedio general:" + contD +
	"\ne) El promedio de edad entre las mujeres que cursan a distancia:" + (acumuladorE/contadorE));

}