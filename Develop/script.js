//initialized local storage entries
for (let i = 9; i <= 18; i++) {
  if (window.localStorage.getItem(i) === null) {
    window.localStorage.setItem(i, "");
  }
}

const timeBlocks = document.querySelectorAll(".time-block");

const currentHour = dayjs().hour();

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

$(".saveBtn").on("click", function(event){
  const key = event.currentTarget.id.split("-")[1];
  const value = document.getElementById(`input-${key}`).value;
  window.localStorage.setItem(key, value);
})
