/*Две функции - один объект

Возможно ли создать функции A и B, чтобы new A() == new B()? */

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); 