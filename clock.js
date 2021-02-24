/* Digital Clock App
2021-02-23; incorporates code review changes
*/
function getDate() {
  const monthsOfYr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const daysOfWk = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

 var today = new Date();
 var dd = today.getDate();
 var day = today.getDay();
 var mm = today.getMonth();
 var yyyy = today.getFullYear();
 var ddSuffix;
  
//Add suffix to day of month (dd)
//indep fcns pref?
 
  if (dd % 10 == 1 && dd != 11) {
    ddSuffix = "st";
  } else if (dd % 10 == 2 && dd != 12) {
    ddSuffix = "nd";
  } else if (dd % 10 == 3 && dd != 13) {
    ddSuffix = "rd";
  } else ddSuffix = "th";

  var date = daysOfWk[day] + ", " + monthsOfYr[mm] + " " + dd + ddSuffix + " " + yyyy;
  
  document.getElementById("date").innerHTML = date;
  
} //End getDate()

function getTime() {
  var today = new Date();
  var seconds = today.getSeconds();
  var minutes = today.getMinutes();
  var hours = today.getHours();

  //Format seconds, minutes to double dig leading zero
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  //AM or PM

  if (hours == 12) {
    time = hours + ":" + minutes + ":" + seconds + " PM";
  } else if ((12 < hours) && (hours < 24)) {
    time = (hours % 12) + ":" + minutes + ":" + seconds + " PM";
  } else if (hours < 12) {
    time = (hours) + ":" + minutes + ":" + seconds + " AM";
  }; // End getTime()

  document.getElementById("time").innerHTML = time;
}
setInterval(getTime, 1000);
setInterval(getDate, 1000);