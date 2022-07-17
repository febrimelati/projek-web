console.log("Welcome to Musik");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('isyana/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let isyana = [
    {songName: "Isyana Sarasvati - Tetap Didalam Jiwa", filePath: "isyana/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Isyana Sarasvati - Kau Adalah (feat. Rayi Putra)", filePath: "isyana/2.mp3", coverPath: "covers/1.jpg"},
    {songName: "Isyana Sarasvati ft Raisa - Anganku Anganmu", filePath: "isyana/3.mp3", coverPath: "covers/1.jpg"},
    {songName: "Isyana Sarasvati - Untuk Hati Yang Terluka", filePath: "isyana/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Isyana Sarasvati - Sikap Duniawi", filePath: "isyana/5.mp3", coverPath: "covers/1.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = isyana[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = isyana[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `isyana/${songIndex+1}.mp3`;
        masterSongName.innerText = isyana[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `isyana/${songIndex+1}.mp3`;
    masterSongName.innerText = isyana[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `isyana/${songIndex+1}.mp3`;
    masterSongName.innerText = isyana[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})