let dayOfTheWeek = document.getElementById('dayoftheweek');
let currentTime = document.getElementById('currentTime')

let d = new Date()
let day = d.getDay()
let newDate = d.toUTCString()
console.log(day);
console.log(newDate)

// const hours = d.getUTCHours();
// const minutes = d.getUTCMinutes();
// const seconds = d.getUTCSeconds();
// const milliseconds = d.getUTCMilliseconds();



// const newTime = `${hours.toString().padStart(2, '0')}: ${minutes.toString().padStart(2, '0')}: ${seconds.toString().padStart(2, '0')}:  ${milliseconds.toString().padStart(4, '0')}`


// console.log(newTime)



switch(day){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday'
        break;
    case 2:
        day = 'Tuesday'
        break;
    case 3:
        day = 'Wednesday'
        break;
    case 4:
        day = 'Thursday'
        break;
    case 5:
        day = 'Friday'
        break;
    case 6:
        day = 'Saturday'
        break;
}

dayOfTheWeek.innerHTML = `Day: ${day}`;
currentTime.innerHTML = `UCT: ${newDate}`;