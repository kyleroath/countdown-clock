let date = ''
let eventName = ''

document.getElementById('date-range').addEventListener('change', (e) => {
    date = e.target.value
})
document.getElementById('event-name').addEventListener('change', (e) => {
    eventName = e.target.value
})

document.getElementById('submit-event').addEventListener('click', (e) => {
    e.preventDefault()
    notes.push({
        name: eventName,
        active: 'active',
        date: date,
        order: notes.length + 1
    })
    saveEvents(notes)
    location.assign('/index.html')
})

document.getElementById('go-back').addEventListener('click', (e) => {
    location.assign('/index.html')
})