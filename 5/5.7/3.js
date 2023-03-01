/*Перебираемые ключи

Мы хотели бы получить массив ключей map.keys() в переменную и далее работать 
с ними, например, применить метод .push. Но это не выходит.
Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал? */

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys);