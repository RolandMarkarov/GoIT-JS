// 'use strict';
// /*
//   Создайте скрипт секундомера.  
//   По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
//   Изначально в HTML есть разметка:
  
//   <div class="stopwatch">
//     <p class="time js-time">00:00.0</p>
//     <button class="btn js-start">Start</button>
//     <button class="btn js-take-lap">Lap</button>
//     <button class="btn js-reset">Reset</button>
//   </div>
//   <ul class="laps js-laps"></ul>
  
//   Добавьте следующий функционал:
  

//   - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
//     со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
//     новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
//     🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
//                   достаточно повторять не чаще чем 1 раз в 100 мс.
    
//   - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
//     а функционал при клике превращается в оставновку секундомера без сброса 
//     значений времени.
    
//     🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
//   - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
//     меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
//     а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
//     со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
//     с 6 секунд, а не с 16. 
    
//     🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
//                   при рассчете текущего времени после возобновления таймера отнимая
//                   это значение от времени запуска таймера.
    
//   - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
//     button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
//     disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
//   - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
//     в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
// */

// /*
//   ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
//   Выполните домашнее задание используя класс с полями и методами.
  
//   На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
//   динамически создана вся разметка для секундомера.
  
//   Должна быть возможность создать сколько угодно экземпляров секундоментов 
//   на странице и все они будут работать независимо.
  
//   К примеру:

  
//   new Stopwatch(parentA);
//   new Stopwatch(parentB);
//   new Stopwatch(parentC);
  
//   Где parent* это существующий DOM-узел. 
//   */
// const timeDisplay = document.querySelector('.js-time');
// const start = document.querySelector('.js-start');
// const take = document.querySelector('.js-take-lap');
// const reset = document.querySelector('.js-reset');
// const laps = document.querySelector('.laps');

// start.addEventListener('click', fullTimer);
// reset.addEventListener('click', resetTimer);
// laps.addEventListener('click', laps);

// const myTimer = {
// 	start: null,
// 	dateNow: null,
// 	id: null,
// 	deltaM: null,
// 	deltaMs: null,
// 	deltaS: null,
// 	arr: []
// };

// function fullTimer(e) {
// 	if (e.target.textContent === 'Start') {
// 		startTimer();
// 	} else if (e.target.textContent === 'Pause') {
// 		pauseTimer();
// 	} else {
// 		timerContinue();
// 	}
// }

// function startTimer() {
// 	myTimer.start = Date.now();
// 	start.textContent = 'Pause';
// 	myTimer.id = setInterval(startInterval, 100);
// }

// function startInterval() {
// 	myTimer.dateNow = Date.now() - myTimer.start;
// 	myTimer.deltaMs = Math.floor((myTimer.dateNow % 1000) / 100);
// 	myTimer.deltaS = Math.floor((myTimer.dateNow / 1000) % 60);
// 	myTimer.deltaM = Math.floor((myTimer.dateNow / 60000) % 60);
// 	if (myTimer.deltaS < 10) {
// 		myTimer.deltaS = '0' + myTimer.deltaS;
// 	}
// 	if (myTimer.deltaM < 10) {
// 		myTimer.deltaM = '0' + myTimer.deltaM;
// 	}
// 	timeDisplay.textContent = myTimer.deltaM + ':' + myTimer.deltaS + ':' + myTimer.deltaMs;
// }

// function pauseTimer() {
// 	clearInterval(myTimer.id);
// 	start.textContent = 'Continue';
// }

// function timerContinue() {
// 	myTimer.start = Date.now() - myTimer.dateNow;
// 	start.textContent = 'Pause';
// 	myTimer.id = setInterval(() => {
// 		myTimer.dateNow = Date.now() - myTimer.start;
// 		myTimer.deltaMs = Math.floor((myTimer.dateNow % 1000) / 100);
// 		myTimer.deltaS = Math.floor((myTimer.dateNow / 1000) % 60);
// 		myTimer.deltaM = Math.floor((myTimer.dateNow / 60000) % 60);
// 		if (myTimer.deltaS < 10) {
// 			myTimer.deltaS = '0' + myTimer.deltaS;
// 		}
// 		if (myTimer.deltaM < 10) {
// 			myTimer.deltaM = '0' + myTimer.deltaM;
// 		}
// 		timeDisplay.textContent = myTimer.deltaM + ':' + myTimer.deltaS + ':' + myTimer.deltaMs;
// 	}, 100);
// }

// function resetTimer(e) {
// 	clearInterval(myTimer.id);
// 	start.textContent = 'Start';
// 	myTimer.start = null;
// 	myTimer.dateNow = null;
// 	myTimer.id = null;
// 	timeDisplay.textContent = '00:00:0';
// }

// function lap() {
// 	myTimer.arr.push(myTimer.deltaM, myTimer.deltaS, myTimer.deltaMs);
// 	(laps.innerHTML = `<li>${myTimer.deltaM}</li><li>${myTimer.deltaS}</li><li>${myTimer.deltaMs}</li>`), '';
// }
