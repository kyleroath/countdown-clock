import moment from 'moment'
import countdown from 'countdown'
import 'moment-countdown'
import { myDate, myDateText, myDateEdit } from './countdown'


const notes = getSavedEvents()


function getSavedEvents() {

    const eventsJSON = localStorage.getItem('events')

    return eventsJSON ? JSON.parse(eventsJSON) : []
}

function saveEvents(events) {
    localStorage.setItem('events', JSON.stringify(events))
}


function rollEvents () {
    document.getElementById('date-shot').textContent = moment(myDate).countdown().toString()
    document.getElementById('first-infos').textContent = countdown(moment(myDate), null, countdown.SECONDS).seconds.toLocaleString()
    document.getElementById('second-infos').textContent = Math.floor(countdown(moment(myDate), null, countdown.HOURS).hours / 8)
    document.getElementById('inf-box').textContent = `until ${myDateText.toLowerCase()}`
}

function passEvents (n) {
    let eventAdd = document.createElement('a')
    eventAdd.value = n.name
    eventAdd.textContent = n.name.toLowerCase()
    eventAdd.classList.add('dropdown-item')
    // eventAdd.setAttribute('href', `#${n.order}`)
    document.getElementById('dropdown01').appendChild(eventAdd)
}

function renderEventList () {
    if (notes.length === 0) {
       document.getElementById('dropdown01').textContent = 'no events' 
    } else {
    document.getElementById('dropdown01').innerHTML = ''
    notes.forEach((f) => {
        passEvents(f)
    })
    } 
}

//Empty check

function isEmptyCheck() {
    if (notes.length = 0) {
        myDateEdit('3000-01-01')
    }
}

// Emoji fun

function randoEmoji() {
let emojiList = [
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/232/smiling-face-with-open-mouth-and-cold-sweat_1f605.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/232/upside-down-face_1f643.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/232/sleeping-face_1f634.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/232/see-no-evil-monkey_1f648.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/232/person-with-folded-hands_1f64f.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/232/eyes_1f440.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/232/ok-hand-sign_1f44c.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/232/person-raising-both-hands-in-celebration_1f64c.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/232/selfie_1f933.png",
  ];
  let randomEmoji = emojiList[Math.floor(Math.random()*emojiList.length)];
  document.getElementById('emoji-container').setAttribute('src', randomEmoji)
}

export { saveEvents, rollEvents, renderEventList, notes, randoEmoji }