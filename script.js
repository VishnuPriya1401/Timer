let isPause = false;
let isReset = false;
let int = null;

let hr = 0;
let min = 0;
let sec = 0;
let time = 0;

let hoursUnit = 0;
let minutesUnit = 0;
let secondsUnit = 0;

let hours = '';
let minutes = '';
let seconds = '';

let displayTimerSet = document.querySelector('.display-timer');

document.querySelector('.js-start-btn').addEventListener('click', ()=> { 
  setTime();
  document.querySelector('.set-timer').style.display='none';
  document.querySelector('.run-timer').style.display='block';
  
});

document.querySelector('.set-timer-btn').addEventListener('click',()=>{
  clearInterval(int);
  document.querySelector('.set-timer').style.display='block';
  document.querySelector('.run-timer').style.display='none';
  displayTimerSet.innerHTML='';

  isPause = false;
  document.querySelector('.pause-play-btn').innerHTML = `<img src="Icons/pause.png" class="icon">`;
})

document.querySelector('.pause-play-btn').addEventListener('click',()=>{
  if(!isPause){
    isPause = true;
    clearInterval(int);
    document.querySelector('.pause-play-btn').innerHTML = `<img src="Icons/play.png" class="icon">`;
  }
  else{
    isPause = false;
    document.querySelector('.pause-play-btn').innerHTML = `<img src="Icons/pause.png" class="icon">`;
    int = setInterval(displayTimer, 1000);
  }
});

document.querySelector('.reset-btn').addEventListener('click', ()=>{
  isPause = true;
  clearInterval(int);
  document.querySelector('.pause-play-btn').innerHTML = `<img src="Icons/play.png" class="icon">`;

  time = (hr*60*60) + (min*60) + sec;
  displayTimer();
})

function setTime(){
  
  const hrInput = document.querySelector('.js-hr');
  hr = Number(hrInput.value);

  const minInput = document.querySelector('.js-min');
  min = Number(minInput.value);

  const secInput = document.querySelector('.js-sec');
  sec = Number(secInput.value);
  
  hrInput.value='';
  secInput.value='';
  minInput.value='';

  time = (hr*60*60) + (min*60) + sec;

  int = setInterval(displayTimer, 1000);
}

function displayTimer(){
  
  if(time >= 0){
    
    hoursUnit = Math.floor(time/(60*60));
    minutesUnit = Math.floor((time%(60*60))/60);
    secondsUnit = time%60;

    hours = hoursUnit<10? '0'+hoursUnit : hoursUnit;
    minutes = minutesUnit<10? '0'+minutesUnit : minutesUnit;
    seconds = secondsUnit<10? '0'+secondsUnit : secondsUnit;

    displayTimerSet.innerHTML=`${hours} : ${minutes} : ${seconds}`;
  }
  time--;
}
