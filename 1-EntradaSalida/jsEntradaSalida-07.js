/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()
{
	let numero1;
	let numero2;
	let resultado;

	numero1 = parseInt(txtIdNumeroUno.value);
	numero2 = parseInt(txtIdNumeroDos.value);
	resultado = numero1 + numero2;
	alert("La suma es: " + resultado);
}

function restar()
{

	numero1 = parseInt(txtIdNumeroUno.value);
	numero2 = parseInt(txtIdNumeroDos.value);
	resultado = numero1 - numero2;
	alert("La resta es: " + resultado);
}

function multiplicar()
{

	numero1 = parseInt(txtIdNumeroUno.value);
	numero2 = parseInt(txtIdNumeroDos.value);
	resultado = numero1 * numero2;
	alert("El producto es: " + resultado);
}

function dividir()
{

	numero1 = parseInt(txtIdNumeroUno.value);
	numero2 = parseInt(txtIdNumeroDos.value);
	resultado = numero1 / numero2;
	alert("La division es: " + resultado);
}
