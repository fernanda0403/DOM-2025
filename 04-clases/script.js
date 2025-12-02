/* 

acceder al primer elemento de la lista

*/

const ingredientes = document.getElementsByTagName("li");

console.log(ingredientes[0]);

/* 

Propiedad classList:

Devuelve un DOM Token list o listado de clases en el DOM. La lista de clases de un elemento en HTML.
*/

console.log(ingredientes[0].classList); //DOM Token list
console.log(ingredientes[0].classList[0]); //botana

/* 

Podemos acceder a clases usando el metodo add

  Sintasis: 
    elemento.classList.add("nombre-clase");
*/

ingredientes[2].classList.add("picante");
console.log(ingredientes[2].classList);

/* 

Podemos verificar si existe una clase en un elemento con el metodo contains()

Sintaxis:

  elemento.classList.contains ("nombre-clase");
  -Devuelve true si existe la clase
  -Devuelve false si no existe la clase
*/

console.log(ingredientes[1].classList.contains("botana")); //true
console.log(ingredientes[1].classList.contains("picante")); //false

/* 

Podemos eliminar una clase usando el método remove()
  sintaxis:
  elemento.classList.remove("nombre-clase")

*/

ingredientes[3].classList.remove("botana");
console.log(ingredientes[3].classList)