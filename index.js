$(document).ready(function(){
    function showTime(){
        var fate = new Date();
        var hours = fate.getHours();
        var min = fate.getMinutes();
        var sec = fate.getSeconds();
        var session = "AM";
        if(hours == 0){
            hours = 12;
        }
        if(hours>=12){
            session="PM";
        }
        if(hours>12){
            hours=hours-12;
        }
        hours = hours < 10 ? "0" + hours : hours;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        $("#hours").text(hours);
        $("#min").text(min);
        $("#sec").text(sec);
        $("#period").text(session);

        setTimeout(showTime, 1000);
    }
    showTime();
});
