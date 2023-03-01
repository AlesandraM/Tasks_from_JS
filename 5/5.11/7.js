/*Сколько секунд осталось до завтра?

Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты. */

function getSecondsToTomorrow() {
    let now = new Date();
  
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now; 
    return Math.round(diff / 1000); 
  }