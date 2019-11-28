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
    let eventAdd = document.createElement('option')
    eventAdd.value = n.name
    eventAdd.textContent = n.name
    // eventAdd.classList.add('dropdown-item')
    document.getElementById('event-select').appendChild(eventAdd)
}

function renderEventList () {
    notes.forEach((f) => {
        passEvents(f)
    })
}
