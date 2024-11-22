/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
function generateExcuse() {
  let whoRandom = who[Math.floor(Math.random() * who.length)];
  let actionRandom = action[Math.floor(Math.random()) * action.length];
  let whatRandom = what[Math.floor(Math.random() * what.length)];
  let whenRandom = when[Math.floor(Math.random() * when.length)];

  return `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`;
}
window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");

  document.getElementById("generate-excuse-button").onclick = function() {
    document.getElementById("excuse").innerHTML = generateExcuse();
  };
};
