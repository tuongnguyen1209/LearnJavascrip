"use strict";
const cdLeft = document.getElementById("crash-ride");
const cdRight = document.getElementById("hihat-top");

// console.log(cdLeft, cdRight);


document.addEventListener('keydown',(e)=>{
    let keyinput=e.key;
    switch(keyinput){
        case 'r':{
            keydown(keyinput);
            animationLeft();
            break;
        }
        case 'e':{
            keydown(keyinput);
            animationLeft();
            break;
        }
        case 'i':{
            keydown(keyinput);
            animationRight()
            break;
        }
        case 'k':{
            keydown(keyinput);
            animationRight()
            break;
        }
        case 'f':{
            keydown(keyinput);
            break;
        }
        case 'g':{
            keydown(keyinput);
            break;
        }
        case 'h':{
            keydown(keyinput);
            break;
        }
        case 'j':{
            keydown(keyinput);
            break;
        }
        case 'v':{
            keydown(keyinput);
            break;
        }
        case 'b':{
            keydown(keyinput);
            break;
        }
        default:
    }
})
let keydown=(key)=>{
    let audio=document.querySelector(`audio[data-key="${key}"]`);
    console.log(audio.duration)
    if(audio.currentTime>=0){
        audio.currentTime=0;
        audio.play();
    }
    let btn=document.querySelector(`div.key[data-key="${key}"]`);
    console.log(btn)
    // btn.classList.add('playing');
    setTimeout(()=>{btn.classList.remove('playing')},100)
}
let animationLeft=()=>{
    cdLeft.style.transform='rotate(0deg) scale(1.5)';
    setTimeout(()=>{
        cdLeft.style.transform='rotate(-7.2deg) scale(1.5)'
    },100)
}
let animationRight=()=>{
    cdRight.style.transform='translateY(3px)  scale(1.35)';
    setTimeout(()=>{
        cdRight.style.transform='translateY(-3px)  scale(1.35)'
    },100)
}