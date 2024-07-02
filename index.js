$(document).ready(function() {
    function addHoverEffects() {
        $(".img1").mouseenter(showbtn1).mouseleave(hidebtn1);
        $(".img2").mouseenter(showbtn2).mouseleave(hidebtn2);
        $(".img3").mouseenter(showbtn3).mouseleave(hidebtn3);
    }

    function removeHoverEffects() {
        $(".img1").off("mouseenter", showbtn1).off("mouseleave", hidebtn1);
        $(".img2").off("mouseenter", showbtn2).off("mouseleave", hidebtn2);
        $(".img3").off("mouseenter", showbtn3).off("mouseleave", hidebtn3);
    }

    function showbtn1() {
        $(".btn1").css("display", "flex");
    }

    function hidebtn1() {
        $(".btn1").css("display", "none");
    }

    function showbtn2() {
        $(".btn2").css("display", "flex");
    }

    function hidebtn2() {
        $(".btn2").css("display", "none");
    }

    function showbtn3() {
        $(".btn3").css("display", "flex");
    }

    function hidebtn3() {
        $(".btn3").css("display", "none");
    }

    function checkScreenWidth() {
        if (window.innerWidth > 770) {
            addHoverEffects();
        } else {
            removeHoverEffects();
        }
    }

    // Initial check
    checkScreenWidth();

    // Check on window resize
    $(window).resize(checkScreenWidth);
});
var daysOfTheWeek=["SUNDAY","MONDAY","TUESDAY","WEDNESDA","THURSDAY","FRIDAY","SATURDAY"]
function displayDate(){
    var date= new Date();
    var time=date.toLocaleTimeString()
    var day=date.getDay();
    var dayName=daysOfTheWeek[day]
    $("#day").text(dayName)
    $("#time").text(time)
    console.log(time)
}
displayDate()

$(".icon").click(myFunction)
function myFunction() {
    var x = $("#nav");
    if (x.css("display") === "none") {
      x.css("display", "flex");
    } else {
      x.css("display","none");
    }
}  



