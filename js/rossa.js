console.log("Welcome to Musik");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('rossa/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let Rossa = [
    {songName: "Rossa - Cinta Dalam Hidupku", filePath: "rossa/1.mp3", coverPath: "covers/3.JFIF"},
    {songName: "Rossa - Ku Menunggu", filePath: "rossa/2.mp3", coverPath: "covers/3.JFIF"},
    {songName: "Rossa ft Afgan - Kamu Yang Kutunggu", filePath: "rossa/3.mp3", coverPath: "covers/3.JFIF"},
    {songName: "Rossa - Hati Yang Kau Sakiti", filePath: "rossa/4.mp3", coverPath: "covers/3.JFIF"},
    {songName: "Rossa - Terlalu Cinta", filePath: "rossa/5.mp3", coverPath: "covers/3.JFIF"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = Rossa[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = Rossa[i].songName; 
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
        audioElement.src = `rossa/${songIndex+1}.mp3`;
        masterSongName.innerText = Rossa[songIndex].songName;
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
    audioElement.src = `rossa/${songIndex+1}.mp3`;
    masterSongName.innerText = Rossa[songIndex].songName;
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
    audioElement.src = `rossa/${songIndex+1}.mp3`;
    masterSongName.innerText = rossa[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})