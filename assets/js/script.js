$(document).ready(function () {
  var currentHour = dayjs().hour();

  var $pastContainer = $("#past-container");
  var $presentContainer = $("#present-container");
  var $futureContainer = $("#future-container");

  for (var hour = 9; hour <= 17; hour++) {
    var $block = $("<div>").addClass("row time-block").attr("data-hour", hour);

    if (hour < currentHour) {
      $pastContainer.append($block);
      $pastContainer.addClass("past");
    } else if (hour === currentHour) {
      $presentContainer.append($block);
      $presentContainer.addClass("present");
    } else {
      $futureContainer.append($block);
      $futureContainer.addClass("future");
    }

    var $hourText = $("<div>").addClass("col-2 col-md-1 hour text-center py-3");

    if (hour === 12) {
      $hourText.text("12PM");
    } else if (hour > 12) {
      $hourText.text(hour - 12 + "PM");
    } else {
      $hourText.text(hour + "AM");
    }

    var $textarea = $("<textarea>")
      .addClass("col-8 col-md-10 description")
      .attr("rows", 3);
    var $saveButton = $("<button>")
      .addClass("btn saveBtn col-2 col-md-1")
      .attr("aria-label", "save");
    var $saveIcon = $("<i>")
      .addClass("fas fa-save")
      .attr("aria-hidden", "true");

    $saveButton.append($saveIcon);

    $block.append($hourText);
    $block.append($textarea);
    $block.append($saveButton);
  }
});

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

// Displays the current date in the header of the page.
dayjs.extend(dayjs_plugin_advancedFormat);
var currentDate = dayjs().format("dddd, MMMM Do");
document.getElementById("currentDay").textContent = currentDate;
