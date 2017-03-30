window.onload = function(){

    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);

    var dateContainer = document.getElementById('date');
    console.log(dateContainer);

    clockContainer.innerHTML = getCurrentTime();
    dateContainer.innerHTML = getCurrentDate();

    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentTime();
    }, 333);

    window.setInterval(function(){
        dateContainer.innerHTML = getCurrentDate();
    }, 10000);
};	