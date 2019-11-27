let myDate
const nowYear = moment().valueOf()

document.getElementById('add-event').addEventListener('click', (e) => {
    e.preventDefault()
    location.assign('/new_event.html')
})

document.getElementById('event-select').addEventListener('click', (e) => {
    const data = notes.filter((f) => {
        f.includes(e.target.value)
    })
    
})

function runCountdown() {
    const intr = setInterval(() => {
        eventToScreen(moment(myDate).countdown().toString())
        if (nowYear > moment(myDate).valueOf()) {
            eventToScreen('Event has ended!')
            clearInterval(intr)
        }
    }, 1000);
} 

renderEventList()
runCountdown()


// Debug commands

console.log(myDate)