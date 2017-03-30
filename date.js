var getCurrentDate = function(){
    var currentDate = new Date();
	
	var date = currentDate.getDate();
	var month = currentDate.getMonth();
	var year = currentDate.getFullYear();
	var day = currentDate.getDay()

	var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var dateString = days[day]+ '<br>' +months[month]+ ' ' +date+ ', ' +year;

    return dateString;
}