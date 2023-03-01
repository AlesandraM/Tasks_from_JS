/*Сумма свойств объекта

Напишите код для суммирования всех зарплат и сохраните результат 
в переменной sum.
Если объект salaries пуст, то результат должен быть 0.*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

  let sum = 0;
  for(let key in salaries) {
    sum += salaries[key];
  }

  alert(sum);