const dataColor = [
	{
		name: 'черный',
		color: 'black',
	},
	{
		name: 'белый',
		color: 'white',
	},
	{
		name: 'красный',
		color: 'red',
	},
	{
		name: 'оранжевый',
		color: 'orange',
	},
	{
		name: 'желтый',
		color: 'yellow',
	},
	{
		name: 'зеленый',
		color: 'green',
	},
	{
		name: 'голубой',
		color: '#0091ff',
	},
	{
		name: 'синий',
		color: 'blue',
	},
	{
		name: 'фиолетовый',
		color: '#5f1aea',
	},
]

const btn = document.querySelector('.btn-container')
const btnFiling = document.querySelector('.btn_filing')
const btnSave = document.querySelector('.btn_save')
const lineWidth = document.querySelector('.lineWidth')
const count = document.querySelector('.count')
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let painting = false
let filling = false
const canvasWidth = 1000
const canvasHeigth = 600

canvas.width = canvasWidth
canvas.height = canvasHeigth
ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvasWidth, canvasHeigth)

dataColor.forEach(item => {
	const btnColor = document.createElement('button')
	btnColor.classList.add('btnColor')
	btnColor.style.backgroundColor = `${item.color}`
	btnColor.addEventListener('click', evt => {
		ctx.strokeStyle = evt.target.style.backgroundColor
		ctx.fillStyle = evt.target.style.backgroundColor
	})
	btn.append(btnColor)
})

canvas.addEventListener('mousemove', evt => {
	const x = evt.offsetX
	const y = evt.offsetY
	if (!painting) {
		ctx.beginPath()
		ctx.moveTo(x, y)
	} else {
		ctx.lineTo(x, y)
		ctx.stroke()
	}
})

canvas.addEventListener('mousedown', evt => {
	if (!painting && !filling) {
		painting = true
	} else if (painting && filling) {
		stopPainting()
	}
})

canvas.addEventListener('mouseup', evt => {
	stopPainting()
})

canvas.addEventListener('mouseleave', evt => {
	stopPainting()
})

canvas.addEventListener('click', () => {
	if (filling) {
		ctx.fillRect(0, 0, canvasWidth, canvasHeigth)
	}
})

lineWidth.addEventListener('input', () => {
	count.textContent = lineWidth.value
	ctx.lineWidth = lineWidth.value
})

btnSave.addEventListener('click', () => {
	const imageUrl = canvas.toDataURL('image/jpeg')
	const imageLink = document.createElement('a')
	imageLink.href = imageUrl
	imageLink.download = 'Paint.jpeg'
	imageLink.click()
})

btnFiling.addEventListener('click', () => {
	renameButton(btnFiling)
	if (btnFiling.textContent === 'Рисование') {
		filling = true
		stopPainting()
	} else {
		stopFiling()
	}
})

function stopPainting() {
	painting = false
}

function stopFiling() {
	filling = false
}

function renameButton(btn) {
	btn.textContent === 'Рисование'
		? (btn.textContent = 'Заливка')
		: (btn.textContent = 'Рисование')
}
