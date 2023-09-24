
// Main function
$(document).ready(function () {
  // Get the current hour
  var currentHour = dayjs().hour();

  // Store the current date in local storage
  var currentDateInLocalStorage = localStorage.getItem("currentDate");

  //If not in local storage, set it and clear all data
  //if stored date is different from current date clear
  //local storage and set the new current date
  if (!currentDateInLocalStorage) {
    localStorage.setItem("currentDate", getCurrentDate());
    clearLocalStorageData();
  } else {
    if (currentDateInLocalStorage !== getCurrentDate()) {
      clearLocalStorageData();
      localStorage.setItem("currentDate", getCurrentDate());
    }
  }
  //Get handle for past, present and future containers
  var $pastContainer = $("#past-container");
  var $presentContainer = $("#present-container");
  var $futureContainer = $("#future-container");

  // Loop through hours (9AM to 5PM)
  for (var hour = 9; hour <= 17; hour++) {
    // Create a time block element for each loop
    var $block = $("<div>").addClass("row time-block").attr("data-hour", hour);

    // Determine the past present or future container for each time block
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

    // Create and add elements for each time block
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

    // Event listeners for save buttons for each time block
    $saveButton.on("click", saveTimeBlockFunction);

    //Function to save the time block
    function saveTimeBlockFunction() {
      var hourId = $(this).parent(".time-block").data("hour");
      var textareaContent = $(this).siblings(".description").val();
      localStorage.setItem("hour-" + hourId, textareaContent);
    }
  }

  // Loop through hours to get saved data from local storage
  for (var hour = 9; hour <= 17; hour++) {
    var savedText = localStorage.getItem("hour-" + hour);
    if (savedText) {
      $(".time-block[data-hour='" + hour + "']")
        .find(".description")
        .val(savedText);
    }
  }
});

// Displays the current date in the header of the page.
dayjs.extend(dayjs_plugin_advancedFormat);
var currentDate = dayjs().format("dddd, MMMM Do");
document.getElementById("currentDay").textContent = currentDate;

// Function to get the current date
function getCurrentDate() {
  return dayjs().format("YYYY-MM-DD");
}

// Function to clear local storage data
function clearLocalStorageData() {
  for (var hour = 9; hour <= 17; hour++) {
    localStorage.removeItem("hour-" + hour);
  }
}
