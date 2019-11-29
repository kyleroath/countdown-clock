let myDate = notes[0].date // Static set while debugging
let myDateText = notes[0].name
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

document.getElementById('go-home').addEventListener('click', (e) => location.assign(''))

// window.addEventListener('hashchange', (e) => {
//     console.log(location.hash.substr(1))                    // Too be used when UUID may be introduced in future.
// })

$('#dropdown01').click((e) => {
    let result = notes.find((f) => f.name === e.target.text)
    myDate = result.date
    myDateText = result.name
    runCountdown()
 })

function runCountdown() {
    if (eventScreen.textContent === ''){
        eventScreen.textContent = moment(myDate).countdown().toString()
        document.getElementById('first-infos').textContent = countdown(moment(myDate), null, countdown.SECONDS).seconds.toLocaleString()
        document.getElementById('second-infos').textContent = Math.floor(countdown(moment(myDate), null, countdown.HOURS).hours / 8)
        document.getElementById('inf-box').textContent = `until ${myDateText.toLowerCase()}`
    }
    const intr = setInterval(() => {
        eventScreen.textContent = moment(myDate).countdown().toString()
        document.getElementById('first-infos').textContent = countdown(moment(myDate), null, countdown.SECONDS).seconds.toLocaleString()
        document.getElementById('second-infos').textContent = Math.floor(countdown(moment(myDate), null, countdown.HOURS).hours / 8)
        document.getElementById('inf-box').textContent = `until ${myDateText.toLowerCase()}`
        if (nowYear > moment(myDate).valueOf()) {
            eventScreen.textContent = 'event has ended! :('
            document.getElementById('first-infos').textContent = 'zero'
            document.getElementById('second-infos').textContent = 'zero'
            document.getElementById('inf-box').textContent = ''
            clearInterval(intr)
        }
    }, 1000);
} 

// Run initilization commands, to merge a lot of these after basic functionality is achieved. 

renderEventList()
runCountdown()

// Debug commands

// $("#modalButton").click(function(e){
//         $('#alert-container').bs_success(`your new event has been added`, 'much wow!')
// })

// document.getElementById('title').textContent = myDateText // May re-add back in future, not sure


  // Deletion stuffs

$('#delete-btn').click(() => {
    let result = notes.findIndex((f) => f.name === myDateText)
    $('#alert-container').bs_fail('has been deleted', myDateText)
    notes.splice(result, 1)
    myDate = notes[0].date
    myDateText = notes[0].name
    renderEventList()
    runCountdown()
    saveEvents(notes)
})

  document.getElementById('inf-sec-del').textContent = `are you sure you want to delete this event?`


/* TODO's

- Fix deprecation code on date select
- Add current event in text fade next to select event
- Incorporate name of event added/deleted into their alerts.

*/