const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');

function intro() {
  delay(() => {
      green.classList.add('green-selected');
      green.classList.remove('green');
    }, 1000);
  delay(() => {
      red.classList.add('red-selected');
      red.classList.remove('red');
    }, 1300);
  delay(() => {
      blue.classList.add('blue-selected');
      blue.classList.remove('blue');
    }, 1600);
  delay(() => {
      yellow.classList.add('yellow-selected');
      yellow.classList.remove('yellow');
    }, 1900);
  return delay(() => {
      red.classList.add('red');
      red.classList.remove('red-selected');
      yellow.classList.add('yellow');
      yellow.classList.remove('yellow-selected');
      blue.classList.add('blue');
      blue.classList.remove('blue-selected');
      green .classList.add('green');
      green.classList.remove('green-selected');
    }, 2200);
}

function startGame(){
  const buttomOrder = [];
  for(let i = 0; i < 5; i++){
    buttomOrder.push(Math.floor(Math.random() * 4));
  }
  return buttomOrder;
}

function delay(func, time){
  return new Promise((resolve) => {
    setTimeout(()=>{func(); resolve()}, time);
  })
}

async function game(){
 await intro();
 const buttomOrder = startGame();
 
}

game();
