document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button')
    const width = 10;

//Defined the tetriminoes using Google sheets
const lTetrimino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2] 
]

const zTetrimino = [
    [0, width, width+1, width*2+1]
    [width+1, width+2, width*2, width*2+1]
    [0, width, width+1, width*2+1]
    [width+1, width+2, width*2, width*2+1]
]




})