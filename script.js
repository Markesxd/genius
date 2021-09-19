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

function startLevel(number){
  const order = [];
  for(let i = 0; i < number; i++){
    order.push(Math.floor(Math.random() * 4));
  }
  return order;
}

async function playLevel(order){
  console.log(order)
  for(color of order){
    await flash(color);
    await delay(()=> {}, 100);
  }
}

function flash(color){
  switch (color){
    case 0:
      yellow.classList.add('yellow-selected');
      yellow.classList.remove('yellow');
      return delay(() => {
        yellow.classList.add('yellow');
        yellow.classList.remove('yellow-selected');
      }, 300);
    case 1:
      red.classList.add('red-selected');
      red.classList.remove('red');
      return delay(() => {
        red.classList.add('red');
        red.classList.remove('red-selected');
      }, 300);
    case 2:
      green.classList.add('green-selected');
      green.classList.remove('green');
      return delay(() => {
        green.classList.add('green');
        green.classList.remove('green-selected');
      }, 300);
    case 3:
      blue.classList.add('blue-selected');
      blue.classList.remove('blue');
      return delay(() => {
        blue.classList.add('blue');
        blue.classList.remove('blue-selected');
      }, 300);
  }
}

function delay(func, time){
  return new Promise((resolve) => {
    setTimeout(() => {func(); resolve()}, time);
  })
}

async function game(){
 await intro();
 // yellow.onclick = () => {flash(0)}
 // red.onclick = () => {flash(1)}
 // green.onclick = () => {flash(2)}
 // blue.onclick = () => {flash(3)}
 const order = startLevel(5);
 playLevel(order);

}

game();
