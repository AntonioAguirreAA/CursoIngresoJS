/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
	let nombre;
	let edad;
	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;

/*
bis :
se debe optener de alguna manera el apellido y mostrar asi:
"Perez, Usted se llama José y tiene 66 años"

*/

let apellido = prompt("Ingrese su apellido:");

alert(apellido + " ,Usted se llama " + nombre + " y tiene " + edad + " años.");
}
