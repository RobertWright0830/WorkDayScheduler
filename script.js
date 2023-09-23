$(document).ready(function () {

  var currentHour = dayjs().hour();

  var pastContainer = document.getElementById("past-container");
  var presentContainer = document.getElementById("present-container");
  var futureContainer = document.getElementById("future-container");

  for (var hour = 9; hour <= 17; hour++) {
    var block = document.createElement("div");
    block.className = "row time-block";
    block.setAttribute("data-hour", hour);
   
    if (hour < currentHour) {
      pastContainer.appendChild(block);
    } else if (hour === currentHour) {
      presentContainer.appendChild(block);
    } else {
      futureContainer.appendChild(block);
    }

    if (hour < currentHour) {
      block.classList.add("past");
    } else if (hour === currentHour) {
      block.classList.add("present");
    } else {
      block.classList.add("future");
    }
    var hourText = document.createElement("div");
hourText.className = "col-2 col-md-1 hour text-center py-3";

if (hour === 12) {
  hourText.textContent = "12PM";
} else if (hour > 12) {
  hourText.textContent = (hour - 12) + "PM";
} else {
  hourText.textContent = hour + "AM";
}

    var textarea = document.createElement("textarea");
    textarea.className = "col-8 col-md-10 description";
    textarea.rows = 3;

    var saveButton = document.createElement("button");
    saveButton.className = "btn saveBtn col-2 col-md-1";
    saveButton.setAttribute("aria-label", "save");

    var saveIcon = document.createElement("i");
    saveIcon.className = "fas fa-save";
    saveIcon.setAttribute("aria-hidden", "true");

    saveButton.appendChild(saveIcon);
    
    block.appendChild(hourText);
    block.appendChild(textarea);
    block.appendChild(saveButton);


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
  var currentDate = dayjs().format('dddd, MMMM Do');
  document.getElementById('currentDay').textContent = currentDate;

