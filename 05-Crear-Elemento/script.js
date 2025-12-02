/* 

Obtener un elemento de referencia. Este sera el nodo de HTML donde vamos a crear el nuevo elemento.

*/

const peliculas = document.getElementById("peliculas");

/* 

para crear un nuevo elemento usamos createElement

sintaxis

document.createElement("tipoElemento");

*/

const nuevaPeli = document.createElement("li");

/* 

Para agregar el elemento al DOM, tomamos el elemento de referencia y utilisamos el metodo append()

Sintaxis:
  elementoReferencia.append(nuevoElemento)
*/

peliculas.append(nuevaPeli);
console.log(peliculas)

/* 

Para agregarle contenido al nuevo elemento podemos usar innerText

*/

nuevaPeli.innerText = "Encanto"

console.log(peliculas)

/* poner yo la clase */

nuevaPeli.classList.add("pelicula" , "fondo-dos");
console.log(peliculas);