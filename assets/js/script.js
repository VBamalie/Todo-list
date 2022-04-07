//the time setter 
var currentHour = moment().format("H");
var hourNine = 9;
var hourTen =10;
var hourEleven = 11;
var hourTwelve = 12;
var hourOne = 13;
var hourTwo = 14;
var hourThree = 15;
var hourFour = 16;
var hourFive = 17


setInterval(()=>{
    var currentTime = (moment().format('MMMM Do YYYY, h:mm a'));
    $("#currentDay").text(currentTime);
    return currentTime
}, 1000);

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".information").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time , value);
})
});

function colorChanger(hourBlock){
    if (currentHour == hourBlock){
        var change = "present"
        return change;
    }
    else if (currentHour < hourBlock){
        var change = "future"
        return change; 
    }
    else if(currentHour > hourBlock ){
        var change = "past"
        return change;
    }
};

$("#hour-nine").children(".information").addClass(colorChanger(hourNine));
$("#hour-ten").children(".information").addClass(colorChanger(hourTen));
$("#hour-eleven").children(".information").addClass(colorChanger(hourEleven));
$("#hour-twelve").children(".information").addClass(colorChanger(hourTwelve));
$("#hour-one").children(".information").addClass(colorChanger(hourOne));
$("#hour-two").children(".information").addClass(colorChanger(hourTwo));
$("#hour-three").children(".information").addClass(colorChanger(hourThree));
$("#hour-four").children(".information").addClass(colorChanger(hourFour));
$("#hour-five").children(".information").addClass(colorChanger(hourFive));

$("#hour-nine .information").val(localStorage.getItem("hour-nine"));
$("#hour-ten .information").val(localStorage.getItem("hour-ten"));
$("#hour-eleven .information").val(localStorage.getItem("hour-eleven"));
$("#hour-twelve .information").val(localStorage.getItem("hour-twelve"));
$("#hour-one .information").val(localStorage.getItem("hour-one"));
$("#hour-two .information").val(localStorage.getItem("hour-two"));
$("#hour-three .information").val(localStorage.getItem("hour-three"));
$("#hour-four .information").val(localStorage.getItem("hour-four"));