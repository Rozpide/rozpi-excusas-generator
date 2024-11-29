/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = ["The dog", "My Grandma", "The mailman", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "my phone", "the car"];
const when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
//crear una funcion que sea generica para hacer random y obtenga un elemento de un array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//funcion para generar una excusa  llamando a la anterior getRandomElement
function generateExcuseElement() {
  let whoRandomItem = getRandomElement(who);
  let actionRandomItem = getRandomElement(action);
  let whatRandomItem = getRandomElement(what);
  let whenRandomItem = getRandomElement(when);
  // aqui utilizo una manera diferente de concatenar
  return (
    whoRandomItem +
    "" +
    actionRandomItem +
    "" +
    whatRandomItem +
    "" +
    whenRandomItem
  );
}
//funcion para actualizar la excusa en la pagina
function updateExcuse() {
  document.getElementById("excuse").innerHTML = generateExcuseElement();
}

//inicializar la pagina al cargar
window.onload = function() {
  updateExcuse();
  console.log("Hello Rigo from the console!!");
  // añadiendo evento de click al boton para generar excusa
  document.getElementById("generate-excuse-button").onclick = updateExcuse;
};
