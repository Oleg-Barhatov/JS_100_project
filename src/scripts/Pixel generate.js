const grid = document.querySelector('.grid')
const width = document.querySelector('.slider-input__width')
const heigth = document.querySelector('.slider-input__heigth')
const btnCreate = document.querySelector('.btnCreate')
const btnDelete = document.querySelector('.btnDelete')
const btnClear = document.querySelector('.btnClear')
const btnPaint = document.querySelector('.btnPaint')
const btnColor = document.querySelector('.input-color')
const widthValue = document.querySelector('.slider_width')
const heigthValue = document.querySelector('.slider_heigth')

width.addEventListener('input', () => {
	widthValue.textContent = width.value
})

heigth.addEventListener('input', () => {
	heigthValue.textContent = heigth.value
})

btnCreate.addEventListener('click', () => {
	grid.textContent = ''
	let count = 0
	for (let i = 0; i < heigth.value; i++) {
		count += 2
		let div = document.createElement('div')
		div.classList.add('gridRow')

		for (let j = 0; j < width.value; j++) {
			count += 2
			let col = document.createElement('div')
			col.classList.add('gridColumn')
			div.appendChild(col)
		}
		grid.appendChild(div)
	}
})

console.log(btnColor.value)
