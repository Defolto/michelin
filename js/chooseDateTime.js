let user = {
    "name": '',
    "number": '',
    "number TC": '',
    "model TC": '',
    "type TC": '',
    "dop info": '',
    "date": '',
    "time": ''
}

function saveName__main() {
    user = {
        "name": document.querySelector('#mainForm_name').value,
        "number": document.querySelector('#mainForm_number').value,
        "number TC": document.querySelector('#mainForm_numberTC').value,
        "model TC": document.querySelector('#mainForm_modelTC').value,
        "type TC": document.querySelector('#mainForm_typeTC').value,
        "dop info": document.querySelector('#mainForm_dopInfo').value,
    }
    console.log(user);
}

function saveName__modal() {
    user = {
        "name": document.querySelector('#modal__name').value,
        "number": document.querySelector('#modal__number').value,
        "number TC": document.querySelector('#modal__numberTC').value,
        "model TC": document.querySelector('#modal__modelTC').value,
        "type TC": document.querySelector('#modal__typeTC').value,
        "dop info": document.querySelector('#modal__dopInfo').value,
    }
    console.log(user);
}

function chooseDate(date, year) {
    user.data = date;
    user.month = stateMonth + 1;
    user.year = year;

    if (document.querySelector('.recording-content__dates .recording__active')) {
        document.querySelector('.recording-content__dates .recording__active').classList.remove('recording__active');
    }

    document.querySelector(`#date${date}`).classList.add('recording__active');
    cleareTimes();

    fetch('/api/findDates', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data:{
                data: `${user.data}.${user.month}.${user.year}`
            }
        })
    })
    .then(res => res.json())
    .then(res => {
        res.forEach(element => {
            console.log(element['time']);
            document.querySelector(`#${element['time']}`).classList.add('recording__busy')
        });
    });
}


function chooseTime(time, id) {
    if (document.querySelector(`#${id}`).classList.contains('recording__busy')) {
        alert("Эта дата занята!");
    } else {
        user.time = time;

        if (document.querySelector('.recording-content__times .recording__active')) {
            document.querySelector('.recording-content__times .recording__active').classList.remove('recording__active');
        }
        document.querySelector(`#${id}`).classList.add('recording__active');
    }
}

const btnOrder = document.querySelector('#btnOrder');

btnOrder.addEventListener('click', ()=>{
    if (user.data == undefined || user.time == undefined) {
        alert("Вы не выбрали дату или время")
    }else{
        user.fullDate = `${user.data}.${user.month}.${user.year}`;
        fetch('/api/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data:{
                    order: user
                }
            })
        })
        alert("Заявка принята!");
        document.location.replace("http://michelinyar.ru/");
    }
})

let HAVEDATA__MAIN = false;
function checkInputs1(e) {
    if (document.querySelector('#mainForm_name').value && document.querySelector('#mainForm_numberTC').value && document.querySelector('#mainForm_modelTC').value) {
        $("#recording3").animatedModal();
        $("#recording4").animatedModal();
    }else{
        HAVEDATA__MAIN = true
    }
}

let HAVEDATA__MODAL = false;
function checkInputs2(e) {
    if (document.querySelector('#modal__name').value && document.querySelector('#modal__numberTC').value && document.querySelector('#modal__modelTC').value) {
        $("#recording1").animatedModal();
        $("#recording2").animatedModal();
    }else{
        HAVEDATA__MODAL = true
    }
}

addEventListener("keydown", checkInputs1);
addEventListener("keyup", checkInputs2);

document.querySelector('.s1').addEventListener('click', ()=>{
    if (HAVEDATA__MODAL) {
        saveName__modal();
    }else{
        alert('Заполните все поля для продолжения')
    }
})
document.querySelector('.s2').addEventListener('click', ()=>{
    if (HAVEDATA__MODAL) {
        saveName__modal();
    }else{
        alert('Заполните все поля для продолжения')
    }
})
document.querySelector('.s3').addEventListener('click', ()=>{
    if (HAVEDATA__MAIN) {
        saveName__main();
    }else{
        alert('Заполните все поля для продолжения')
    }
})
document.querySelector('.s4').addEventListener('click', ()=>{
    if (HAVEDATA__MODAL) {
        saveName__main();
    }else{
        alert('Заполните все поля для продолжения')
    }
})