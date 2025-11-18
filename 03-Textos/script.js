

/* Seleccionar al elemento seccion por su id */
const pokemones = document.getElementById("pokemones");
/* mostranos por consola */

console.log(pokemones);

/* 

inner text

devuelve un "string" del contenido visible dentro de un elemento 

elemento.innertext

  - Excluye los elementos ocltos
  - Excluye los espacios en el documento
  - Excluye las etiquetas de HTML


*/

console.log(pokemones.innerText);

/* 

textContent

Devuelve un strings del contenido visible dentro de un elemento

sintaxis:

elemeto.textContent

  -incluye los espacios
  -incluye eleetos ocultos
  -Excluye las etiquetas HTML

*/

console.log(pokemones.textContent);

/* 
innerHTML

devuekve un string con la estructura interna del elemento seleccionado

sintaxis elemento.innerHTML

  - incluye los espacios
  - incluye elementos ocultos
  - incluye elementos HTML
*/


console.log(pokemones.innerHTML)

/* 

Modificar el contenido con innertext = "snorlac o te elijo"

*/

/* pokemones.innerText = "pelis favoritas" */     //se sobre escribe todo el contenido

const subtitulo = document.querySelector("h2")

const enlace = document.querySelector("a");

subtitulo.innerText = "pelis favoritas";
enlace.innerText = "saber más";

/* 

modificar el contenido con textContent

asignamos un valor al slemento seleccionado
elemento.tectConten = strings

*/


subtitulo.textContent = "mis cuates";
enlace.textContent = "nose que poner"

/* 

Modificar el contenido con innerHTML

Asignamos el valor al elemento seleccionado incluyendo etiquetas html

elemento.innerHTML = "<etiqueta>...</etiqueta>";

*/

subtitulo.innerHTML = "Mis <span class='resalte'>cuates</span>";

enlace.innerHTML = "nose que <span class='resalte'>poner</span>";

/* 

getAttibute()

Devuelve el valor del atributo del elemento.

elemento.getAttribute(atributo);

*/

console.log(enlace.getAttribute("href"));


/* 

removeAttribute

eliminar el valor del atributo de un elemento

elemento.removeAttribute(atributo);

  - El atributo pasa como string

*/

enlace.removeAttribute("href");

console.log(enlace.getAttribute("href")) // null

/* 

setAtribute()

Asigna un atributo y un valor a un elemento.

elemento.setAttribute(atributo,valor);

  - El atributo pasa como string
  - sobreescribir un atributo ya declarado
  - crear un nuevo atributo y su valor

*/

enlace.setAttribute("href", "https://www.instagram.com");
enlace.setAttribute("target", "_black")
console.log(enlace.getAttribute("href")); //pgin de instagram