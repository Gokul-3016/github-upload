
var d = new Date();
var todayDate = d.getDate();
var day;
switch (d.getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Unknown";
}
var time = d.getTime();
//  The getTime() method returns the number of milliseconds between midnight of January 1, 1970 and the specified date.
var year = d.getFullYear();
//  The getFullYear() method returns the year (four digits for dates between year 1000 and 9999) of the specified date.
var month;
//  The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time January is 0, February is 1, and so on.
switch (d.getMonth()) {
    case 0:
        month = "january";
        break;
    case 1:
        month = "february";
        break;
    case 2:
        month = "march";
        break;
    case 3:
        month = "april";
        break;
    case 4:
        month = "may";
        break;
    case 5:
        month = "june";
        break;
    case 6:
        month = "july";
        break;
    default:
        month = "Unknown";
}


console.log("today is", day, typeof day);
//console.log(typeof );
console.log("today date is", todayDate, typeof todayDate);
console.log("time is ", time, typeof time);
console.log("month  is ", month,typeof month);
console.log("year is ", year,typeof year);
console.log("date and time is ", d,typeof d);
var ww = day.concat("  ",month);
console.log(ww);