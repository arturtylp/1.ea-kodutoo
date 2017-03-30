var getCurrentTime = function(){
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var timeString = addZeroBefore(hours)+ ':' +addZeroBefore(minutes)+ ':' +addZeroBefore(seconds);

    return timeString;
};