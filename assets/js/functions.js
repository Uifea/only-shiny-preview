let intervalVariable = undefined;  
let timeleft = 0;  
let totaltime = 0;  

function startTimer(){
    intervalVariable = setInterval(updateTime, 10); 
}
function resetTimer() {  
    // Останавливаем таймер
    stopTimer();
    timeleft = -10;

    // Обновляем значение в ui
    updateTime();  
}  
function stopTimer(){
    // Производим очистку интервала
    clearInterval(intervalVariable);  
} 
function updateTime(){
    timeleft = timeleft + 10;  

    // Получаем нужные нам элементы
    const timerH = document.querySelector(".counter__time-hour");
    const timerM = document.querySelector(".counter__time-minute");  
    const timerS = document.querySelector(".counter__time-sec"); 

    // Устанавливаем значения
    // Секунды
    let seconds = Math.floor(timeleft / 1000) % 60;
    // Минуты
    let minutes = Math.floor(timeleft / 60000) % 60;
    // Часы
    let hours = Math.floor(timeleft / 3600000);
    timerS.innerHTML = seconds.toString().padStart(2, '0');  
    timerM.innerHTML = minutes.toString().padStart(2, '0');
    timerH.innerHTML = hours.toString().padStart(2, '0'); 
} 