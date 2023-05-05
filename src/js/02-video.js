
const throttle = require('lodash.throttle');
const iframe = document.querySelector('#vimeo-player');
import Player from '@vimeo/player'
const player = new Player(iframe);
// localStorage.clear();
if(!localStorage.getItem("videoplayer-current-time")){
    player.on('timeupdate', throttle((data)=>{
        
        const {seconds} = data;
        localStorage.setItem("videoplayer-current-time", seconds);
    },1000));
}else {
    const currentTime = localStorage.getItem("videoplayer-current-time") 
    ? localStorage.getItem("videoplayer-current-time")
    : 0;
    player.setCurrentTime(currentTime);

    player.on('timeupdate', throttle((data)=>{
        const {seconds} = data;
        localStorage.setItem("videoplayer-current-time", seconds);
    },1000));

}
