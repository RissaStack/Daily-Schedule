//initialized local storage entries
for (let i = 9; i <= 18; i++) {
  if (window.localStorage.getItem(i) === null) {
    window.localStorage.setItem(i, "");
  }
}

//setting my variables to create the time and date at the top.
const timeBlocks = document.querySelectorAll(".time-block");

const currentHour = dayjs().hour();

//this loop is going to be used for both the color of the time blocks and the local storage. 
for (const timeBlock of timeBlocks) {
  let hour = parseInt(timeBlock.getAttribute("id"));
  const toDo = window.localStorage.getItem(hour);
  document.getElementById(`input-${hour}`).value = toDo;
    if (hour < currentHour) {
      timeBlock.classList.add("past");
  } else if (hour === currentHour) {
      timeBlock.classList.add("present");
  } else if (hour > currentHour) {
    timeBlock.classList.add("future");
  }
}

//This event listener is for the save buttons for the local storage.
$(".saveBtn").on("click", function(event){
  const key = event.currentTarget.id.split("-")[1];
  const value = document.getElementById(`input-${key}`).value;
  window.localStorage.setItem(key, value);
})
