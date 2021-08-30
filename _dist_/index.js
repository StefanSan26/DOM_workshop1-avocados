/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// const { doc } = require("prettier");

const url = "https://platzi-avo.vercel.app/api/avo"
const baseUrl = "https://platzi-avo.vercel.app"
const appNode=document.getElementById('app')

appNode.addEventListener('click', (e) =>{
	if(e.target.nodeName==='H2'){
	window.alert('Hola')
	}
})
//API DE INTERNACIONALIZACION: PARA FECHAS Y MONEDAS

const formatPrice=(price)=>{
	const newPrice = new window.Intl.NumberFormat('en-EN',{
		style:"currency",
		currency:"USD"
	}).format(price)
	return newPrice
}




//Usando Async/Await
async function getDAta(){ 
	const response =await  fetch(url)
	const responseJson = await response.json()
	const todosLosItems = []
	responseJson.data.forEach(item => {
		//crear imagen
		const image=document.createElement('img')
		document.body.appendChild(image)
		image.src=baseUrl+item.image
		//crear titulo
		const title = document.createElement('h2')
		document.body.appendChild(title)
		title.textContent=item.name
		// title.style='font-size: 2rem'
		// title.style.fontSize= "2rem"
		title.className='text-xl'
		//crear precio
		const price = document.createElement('div')
		document.body.appendChild(price)
		price.textContent=formatPrice(item.price)
		const container = document.createElement('div')
		// container.appendChild(imagen)
		// container.appendChild(title)
		// container.appendChild(imagen)
		container.append(image, title, price)
		container.className='avo-item'
		document.body.appendChild(container)
		todosLosItems.push(container)
	})
	appNode.append(...todosLosItems)
}
getDAta()