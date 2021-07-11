const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const ten = document.querySelector('#ten')
const eleven = document.querySelector('#eleven')
const twelve = document.querySelector('#twelve')


const songs = ['Birds', 'Warriors', 'Born For This', 'Can you hear me now', 'Champion', 'Fear', 'Fire', 'Higher', 'Legend', 'Revolution', 'Stronger', 'Unstoppable']

let songIndex = 0;

loadSong(songs[songIndex])

function loadSong(song) {
    title.innerText = song
    audio.src = `Audios/${song}.m4a`
    cover.src = `Images/${song}.jpg`
}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong(){
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong()
}

function nextSong(){
    songIndex++

    if(songIndex > songs.length -1){
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()
}

function updateProgress(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

function onesong(){
    songIndex = 0
    loadSong(songs[songIndex])
    playSong()
}

function twosong(){
    songIndex = 1
    loadSong(songs[songIndex])
    playSong()
}

function threesong(){
    songIndex = 2
    loadSong(songs[songIndex])
    playSong()
}

function foursong(){
    songIndex = 3
    loadSong(songs[songIndex])
    playSong()
}

function fivesong(){
    songIndex = 4
    loadSong(songs[songIndex])
    console.log("it's working")
    playSong()
}

function sixsong(){
    songIndex = 5
    loadSong(songs[songIndex])
    playSong()
}

function sevensong(){
    songIndex = 6
    loadSong(songs[songIndex])
    playSong()
}

function eightsong(){
    songIndex = 7
    loadSong(songs[songIndex])
    playSong()
}

function ninesong(){
    songIndex = 8
    loadSong(songs[songIndex])
    playSong()
}

function tensong(){
    songIndex = 9
    loadSong(songs[songIndex])
    playSong()
}

function elevensong(){
    songIndex = 10
    loadSong(songs[songIndex])
    playSong()
}

function twelvesong(){
    songIndex = 11
    loadSong(songs[songIndex])
    playSong()
}

playBtn.addEventListener('click', () => {
    const isPLaying = musicContainer.classList.contains('play')

    if(isPLaying){
        pauseSong()
    }else{
        playSong()
    }
})

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)
progressContainer.addEventListener('click', setProgress)
audio.addEventListener('ended', nextSong)
one.addEventListener('click', onesong)
two.addEventListener('click', twosong)
three.addEventListener('click', threesong)
four.addEventListener('click', foursong)
five.addEventListener('click', fivesong)
six.addEventListener('click', sixsong)
seven.addEventListener('click', sevensong)
eight.addEventListener('click', eightsong)
nine.addEventListener('click', ninesong)
ten.addEventListener('click', tensong)
eleven.addEventListener('click', elevensong)
twelve.addEventListener('click', twelvesong)
