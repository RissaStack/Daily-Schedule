// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// $(document).ready(function() {
//   $("div").wrap(<div id="date-display"></div>);
// });
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//function to set color: past, present, future
// function setTimeBlockColor() {
//   let currentHour = dayjs().hour();
//   let hour = $(this).attr('id');
// };

const timeBlocks = document.querySelectorAll(".time-block");

const currentHour = dayjs().hour();
console.log(currentHour);
//function to save information to local file.
function saveData() {

};

//if/else statments to color code the blocks
for (const timeBlock of timeBlocks) {
  console.log(timeBlock)
  let hour = parseInt (timeBlock.getAttribute("id"));
  console.log(hour);
  if (hour < currentHour) {
    console.log("past")
    timeBlock.classList.add("past");
  } else if (hour === currentHour) {
    console.log("present")
    timeBlock.classList.add("present");
  } else if (hour > currentHour) {
    console.log("future")
    timeBlock.classList.add("future");
  }
}



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


$(".saveBtn").on("click", function(event){
  console.log(event.target);
})