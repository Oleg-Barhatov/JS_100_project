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

let painting = false

btnDelete.addEventListener('click', () => {
	grid.textContent = ''
})

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
		const row = document.createElement('div')
		row.classList.add('gridRow')

		for (let j = 0; j < width.value; j++) {
			count += 2
			const column = document.createElement('div')
			column.classList.add('gridColumn')
			column.setAttribute('id', `${count}`)
			OnMouseMove(column)
			OnMouseDown(column)
			OnMouseUp(column)

			row.appendChild(column)
		}
		grid.appendChild(row)
	}
})

function OnMouseDown(element) {
	element.addEventListener('mousedown', () => {
		painting = true
		element.style.backgroundColor = btnColor.value
	})
}

function OnMouseMove(element) {
	element.addEventListener('mousemove', e => {
		const idItem = document.elementFromPoint(e.clientX, e.clientY).id
		const gridItem = document.querySelectorAll('.gridColumn')
		gridItem.forEach(item => {
			if (idItem === item.id && painting) {
				item.style.backgroundColor = btnColor.value
			}
		})
	})
}

function OnMouseUp(element) {
	element.addEventListener('mouseup', () => {
		painting = false
	})
}
