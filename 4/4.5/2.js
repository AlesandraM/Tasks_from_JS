/*Создайте калькулятор при помощи конструктора, new Calculator

Создайте функцию-конструктор Calculator, которая создаёт объекты с 
тремя методами:
read() запрашивает два значения при помощи prompt и 
сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств. */

function Calculator() {

    this.read = function() {
      this.a = +prompt('Введите значение - a', 0);
      this.b = +prompt('Введите значение - b', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.multi = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert( "Sum=" + calculator.sum() );
  alert( "Multi=" + calculator.multi() );