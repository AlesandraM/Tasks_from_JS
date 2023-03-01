/*Цепь вызовов

У нас есть объект ladder (лестница), который позволяет 
подниматься и спускаться: */

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() { 
      alert( this.step );
      return this;
    }
  };