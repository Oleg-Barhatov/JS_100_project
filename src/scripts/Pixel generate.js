const grid = document.querySelector('.grid')
const widthGrid = document.querySelector('.slider-input__width')
const heigthGrid = document.querySelector('.slider-input__heigth')
const btnCreate = document.querySelector('.btnCreate')
const btnDelete = document.querySelector('.btnDelete')
const btnEraser = document.querySelector('.btnClear')
const btnPaint = document.querySelector('.btnPaint')
const btnColor = document.querySelector('.input-color')
const widthValue = document.querySelector('.slider_width')
const heigthValue = document.querySelector('.slider_heigth')

let painting = false
let eraser = false

btnDelete.addEventListener('click', () => {
	grid.textContent = ''
})

btnEraser.addEventListener('click', () => {
	eraser = true
})

btnPaint.addEventListener('click', () => {
	eraser = false
})

widthGrid.addEventListener('input', () => {
	widthValue.textContent = widthGrid.value
})

heigthGrid.addEventListener('input', () => {
	heigthValue.textContent = heigthGrid.value
})

btnCreate.addEventListener('click', () => {
	grid.textContent = ''
	let count = 0
	for (let i = 0; i < heigthGrid.value; i++) {
		count += 1
		const rowGrid = document.createElement('div')
		rowGrid.classList.add('gridRow')

		for (let j = 0; j < widthGrid.value; j++) {
			count += 1
			const column = document.createElement('div')
			column.classList.add('gridColumn')
			column.setAttribute('id', `${count}`)
			OnMouseMove(column)
			OnMouseDown(column)
			OnMouseUp(column)
			rowGrid.appendChild(column)
		}
		grid.appendChild(rowGrid)
	}
})

function OnMouseDown(element) {
	element.addEventListener('mousedown', () => {
		painting = true
		if (eraser) {
			element.style.backgroundColor = 'transparent'
		} else {
			element.style.backgroundColor = btnColor.value
		}
	})
}

function OnMouseMove(element) {
	element.addEventListener('mousemove', e => {
		const idItem = document.elementFromPoint(e.clientX, e.clientY).id
		const gridItem = document.querySelectorAll('.gridColumn')
		gridItem.forEach(item => {
			if (idItem === item.id && painting && !eraser) {
				item.style.backgroundColor = btnColor.value
			} else if (idItem === item.id && painting && eraser) {
				item.style.backgroundColor = 'transparent'
			}
		})
	})
}

function OnMouseUp(element) {
	element.addEventListener('mouseup', () => {
		painting = false
	})
}
