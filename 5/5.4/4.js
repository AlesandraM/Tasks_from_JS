/*Сумма введённых чисел

Напишите функцию sumInput(), которая:
1.Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
2.Заканчивает запрашивать значения, когда пользователь 
введёт не числовое значение, пустую строку или нажмёт «Отмена».
3.Подсчитывает и возвращает сумму элементов массива. */

function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("Введите число", 0);
  
      // Прекращаем ввод?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );