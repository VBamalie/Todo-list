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
        $(this).addClass(".present")
    }
    else if (currentHour < hourBlock){
        $(this).addClass(".future")
    }
    else if(currentHour > hourBlock ){
        $(this).addClass(".past")
    }
};

//$("#hour-nine").siblings("information")colorChanger(hourNine);

$("#hour-nine .information").val(localStorage.getItem("hour-nine"));
$("#hour-ten .information").val(localStorage.getItem("hour-ten"));
$("#hour-eleven .information").val(localStorage.getItem("hour-eleven"));
$("#hour-twelve .information").val(localStorage.getItem("hour-twelve"));
$("#hour-one .information").val(localStorage.getItem("hour-one"));
$("#hour-two .information").val(localStorage.getItem("hour-two"));
$("#hour-three .information").val(localStorage.getItem("hour-three"));
$("#hour-four .information").val(localStorage.getItem("hour-four"));