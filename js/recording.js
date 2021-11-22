Date.prototype.daysInMonth = function(month) {
    return 33 - new Date(this.getFullYear(), month, 33).getDate();
};
let stateMonth = new Date().getMonth();
let countDates = new Date().daysInMonth(stateMonth);
let countYear = new Date().getFullYear()
const dates = document.querySelector(".recording-content__dates");
const times = document.querySelector(".recording-content__times");
const months = [
    'Январь',
   'Февраль',
   'Март',
   'Апрель',
   'Май',
   'Июнь',
   'Июль',
   'Август',
   'Сентябрь',
   'Октябрь',
   'Ноябрь',
   'Декабрь',
];

// Изменение месяца------------------------------------------------------------------------------------------------------- 
function changeMonth(number_month) {
    cleareTimes()
    if (number_month == -1) {
        stateMonth = 11;
        countYear = countYear - 1;
    }else if (number_month == 12) {
        stateMonth = 0;
        countYear = countYear + 1;
    }else{
        stateMonth = number_month;
    }
    countDates = new Date().daysInMonth(stateMonth);
    dates.innerHTML = '';
    for (let i = 1; i < countDates+1; i++) {
        dates.insertAdjacentHTML('beforeend', `<div class="recording-date" id="date${i}" onclick="chooseDate(${i},${countYear})"><p>${i}</p></div>`)
    }
    document.querySelector('#month').innerHTML = months[stateMonth];
    if (document.querySelector('.recording-content__times .recording__active')) {
        document.querySelector('.recording-content__times .recording__active').classList.remove('recording__active');
    }
}

changeMonth(stateMonth)

const prevMonth = document.querySelector('#prevMonth');
const nextMonth = document.querySelector('#nextMonth');

nextMonth.addEventListener('click', ()=>changeMonth(stateMonth+1))
prevMonth.addEventListener('click', ()=>changeMonth(stateMonth-1))
// Изменение месяца------------------------------------------------------------------------------------------------------- 

// Создание полей для времени и даты --------------------------------------------------------------------
let hours = 8;
let minutes = "00";
for (let i = 1; i < 25; i++) {
    time = getTime(hours, minutes);
    times.insertAdjacentHTML('beforeend', `<div id="time${hours}_${minutes}" class="recording-time" onclick="chooseTime('time${hours}_${minutes}', 'time${hours}_${minutes}')"><p>${time["top"]}</p><p>${time["bottom"]}</p></div>`);
    
    if (minutes == "00") {
        minutes = "30";
    }else{
        minutes = "00";
        hours++;
    }
}

function getTime(hour, minute) {
    if (parseInt(minute) == 0) {
        return {
            "top": `${hour}:${minute}`,
            "bottom": `${hour}:30`
        }
    } else {
        return {
            "top": `${hour}:${minute}`,
            "bottom": `${parseInt(hour)+1}:00`
        }
    }
}
// Создание полей для времени и даты --------------------------------------------------------------------

// Стили для дат и времени-----------------------------------------------------
function setSquareDates() {
    const dates = document.querySelectorAll('.recording-date');
    dates.forEach(element => {
        // console.log(element);
        element.style.height = element.offsetWidth + 'px';
    });
}

function setSquareTimes() {
    const dates = document.querySelectorAll('.recording-time');
    dates.forEach(element => {
        // console.log(element);
        element.style.height = element.offsetWidth + 'px';
    });
}

window.onload = function() {
    setSquareDates();
    setSquareTimes();
};

window.addEventListener('resize', function(event){
    setSquareDates();
    setSquareTimes();
});
// Стили для дат и времени-----------------------------------------------------

// Очистка времени

function cleareTimes() {
    const allBtnTimes = document.querySelectorAll('.recording-time');
    allBtnTimes.forEach(element => {
        element.classList.remove('recording__busy');
    });
}

// Очистка времени
