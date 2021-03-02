function mostrar()
{

	let numeroIngresado;
	let divisores;
	let i;

	i = 0;
	divisores = 0;

	numeroIngresado = prompt("Ingrese un número");
	numeroIngresado = parseInt (numeroIngresado);

	for (i = 0 ; i <= numeroIngresado ; i++)
	{

		if (numeroIngresado % i == 0)
		{

			divisores ++;

		}

	}
	
	
	alert(divisores);


}//FIN DE LA FUNCIÓN