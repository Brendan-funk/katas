const talkingCalendar = function(date) {

  //declaring variables
  let year,month,day,ending,string;

  //getting the year from the first 4 characters of the string
  year = date.substring(0,4);

  //checking what the month is and giving the corresponding word
  switch (date.substring(5,7)) {
  case "01":
    month = "January";
    break;
  case "02":
    month = "February";
    break;
  case "03":
    month = "March";
    break;
  case "04":
    month = "April";
    break;
  case "05":
    month = "May";
    break;
  case "06":
    month = "June";
    break;
  case "07":
    month = "July";
    break;
  case "08":
    month = "August";
    break;
  case "09":
    month = "September";
    break;
  case "10":
    month = "October";
    break;
  case "11":
    month = "November";
    break;
  case "12":
    month = "December";
    break;
  }

  //getting the day from the last two charaters
  day = date.substring(8,10);

  //if the day is less than 10
  if (day < 10) {

    //remove the extra 0
    day = date.substring(9,10);
  }

  //find what word follows the day
  switch (day) {
  case "1":
    ending = "st";
    break;
  case "2":
    ending = "nd";
    break;
  case "3" :
    ending = "rd";
    break;
  default:
    ending = "th";
  }

  //put it all together and return it
  string = month + " " + day + ending + ", " + year;
  return string;
};

//test cases
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
