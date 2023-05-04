
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
    
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
                // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });

    player.on('timeupdate', throttle((data)=>{
        const {seconds} = data;
        localStorage.setItem("videoplayer-current-time", seconds);
    },1000));

}
