const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jscolor");
const range= document.getElementById('jsrange');
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR= "black";
canvas.width=700;
canvas.height=700;

ctx.fillStyle= "white";
ctx.fillRect(0,0,700,700);

ctx.lineWidth=2.5;
ctx.strokeStyle="INITIAL_COLOR";
ctx.fillStyle = "INITIAL_COLOR";

let painting = false;
let filling = false;
function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMousseMove(event){
  const x = event.offsetX;
  const y = event.offsetY;
  if(!painting){
      ctx.beginPath();
      ctx.moveTo(x,y);  //선시작 좌표
      }else{
      ctx.lineTo(x,y);  // 선 끝 좌표 
      ctx.stroke();  //선 그리기 


  }

}

function changColor(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}   

function handlerangechange(event){
   const strokesize =event.target.value;
    ctx.lineWidth = strokesize;
}

function handleModeClick(){
if (filling === true){
    filling = false;
    mode.innerText = "Fill";
}else{
    filling  = true;
    mode.innerText="paint";

}}

function handlecanvasclick(){
   if(filling){
    ctx.fillRect(0,0,700,700)
}
   } 

if(canvas){
    canvas.addEventListener("mousemove",onMousseMove);
    canvas.addEventListener('mousedown',startPainting);
    canvas.addEventListener("mouseup",startPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handlecanvasclick);


}
    Array.from(colors).forEach(color =>color.addEventListener("click",changColor));

if(range){
    range.addEventListener("input",handlerangechange);
}

if (mode){
    mode.addEventListener("click", handleModeClick);
}
