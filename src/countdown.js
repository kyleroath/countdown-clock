// Run imports for webpack

import 'bootstrap'
import $ from 'jquery'
import 'moment-countdown'
import moment from 'moment'
import countdown from 'countdown'
import myNotes, { randoEmoji, el } from './countdown-funcs'
import './alerts'

const defaults = { // Default values if no events
    date: '3000-01-01',
    text: 'far future'
}

class myEvent {
    constructor(date, currentDate, text) {
        this.getDatesInfo()
        this.currentDate = moment().valueOf()
    }
    setDate(d, t) {
        this.date = d
        this.text = t
        
    }
    setDefault({ date, text }) {
        this.date = date
        this.text = text
    }
    getDatesInfo() {
        if (myNotes.notes.length === 0) {
            this.setDefault(defaults)
            $('#warning-container').bs_warning(`..it looks like you don't have any events, why not add one? `, 
            'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/waving-hand-sign_emoji-modifier-fitzpatrick-type-1-2_1f44b-1f3fb_1f3fb.png')
        } else {
        this.date = myNotes.notes[0].date
        this.text = myNotes.notes[0].name
        }
    }
    rollEvents(stage) {
        if (stage) {
            el.eventScreen.textContent = moment(this.date).countdown().toString()
            el.firstInfo.textContent = countdown(moment(this.date), null, countdown.SECONDS).seconds.toLocaleString()
            el.secondInfo.textContent = Math.floor(countdown(moment(this.date), null, countdown.HOURS).hours / 8)
            el.infoBox.textContent = `until ${this.text.toLowerCase()}`
        } else if (!stage) {
            el.eventScreen.textContent = `${thisEvent.text} has passed! :(`
            el.firstInfo.textContent = 'zero'
            el.secondInfo.textContent = 'zero'
            el.infoBox.textContent = ''
            $('#current-event').text('')
        }
    }
    runCountdown() {
        if (el.eventScreen.textContent === ''){
            this.rollEvents(true)
        } else if (this.date === defaults.date) {
            this.setDefault(defaults)
            el.infoBox.textContent = 'default event create your first one above!'
        }
        const intr = setInterval(() => {
            this.rollEvents(true)
            if (this.currentDate > moment(this.date).valueOf()) {
                this.rollEvents(false)
                clearInterval(intr)
            }
        }, 1000);
    }
}

const thisEvent = new myEvent()

export { thisEvent as default }

// Home button (refresh)
el.goHome.addEventListener('click', (e) => location.assign(''))

// Dropdown click event
$('#dropdown01').click((e) => { 
    if (myNotes.notes.length > 0) {
    let result = myNotes.notes.find((f) => f.name === e.target.text)
    console.log(result)
    thisEvent.setDate(result.date, result.name)
    thisEvent.runCountdown()
    randoEmoji()
    }
 })

 // Debug add for testing

 $('#debug-add').click(() => {
     myNotes.notes.push({
         name: `debug-event-${myNotes.notes.length + 1}`,
         date: moment().valueOf() +10000000,
         order: myNotes.notes.length + 1
     })
     myNotes.saveEvents()
     myNotes.renderEventList()
     thisEvent.runCountdown()
 })

 //New event stuffs
el.inputSubmit.addEventListener('click', (e) => { 
    if (el.eventName.value.length > 0 && el.eventDate.value.length === 10) {
    myNotes.notes.push({
    name: el.eventName.value,
    date: el.eventDate.value,
    // date: el.inputEventDateDOM.value,
    order: myNotes.notes.length + 1
    })
    myNotes.saveEvents()
    $('#alert-container').bs_success(`has been added!`, el.eventName.value)
    el.warningBox.innerHTML = ''
    thisEvent.setDate(el.eventDate.value, el.eventName.value)
    myNotes.renderEventList()
    thisEvent.runCountdown()
    } else {
        $('#alert-container').bs_fail('your event was not added as it did not contain a name, a date OR both!','oops!') // -- To be replaced with something far more dynamic, such as catching this live time in the add event area. Needed to fix bug where it passed in empty object within array.
    }
})


  // Deletion stuffs
  $("#delete-btn").click(() => {
    if (myNotes.notes.length === 0) {
      $("#alert-container").bs_fail("you do not have any events to delete currently (the one above is a default), add one now", "whoa!")
    } else {
      let result = myNotes.notes.findIndex(f => f.name === thisEvent.text)
      $("#alert-container").bs_fail("has been deleted", thisEvent.text)
      myNotes.notes.splice(result, 1)
      thisEvent.getDatesInfo()
      myNotes.renderEventList()
      thisEvent.runCountdown()
      myNotes.saveEvents()
    }
  });  

  $('#delete-all').click(() => {
    if (myNotes.notes.length === 0) {
        $("#alert-container").bs_fail("you do not have any events to delete currently (the one above is a default), add one now", "whoa!")
      } else {
        el.infoDel.textContent = `are you sure you want to delete this event?`
    }
  })

  // Run functions

  myNotes.renderEventList()
  thisEvent.runCountdown()
  randoEmoji()