let myDate
const nowYear = moment().valueOf()

// DOM Elements
const eventDOM = document.getElementById('event-select')

document.getElementById('add-event').addEventListener('click', (e) => {
    e.preventDefault()
    location.assign('/new_event.html')
})

document.getElementById('event-select').addEventListener('change', (e) => getEventValue())

function getEventValue () {
    let result = notes.filter((f) => f.name === document.getElementById('event-select').value)
    myDate = result[0].date
}

function runCountdown() {
    const intr = setInterval(() => {
        eventToScreen(moment(myDate).countdown().toString())
        eventToScreen(`${moment(myDate).countdown().toString()} until ${eventDOM.value} ends!`)
        if (nowYear > moment(myDate).valueOf()) {
            eventToScreen('Event has ended!')
            clearInterval(intr)
        }
    }, 1000);
} 

// Run initilization commands, to merge a lot of these after basic functionality is achieved. 

renderEventList()
getEventValue()
runCountdown()


// Debug commands

/* TODO's

- Better render the change in selected countdowns. Right now, it still runs along the initial rundown with no immediate change if new event selected.
- Clean up and merge code, as preparing for more basic features.
- Style CSS*

*/