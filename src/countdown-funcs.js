import 'moment-countdown'
// import thisEvent from './countdown' // Importing the event class, not currently used here. To be used.


// DOM Elements
export const el = {
    eventScreen: document.getElementById('date-shot'),
    infoBox: document.getElementById('inf-box'),
    firstInfo: document.getElementById('first-infos'),
    secondInfo: document.getElementById('second-infos'),
    dropDown: document.getElementById('dropdown01'),
    goHome: document.getElementById('go-home'),
    eventName: document.getElementById('inputEventName'),
    eventDate: document.getElementById('inputEventDate'),
    inputSubmit: document.getElementById('submit-btn'),
    warningBox: document.getElementById('warning-container')
}

class savedNotes {
    constructor(notes) {
        this.notes = this.getSavedEvents()
    }
    getSavedEvents() {
        const eventsJSON = localStorage.getItem('events')
        return eventsJSON ? JSON.parse(eventsJSON) : []
    }
    saveEvents() {
        localStorage.setItem('events', JSON.stringify(this.notes))
    }
    passEvents(n) {
        let eventAdd = document.createElement('a')
        eventAdd.value = n.name
        eventAdd.textContent = n.name.toLowerCase()
        eventAdd.classList.add('dropdown-item')
        el.dropDown.appendChild(eventAdd)
    }
    renderEventList() {
        if (myNotes.notes.length === 0) {
            el.dropDown.textContent = 'no events' 
         } else {
             el.dropDown.innerHTML = ''
             this.notes.forEach((f) => {
                 this.passEvents(f)
            })
        } 
    }
}

const myNotes = new savedNotes()

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

export { myNotes as default, randoEmoji }