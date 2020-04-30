// Variables
var currentDay = new Date();
var hour = currentDay.getHours();
var time;
var timeBlock;

// Display Current Day
$("#currentDay").text(currentDay);

//Set Interval to run workHours Function
setInterval(workHours, 1000);

//Get local storage
getTask();

//Click Functions

//Save Click
$(".saveBtn").on("click", function () {
  var toDo = $(this)
    .parent()
    .siblings(".description")
    .children("textarea")
    .val();

  var timeOfTask = $(this).parent().parent().attr("id");

  localStorage.setItem(timeOfTask, toDo);
  getTask();
});

//Clear Click
$(".clear").on("click", function () {
  localStorage.clear();
  getTask();
});

//Get Local Storage Function
function getTask() {
  for (var i = 9; i < 18; i++) {
    $("#" + i + " textarea").val(localStorage.getItem("" + i + ""));
  }
}

//Function to change row classes based on time
function workHours() {
  $(".hour").each(function () {
    var time = parseInt($(this).attr("id"));
    var timeBlock = $(this);
    if (time < hour) {
      timeBlock.addClass("past");
      timeBlock.removeClass("future present");
    } else if (time > hour) {
      timeBlock.addClass("future");
      timeBlock.removeClass("past present");
    } else {
      timeBlock.addClass("present");
      timeBlock.removeClass("past future");
    }
  });
}
