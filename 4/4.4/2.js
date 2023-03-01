/*Создайте калькулятор

Создайте объект calculator (калькулятор) с тремя методами:
read() (читать) запрашивает два значения и сохраняет их как 
свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат. */

let calculator = {

    read(){
        this.x = +prompt("Введите значение x.", 0);
        this.y = +prompt("Введите значение y.", 0);
    },

    sum(){
        return this.x + this.y;
    },

    mul(){
        return this.x * this.y;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );