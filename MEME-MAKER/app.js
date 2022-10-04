const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;
// ctx.lineWidth = 2;

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

function onMove(event){ 
  if(isPainting){
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
  // if(isPainting){
  //   console.log(event.offsetX, event.offsetY);
  //   ctx.lineTo(event.offsetX, event.offsetY);  
  //   ctx.stroke();
  // }
  // ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown(){
  isPainting = true;
}

function onMouseUp(){
  isPainting = false;
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", onMouseUp);
