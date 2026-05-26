// Show hide
function showElementById(element) {
  const elementId = document.getElementById(element);
   elementId.classList.remove('none');
}
function hideElementById(element) {
  const elementId = document.getElementById(element)
   elementId.classList.add('none');
}


// Date Time Management
function dateTime() {
    const id = Date.now();
    const date_time = new Date();
    const date = date_time.toDateString();
    const time = date_time.toLocaleTimeString();
    const year = date_time.getFullYear();
    const month = date_time.getMonth() + 1;
    const day = date_time.getDay();
    const minute = date_time.getMinutes();
    const second = date_time.getSeconds();
    const milisecond = date_time.getMilliseconds();
  
   return {id, date, time, year, month, day, minute, second, milisecond}
}
const {id, date, time, year, month, day, minute, second, milisecond} = dateTime();
  