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

dataColor.forEach(item => {
	const btnColor = document.createElement('button')
	btnColor.classList.add('btnColor')
	btnColor.style.backgroundColor = `${item.color}`
	btn.append(btnColor)
})
