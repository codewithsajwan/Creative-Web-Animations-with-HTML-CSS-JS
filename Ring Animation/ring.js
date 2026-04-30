const canvas = document.getElementById("c")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let angle = 0

const R = 120
const r = 40

function draw(){

	ctx.fillStyle = "black"
	ctx.fillRect(0,0,canvas.width,canvas.height)

	const cx = canvas.width/2
	const cy = canvas.height/2

	for(let i=0;i<Math.PI*2;i+=0.2){

		ctx.beginPath()

		for(let j=0;j<Math.PI*2;j+=0.1){

			let x = (R + r*Math.cos(j))*Math.cos(i)
			let y = (R + r*Math.cos(j))*Math.sin(i)
			let z = r*Math.sin(j)

			let y1 = y*Math.cos(angle) - z*Math.sin(angle)
			let z1 = y*Math.sin(angle) + z*Math.cos(angle)

			let scale = 300/(300+z1)

			let px = cx + x*scale
			let py = cy + y1*scale

			if(j===0) ctx.moveTo(px,py)
				else ctx.lineTo(px,py)
		}

		let hue = (i*180/Math.PI + angle*100)%360
		ctx.strokeStyle = "hsl("+hue+",100%,60%)"
		ctx.stroke()
	}

	angle += 0.01
	requestAnimationFrame(draw)
}

draw()

window.addEventListener("resize",()=>{
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
})