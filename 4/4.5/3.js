/*Создайте new Accumulator

Создайте функцию-конструктор Accumulator(startingValue).
Объект, который она создаёт, должен уметь следующее:
1.Хранить «текущее значение» в свойстве value. Начальное значение 
устанавливается в аргументе конструктора startingValue.
2.Метод read() должен использовать prompt для считывания нового числа 
и прибавления его к value. */

function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('Сколько нужно прибавить?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);