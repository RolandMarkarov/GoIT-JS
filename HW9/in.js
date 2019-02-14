'use strict';

const clockFace = document.querySelector('.js-time');
const startBtn = document.querySelector('.js-start');
const lapBtn = document.querySelector('.js-take-lap');
const resetBtn = document.querySelector('.js-reset');
const ul = document.querySelector('.js-laps')

const timer = {
	start: null,
	delta: null,
	ms: null,
	s: null,
	m: null,
	id: null,
};

startBtn.addEventListener('click', timerRunner);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', lapTimer)

function timerRunner(e) {
	if (e.target.textContent === 'Start') {
		startTimer();
	} else if (e.target.textContent === 'Pause') {
		pauseTimer();
	} else {
		timerContinue();
	}
}

function startTimer() {
	timer.start = Date.now();
    startBtn.textContent = 'Pause';
	timer.id = setInterval(begin, 100);
}
function begin() {
	timer.delta = Date.now() - timer.start;
	timer.ms = Math.floor((timer.delta % 1000) / 100);
	timer.s = Math.floor((timer.delta / 1000) % 60);
	timer.m = Math.floor((timer.delta / 60000) % 60);
	startBtn.textContent = 'Pause';
	updateClockFace();
}
function updateClockFace() {
	if (timer.m < 10) {
		timer.m = '0' + timer.m;
	}
	if (timer.s < 10) {
		timer.s = '0' + timer.s;
	}
	clockFace.innerHTML = `<span> Minutes</span>${timer.m}:<span>Seconds</span>${timer.s}:<span>Miliseconds</span>${timer.ms}`;
}
function pauseTimer() {
	clearInterval(timer.id);
	startBtn.textContent = 'Continue';
}
function timerContinue() {
	timer.start = Date.now() - timer.delta;
	startBtn.textContent = 'Pause';
	timer.id = setInterval(begin, 100);
}

function resetTimer() {
    clearInterval(timer.id)
	timer.start = null;
    timer.delta = null;
    timer.ms = null;
    timer.s = null;
    timer.m = null;
    timer.id = null;
    startBtn.textContent = "Start";
    clockFace.textContent = '00:00:0'
    ul.innerHTML = '';
}

function lapTimer(){
    if(startBtn.textContent !=="Start"){
    let str= `<li>${timer.m}:${timer.s}:${timer.ms}</li>`
    ul.innerHTML += str;
    }
}