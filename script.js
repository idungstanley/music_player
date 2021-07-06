const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover  = document.querySelector('#cover');

// song title

const songs = ['justin', 'savage' , 'soundgasm'];

// keep song in track
let songIndex = 1;

//  initially load song info DOM

loadSong(songs[songIndex]);

function loadSong(song){
    title.innerHTML = song
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

function playSong(){

}
function pauseSong({
    
})

// Event litener
playBtn.addEventListener('click', ()=>{
    const isPlaying = musicContainer.classList.contains('play')
    if(isPlaying){
        pauseSong()        
    } else{
        playSong()
    }
})

