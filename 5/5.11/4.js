/*Какой день месяца был много дней назад?

Создайте функцию getDateAgo(date, days), возвращающую число, которое было 
days дней назад от даты date. */

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }
  
  let date = new Date(2015, 0, 2);
  
  alert( getDateAgo(date, 1) ); 
  alert( getDateAgo(date, 2) ); 
  alert( getDateAgo(date, 365) ); 