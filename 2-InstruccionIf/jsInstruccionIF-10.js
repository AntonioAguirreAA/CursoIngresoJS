function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	let nota;

	nota = Math.floor(Math.random() * 10) + 1;

	alert(nota)

	if (nota >= 9)
	{

		alert("EXELENTE");

	}	else {

		if (nota > 4)
		{

			alert("APROBÓ");

		}	else {

			alert("Vamos, la proxima se puede");

		}

	}


}//FIN DE LA FUNCIÓN
