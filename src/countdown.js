let myDate
let myDateText

function getDatesInfo() {
    if (notes.length === 0) {
        myDate = '3000-01-01'
        myDateText = 'far future'
        $('#warning-container').bs_warning(`..it looks like you don't have any events, why not add one? `, 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/waving-hand-sign_emoji-modifier-fitzpatrick-type-1-2_1f44b-1f3fb_1f3fb.png')
    } else {
        myDate = notes[0].date
        myDateText = notes[0].name
    }
}

getDatesInfo()

const nowYear = moment().valueOf()

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
    randoEmoji()
 })

function runCountdown() {
    if (eventScreen.textContent === ''){
        eventScreen.textContent = moment(myDate).countdown().toString()
        document.getElementById('first-infos').textContent = countdown(moment(myDate), null, countdown.SECONDS).seconds.toLocaleString()
        document.getElementById('second-infos').textContent = Math.floor(countdown(moment(myDate), null, countdown.HOURS).hours / 8)
        document.getElementById('inf-box').textContent = `until ${myDateText.toLowerCase()}`
    } else if (myDate === null) {
        myDate = '3000-01-01'
        document.getElementById('inf-box').textContent = 'default event create your first one above!'
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

// Add event functionality

const inputEventNameDOM = document.getElementById('inputEventName')
const inputEventDateDOM = document.getElementById('inputEventDate')
const inputSubmit = document.getElementById('submit-btn')

inputSubmit.addEventListener('click', (e) => {
    notes.push({
        name: inputEventNameDOM.value,
        date: inputEventDateDOM.value,
        order: notes.length + 1
    })
    saveEvents(notes)
    $('#alert-container').bs_success(`your new event has been added`, 'much wow!')
    document.getElementById('warning-container').innerHTML = ''
    myDate = inputEventDateDOM.value
    myDateText  = inputEventNameDOM.value
    renderEventList()
    runCountdown()
})

// Run initilization commands, to merge a lot of these after basic functionality is achieved. 

renderEventList()
runCountdown()
randoEmoji()

// Debug commands

// $("#modalButton").click(function(e){
//         $('#alert-container').bs_success(`your new event has been added`, 'much wow!')
// })

// document.getElementById('title').textContent = myDateText // May re-add back in future, not sure


  // Deletion stuffs

$('#delete-btn').click(() => {
    if (myDateText === 'far future') {
        $('#alert-container').bs_fail('you must add an event first, this is the default', 'wait..')
    } else {
    let result = notes.findIndex((f) => f.name === myDateText)
    $('#alert-container').bs_fail('has been deleted', myDateText)
    notes.splice(result, 1)
    getDatesInfo()
    // myDate = notes[0].date
    // myDateText = notes[0].name
    renderEventList()
    runCountdown()
    saveEvents(notes)
}
})

  document.getElementById('inf-sec-del').textContent = `are you sure you want to delete this event?`


/* TODO's

- Fix deprecation code on date select
- Add current event in text fade next to select event
- Incorporate name of event added/deleted into their alerts.


*/