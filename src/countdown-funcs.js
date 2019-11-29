let events = []
const notes = getSavedEvents()


function getSavedEvents() {

    const eventsJSON = localStorage.getItem('events')

    return eventsJSON ? JSON.parse(eventsJSON) : []
}

function saveEvents(events) {
    localStorage.setItem('events', JSON.stringify(events))
}

function eventToScreen(content) {
    document.getElementById('date-shot').textContent = content
} 

// function renderEventList () {
//     let eventAdd = document.createElement('option')
//     eventAdd.textContent = notes[0].name
//     document.getElementById('event-select').appendChild(eventAdd)
// }

function passEvents (n) {
    let eventAdd = document.createElement('a')
    eventAdd.value = n.name
    eventAdd.textContent = n.name
    eventAdd.classList.add('dropdown-item')
    eventAdd.setAttribute('href', `#${n.order}`)
    document.getElementById('dropdown01').appendChild(eventAdd)
}

function renderEventList () {
    notes.forEach((f) => {
        passEvents(f)
    })
}

// Add event functionality

const inputEventNameDOM = document.getElementById('inputEventName')
const inputEventDateDOM = document.getElementById('inputEventDate')
const inputSubmit = document.getElementById('submit-btn')

inputSubmit.addEventListener('click', (e) => {
    notes.push({
        name: inputEventNameDOM.value,
        date: inputEventDateDOM.value,
        order: notes.length + 1
    })
    saveEvents(notes)
    location.assign('')
})