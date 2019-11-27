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
    eventName.length > 1 && date.length > 1 ? addEvent(eventName, 'Active', date) : console.log('Failed')
})