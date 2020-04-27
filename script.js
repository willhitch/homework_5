var currentDay = new Date();
var hour = 12;
// currentDay.getHours();
var time;
var timeBlock = $(".container").children();
var taskArr = [];

console.log(timeBlock);

$("#currentDay").text(currentDay);

// setInterval(workHours, 1000);
workHours();

//Click Events

//Save Click

$(".saveBtn").on("click", function () {
  var toDo = $(this).parent().siblings().find("textarea").val();

  var timeOfTask = $(this).parent().parent().attr("id");

  console.log(timeOfTask, toDo);
});

function saveTask(timeOfTask, toDo) {
  localStorage.setItem([timeOfTask, toDo]);
}

function workHours() {
  for (var i = 0; i < timeBlock.length; i++) {
    var time = parseInt(timeBlock[i].id);

    if (time === hour) {
      timeBlock.toggleClass("present");
    } else if (time < hour) {
      timeBlock.toggleClass("past");
    } else if (time > hour) {
      timeBlock.toggleClass("future");
    }

    handleTime(time);
  }
}

function handleTime(time) {
  console.log(time);

  //   if (time === hour) {
  //     $(this).attr("class", "present");
  //   } else if (time < hour) {
  //     $(this).attr("class", "past");
  //   } else if (time > hour) {
  //     $(this).attr("class", "future");
  //   }

  //   switch (time) {
  //     case time === hour:
  //       timeBlock.addClass("present");
  //       timeBlock.removeClass("past future");
  //       break;
  //     case time < hour:
  //       timeBlock.addClass("past");
  //       timeBlock.removeClass("future present");
  //       break;
  //     case time > hour:
  //       timeBlock.addClass("future");
  //       timeBlock.removeClass("past present");
  //       break;
  //     default:
  //       break;
  //   }

  //   if (time === hour) {
  //     timeClass.addClass("present");
  //     timeClass.removeClass("past future");
  //   } else if (time < hour) {
  //     timeClass.addClass("past");
  //     timeClass.removeClass("future present");
  //   } else if (time > hour) {
  //     timeClass.addClass("future");
  //     timeClass.removeClass("past present");
  //   }
}
