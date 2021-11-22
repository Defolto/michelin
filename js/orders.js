const btn = document.querySelector('button');
const table = document.querySelector('table');

function deleteOrder(id) {
    // console.log(id);
    fetch('/api/deleteOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data:{
                id: id
            }
        })
    })
    .then(res => res.json())
    .then(res => {
        if (res == "ok") {
            document.querySelector(`#id${id}`).remove();
        }
    });
}

btn.addEventListener('click', ()=>{
    fetch('/api/getFull', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        res.forEach(element => {
            table.insertAdjacentHTML('beforeend', `
            <tr id="id${element._id}">
                <td>${element.name}</td>
                <td>${element.number}</td>
                <td>${element['number TC']}</td>
                <td>${element['model TC']}</td>
                <td>${element['type TC']}</td>
                <td>${element['dop info']}</td>
                <td>${element.fullDate}</td>
                <td>${element.time}</td>
                <td class="delete" onclick="deleteOrder('${element._id}')">Удаление</td>
            </tr>
            `)
        });
    });
})