/*Последнее число месяца?

Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число 
месяца. Иногда это 30, 31 или даже февральские 28/29. */

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
  alert( getLastDayOfMonth(2012, 0) ); 
  alert( getLastDayOfMonth(2012, 1) ); 
  alert( getLastDayOfMonth(2013, 1) ); 