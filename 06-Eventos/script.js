/* 

Eventos

Un evento es una ccion o siceso que ocurre en el navegador o en un elemento DOM. Puede ser inicido por el usuario o por el sistema. Los eventos pueden ser manejados mediante JS. 

+ Manejar Eventos con JS

1. Target (objetivo o Blanco)
   Es el elemento del DOM en el que ha ocurrido el evento. Este se encuntra dentro del objeto evento (event) y se accede mediante la propiedad event.target

2. Event Listener (Escuchador del evento)
   Es el oido que esta atento a que ocurra un evento en un elemento (target) en especifico. Usamos el método addEventListener para escuchar el evento.

3. Trigger (Disprador o desencadenante)
   Es el desencadenante que provoca que un evento ocurra. Es la accion que realiza el usuario o el sistema par activar el evento.
    + Hacer click
    + Mover ratón
    + Tipear teclas

4. Event Handler (Manejador de Eventos)
   Es una funcion que se va a ejecutar cada vez que ocurre el evento.Con JS le decimos que va  ejecutar el manejador.

   + Mostrar un mensaje
   + Cambiar un color
   + Agregar un elemento
   + Lanzar una alerta

Sintaxis:
  Target.eventListener(trigger, eventHandler);
target   👉 elemento donde ocurre el evento
listener 👉 escucha y detecta el evento
trigger  👉 accion que ocurre en el evento
handler  👉 la funcion que se ejecuta al ocurrir el evento

   */

// seleccionamos un elemento

const button = document.getElementById("button");

// Manjar el evento

button.addEventListener("click", mostrarMensaje)

// Definir funcion

function mostrarMensaje() {
  alert("ya amonos")
}