console.log('Drawing Pad UI...RUNNING 🏃‍♂️‍➡️🏃🏃‍♂️‍➡️🏃‍♀️🏃‍➡️🏃‍♂️')

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let size = 20
let color = #000

function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2, true) 
    ctx.fillStyle = color
    ctx.fill()
}

drawCircle(400, 400)