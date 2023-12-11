
export const createElement=(tag, className, text)=>{
	const elem=document.createElement(tag)

	if (className){
		elem.className=className
	}
	if (text){
		elem.innerHTML=text
	}

	return elem
}

const HEADER_BUTTON_LIST=[
	{
		width:24,
		height:24,
		src:"/svg/return.svg",
	},
	{
		width:24,
		height:24,
		src:"/img/photo_bloger.png",
	}
]

export const createHeader=()=>{
	const header=createElement('header', 'blog__header')
	HEADER_BUTTON_LIST.forEach((params)=>{
		const button=createElement ('button', 'button')
		const img=createElement ('img')

		Object.entries(params).forEach(([key, value])=>{
			img[key]=value
		})
		// button.append(img) - стандарте рішення
		// header.append(button)- стандарте рішення
		button.insertAdjacentElement('beforeend',img)
		header.insertAdjacentElement('beforeend', button)
	})
	return header
	}

	const image=[
		{
			width:343,
			height:160,
			src:"/img/page2image.png",
		}]

	export const createimage=()=>{
		const pageimage=createElement("div",'blog__section button')
		image.forEach((params)=>{
			
			const img=createElement ('img')
	
			Object.entries(params).forEach(([key, value])=>{
				img[key]=value

			})
			//button.append(img) //- стандарте рішення
			//div.append(button)//- стандарте рішення
			//console.log ('img:',img)
		})
		return pageimage
		}

	