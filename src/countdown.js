const staticDate = notes[0].date
const nowYear = moment().valueOf()

document.getElementById('add-event').addEventListener('click', (e) => {
    e.preventDefault()
    location.assign('/new_event.html')
})

function runCountdown() {
    const intr = setInterval(() => {
        eventToScreen(moment(staticDate).countdown().toString())
        if (nowYear > moment(staticDate).valueOf()) {
            eventToScreen('Event has ended!')
            clearInterval(intr)
        }
    }, 1000);
} 

renderEventList()
runCountdown()

// Debug commands