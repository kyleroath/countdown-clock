let myDate = notes[0].date // Default value
const nowYear = moment().valueOf()

function getDateUpdate() { // -------------- Not finished, finishing function. Does not correctly pull yet.
    if (!location.hash) {
        myDate = notes[0].date // Default value
    }
    let result = notes.find((f) => f.order === location.hash.substr(1))
    console.log(result)
    // myDate = result[0].date
}

// DOM Elements
const eventDOM = document.getElementById('event-select')
let eventScreen = document.getElementById('date-shot')

// document.getElementById('new-event').addEventListener('click', (e) => {
//     e.preventDefault()
//     location.assign('/new_event.html')
// })

document.getElementById('go-home').addEventListener('click', (e) => location.assign(''))

window.addEventListener('hashchange', (e) => {
    console.log(location.hash.substr(1))
})

// function getEventValue () {
//     let result = notes.filter((f) => f.name === document.getElementById('event-select').value)
//     console.log(notes)
//     myDate = result[0].date
//     runCountdown()
// }

function runCountdown() {
    if (eventScreen.textContent === ''){
        eventScreen.textContent = moment(myDate).countdown().toString()
        document.getElementById('first-infos').textContent = countdown(moment(myDate), null, countdown.SECONDS).seconds.toLocaleString()
        document.getElementById('second-infos').textContent = Math.floor(countdown(moment(myDate), null, countdown.HOURS).hours / 8)
    }
    const intr = setInterval(() => {
        eventScreen.textContent = moment(myDate).countdown().toString()
        document.getElementById('first-infos').textContent = countdown(moment(myDate), null, countdown.SECONDS).seconds.toLocaleString()
        document.getElementById('second-infos').textContent = Math.floor(countdown(moment(myDate), null, countdown.HOURS).hours / 8)
        if (nowYear > moment(myDate).valueOf()) {
            eventScreen.textContent = 'event has ended! :('
            document.getElementById('first-infos').textContent = 'zero'
            document.getElementById('second-infos').textContent = 'zero'
            clearInterval(intr)
        }
    }, 1000);
} 


// Run initilization commands, to merge a lot of these after basic functionality is achieved. 

renderEventList()
// getEventValue()
runCountdown()

// Debug commands

/* TODO's

- Finish integrating the selector (can assign hash but cannot be used or called yet)
- Fix issue where adding a new note and calling the list again adds duplicates. Need a catch for cases where the item is already present. For now called a refresh (probably will if statement for existing)
- 

*/