let myDate
const nowYear = moment().valueOf()

// DOM Elements
const eventDOM = document.getElementById('event-select')
let eventScreen = document.getElementById('date-shot')

document.getElementById('new-event').addEventListener('click', (e) => {
    e.preventDefault()
    location.assign('/new_event.html')
})

document.getElementById('go-home').addEventListener('click', (e) => location.assign(''))

document.getElementById('event-select').addEventListener('change', (e) => getEventValue())

function getEventValue () {
    let result = notes.filter((f) => f.name === document.getElementById('event-select').value)
    myDate = result[0].date
    runCountdown()
}

function numbCom(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function runCountdown() {
    if (eventScreen.textContent === ''){
        eventScreen.textContent = moment(myDate).countdown().toString()
        document.getElementById('first-infos').textContent = numbCom(countdown(moment(myDate), null, countdown.SECONDS).seconds)
        document.getElementById('second-infos').textContent = Math.floor(countdown(moment(myDate), null, countdown.HOURS).hours / 8)
    }
    const intr = setInterval(() => {
        eventScreen.textContent = moment(myDate).countdown().toString()
        document.getElementById('first-infos').textContent = numbCom(countdown(moment(myDate), null, countdown.SECONDS).seconds)
        document.getElementById('second-infos').textContent = Math.floor(countdown(moment(myDate), null, countdown.HOURS).hours / 8)
        if (nowYear > moment(myDate).valueOf()) {
            eventScreen.textContent = 'event has ended! :('
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