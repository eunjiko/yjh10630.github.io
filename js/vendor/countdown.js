/*
 * Basic Count Down to Date and Time
 * Author: @guwii / guwii.com
 */
(function (e) {
  e.fn.countdown = function (t, n) {
    function i() {
      eventDate = Date.parse(r.date) / 1e3;
      currentDate = Math.floor(e.now() / 1e3);
      if (eventDate <= currentDate) {
        n.call(this);
        clearInterval(interval)
      }
      seconds = eventDate - currentDate;
      days = Math.floor(seconds / 86400);
      seconds -= days * 60 * 60 * 24;
      hours = Math.floor(seconds / 3600);
      seconds -= hours * 60 * 60;
      minutes = Math.floor(seconds / 60);
      seconds -= minutes * 60;
      days == 1 ? thisEl.find(".timeRefDays").text("day") : thisEl.find(".timeRefDays").text("days");
      hours == 1 ? thisEl.find(".timeRefHours").text("hour") : thisEl.find(".timeRefHours").text("hours");
      minutes == 1 ? thisEl.find(".timeRefMinutes").text("minute") : thisEl.find(".timeRefMinutes").text("minutes");
      seconds == 1 ? thisEl.find(".timeRefSeconds").text("second") : thisEl.find(".timeRefSeconds").text("seconds");
      if (r["format"] == "on") {
        days = String(days).length >= 2 ? days : "0" + days;
        hours = String(hours).length >= 2 ? hours : "0" + hours;
        minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
        seconds = String(seconds).length >= 2 ? seconds : "0" + seconds
      }
      if (!isNaN(eventDate)) {
        thisEl.find(".days").text(days);
        thisEl.find(".hours").text(hours);
        thisEl.find(".minutes").text(minutes);
        thisEl.find(".seconds").text(seconds)
      } else {
        alert("Invalid date. Example: 30 Tuesday 2013 15:50:00");
        clearInterval(interval)
      }
    }
    var thisEl = e(this);
    var r = {
      date: null,
      format: null
    };
    t && e.extend(r, t);
    i();
    interval = setInterval(i, 1e3)
  }
})(jQuery);
$(document).ready(function () {
  function e() {
    var e = new Date;
    e.setDate(e.getDate() + 60);
    dd = e.getDate();
    mm = e.getMonth() + 1;
    y = e.getFullYear();
    futureFormattedDate = mm + "/" + dd + "/" + y;
    return futureFormattedDate
  }
  $("#countdown").countdown({
    date: "1 January 2020 00:00:00", // Change this to your desired date to countdown to
    format: "on"
  });
});



/*
CountDownTimer('13/10/2018', 'countdown'); // 2017년 1월 1일까지
CountDownTimer('13/10/2018 11:00 AM', 'newcountdown'); // 2018년 1월 1일까지, 시간을 표시하려면 01:00 AM과 같은 형식을 사용합니다.
function CountDownTimer(dt, id)
{
var end = new Date(dt);

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
var now = new Date();
var distance = end - now;
if (distance < 0) {

clearInterval(timer);
document.getElementById(id).innerHTML = 'EXPIRED!';

return;
}
var days = Math.floor(distance / _day);
var hours = Math.floor((distance % _day) / _hour);
var minutes = Math.floor((distance % _hour) / _minute);
var seconds = Math.floor((distance % _minute) / _second);

document.getElementById(id).innerHTML = days + '일 ';
document.getElementById(id).innerHTML += hours + '시간 ';
document.getElementById(id).innerHTML += minutes + '분 ';
document.getElementById(id).innerHTML += seconds + '초';
}

timer = setInterval(showRemaining, 1000);
}
*/