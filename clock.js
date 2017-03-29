window.onload = function(){

    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);

    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentDateTime();
    }, 1000);

var getCurrentDateTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
	var date = currentDate.getDate();
	var month = currentDate.getMonth();
	var year = currentDate.getFullYear();
	var day = currentDate.getDay()

	var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var dateString = addZeroBefore(hours)+ ':' +addZeroBefore(minutes)+ ':' +addZeroBefore(seconds)+ '<br>' +date+'. '+months[month]+'  '+year+ ' ' +days[day] ;

    return dateString;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }
	
var getCurrentDateTime

    return dateNumber;
}
}