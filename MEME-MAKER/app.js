const eraseBtn = document.getElementById('eraser-btn');
const destroyBtn = document.getElementById('destroy-btn');
const modeBtn = document.getElementById('mode-btn');
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);

const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

// ctx.fillRect(50, 50, 100, 100);
// ctx.strokeRect(150, 150, 100, 100);
// ctx.fillRect(250, 250, 100, 100);
// ctx.fillStyle = 'orange';
// ctx.fillRect(350, 350, 100, 100);

// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.fillStyle = 'orange';
// ctx.fill();
// ctx.beginPath();
// ctx.rect(250, 250, 100, 100);
// ctx.stroke();

// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.strokeStyle = 'blue';

// ctx.stroke();
// ctx.fillStyle = 'red';
// ctx.fill();

// 집 만들기
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(600, 200, 50, 200);
// ctx.strokeRect(380, 300, 100, 100);
// ctx.arc(400, 350, 10, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(150, 200);
// ctx.lineTo(700, 200);
// ctx.lineTo(420, 50);
// ctx.lineTo(150, 200);
// ctx.fillStyle = 'red';
// ctx.fill();

let isPainting = false;
let isFilling = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
  ctx.beginPath();
  // if(isPainting){
  //   console.log(event.offsetX, event.offsetY);
  //   ctx.lineTo(event.offsetX, event.offsetY);
  //   ctx.stroke();
  // }
  // ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown() {
  isPainting = true;
}

function onMouseUp() {
  isPainting = false;
}

function onLineWidthChange(event) {
  // console.log(event.target.value);
  ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
  //console.log(event.target.value);
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event){
  const colorValue = event.target.dataset.color;
  console.dir(event.target.dataset.color);
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue ;
}

function onModeChange(){
  if(isFilling){
    isFilling = false;
    // ctx.fillRect(0, 0, 800, 800); 내가 처음에 작성한 코드
    modeBtn.innerText = 'Fill';
    
  }else{
    isFilling = true;
    modeBtn.innerText = 'Draw';
  }
}

function onCanvasClick(){
  if(isFilling){
    ctx.fillRect(0, 0, 800, 800);
  }
}

function onDestroy(){
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 800, 800);
}

function onErase(){
  ctx.strokeStyle = 'white';
  isFilling = false;
  modeBtn.innerText = 'Fill';
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", onMouseUp);
canvas.addEventListener("click", onCanvasClick);


lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

// console.log(colorOptions); -> HTMLCollection
colorOptions.forEach((color) => {
  color.addEventListener("click", onColorClick);
});

modeBtn.addEventListener("click", onModeChange);
destroyBtn.addEventListener("click", onDestroy);
eraseBtn.addEventListener("click", onErase);