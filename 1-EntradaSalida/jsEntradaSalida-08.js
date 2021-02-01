/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo = parseInt(txtIdNumeroDividendo.value);
	let divisor = parseInt(txtIdNumeroDivisor.value);
	let resto = (dividendo % divisor); //el % devuelve el resto de una division

	alert("El resto es: " + resto);
}
