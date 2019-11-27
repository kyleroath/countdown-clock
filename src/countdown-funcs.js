let events = []
const notes = getSavedEvents()


function getSavedEvents() {

    const eventsJSON = localStorage.getItem('events')

    return eventsJSON ? JSON.parse(eventsJSON) : []
}

function saveEvents(events) {
    localStorage.setItem('events', JSON.stringify(events))
}

function addEvent(name, status, date) {
    events.push({
        name: name,
        status: status,
        date: date
    })
    saveEvents(events)
}

function eventToScreen(content) {
    document.getElementById('testing').textContent = content
} 

function renderEventList () {
    let eventAdd = document.createElement('option')
    eventAdd.textContent = notes[0].name
    document.getElementById('event-select').appendChild(eventAdd)
}
