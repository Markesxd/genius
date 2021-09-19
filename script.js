const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const box = document.querySelector('.box');

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
  delay(() => {
      red.classList.add('red');
      red.classList.remove('red-selected');
      yellow.classList.add('yellow');
      yellow.classList.remove('yellow-selected');
      blue.classList.add('blue');
      blue.classList.remove('blue-selected');
      green .classList.add('green');
      green.classList.remove('green-selected');
    }, 2200);
    return delay(() => {
      box.classList.remove('hidden');
    }, 2500);
}

function startLevel(number){
  const order = [];
  for(let i = 0; i < number; i++){
    order.push(Math.floor(Math.random() * 4));
  }
  return order;
}

function showLevel(order){
  return new Promise(async(resolve) => {
    for(color of order){
      await flash(color);
      await delay(()=> {}, 100);
    }
    resolve();
  })
}

function playLevel(order, score){
  yellow.onclick = () => {check(order,0 , 0, score)}
  red.onclick = () => {check(order, 0, 1, score)}
  green.onclick = () => {check(order, 0, 2, score)}
  blue.onclick = () => {check(order, 0, 3, score)}

}

function gameOver(score){
    yellow.onclick = () => {}
    red.onclick = () => {}
    green.onclick = () => {}
    blue.onclick = () => {}


  box.classList.remove('hidden');
  box.innerHTML = `<h2>Fim de Jogo</h2>
                   <h3>Pontuação: ${score.value}</h3>
                   <button type="button" onclick="game()">Tentar de Novamente</button>`;
}

async function nextLevel(order, score){
  score.value += 5;
  order.push(Math.floor(Math.random() * 4));
  await delay(()=>{}, 500);
  showLevel(order);
  playLevel(order, score);
}

function check(order, i, clicked, score){
  yellow.onclick = () => {check(order,i + 1, 0, score)}
  red.onclick = () => {check(order,i + 1, 1, score)}
  green.onclick = () => {check(order,i + 1, 2, score)}
  blue.onclick = () => {check(order,i + 1, 3, score)}

  flash(clicked);

  if(order[i] !== clicked) return gameOver(score);
  if(i === order.length - 1) return nextLevel(order, score);
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

function makeIterator(arr){
  let i = 0;
  return {
    next: (i < arr.length ? {value: arr[i++], done: false}: {done: true})
  }
}

async function game(){
  const score = {value: 0};
  box.classList.add('hidden');
  await delay(()=>{}, 500);
  const order = startLevel(5);
  await showLevel(order);
  playLevel(order, score);

}

intro();
