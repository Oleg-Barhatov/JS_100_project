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
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let painting = false
ctx.lineWidth = 3

dataColor.forEach(item => {
	const btnColor = document.createElement('button')
	btnColor.classList.add('btnColor')
	btnColor.style.backgroundColor = `${item.color}`
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
	painting = true
})

canvas.addEventListener('mouseup', evt => {
	painting = false
})

canvas.addEventListener('mouseleave', evt => {
	painting = false
})

const btnColorNode = document.querySelectorAll('.btnColor')

btnColorNode.forEach(item => {
	item.addEventListener('click', () => {
		ctx.strokeStyle = item.style.backgroundColor
	})
})
