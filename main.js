let color ='black';
let click=false;
function makeDiv(size){
    let gameBoard = document.getElementById('board');
    gameBoard.style.gridTemplateColumns=`repeat(${size}, 1fr)`
    gameBoard.style.gridTemplateRows=`repeat(${size}, 1fr)`
    let squares = gameBoard.querySelectorAll('div');
    squares.forEach((div)=>div.remove());
    for( let i=0; i<size**2; i++) {
        let blocks = document.createElement('div');
        gameBoard.appendChild(blocks); 
        blocks.classList='square';
        blocks.addEventListener('mouseover', colorBlock);
}};
makeDiv(16);
function changeSize(input){
    let show = document.querySelector('.show')
    if ((input>=2 && input<=300)){
        makeDiv(input)
        squares.forEach((div)=>div.remove());
    }else{
        show.innerHTML="Pick a valid number";
    };
};
window.addEventListener('click',()=>{
    click=!click;
})
function colorBlock() {
    if (click){
        if (color =='random'){
            let r =Math.floor(Math.random()*255),
                g= Math.floor(Math.random()*255),
                b=Math.floor(Math.random()*255) ;
            this.style.backgroundColor=`rgb(${r},${g},${b})`;
        }else{
            this.style.backgroundColor=color;
}}};

const changeColor =(choice)=>{
color=choice;
};
function reset() {
    let gameBoard = document.getElementById('board');
    let squares = gameBoard.querySelectorAll('div');
    squares.forEach((div)=>div.style.backgroundColor='white');
};





















/*
const changeSize = (input)=>{
    let show = document.querySelector('.show');
    console.log(typeof input);
    show.addEventListener('click',()=>{
        if ((typeof input=='number') && (input>=2 && input<=5000)){
            makeDiv(input);
        }else if (typeof input!=='number'){
            show.innerHTML="Pick a number";
        }else{
            show.innerHTML="Pick a valid number";
        }});
    }
    */
    



