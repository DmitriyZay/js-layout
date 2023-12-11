
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
	const TAB_BUTTON_LIST = [
		{
		  active: false,
		  info: 'База знань'
	  
		},
		{
		  active: true,
		  info: 'Інформація'
		},
	  ]
	export const createContainerTab = () => {
		const div = createElement('div', 'tab__list')
	  
		TAB_BUTTON_LIST.forEach((params) => {
		  const tab = createElement('div', params.active ? 'button tab__button tab__active' : 'button tab__button')
	  
		  tab.innerText = params.info
	  
		  div.insertAdjacentElement('beforeend', tab)
		})
	  
		return div
	  }
	  
	  const MAIN_INFO = {
		  img: '/img/page2image.png',
		  title: 'Що таке база знань?',
		  text: 'База знаний — база даних, що містить правила виводу та інформацію про людський досвід і знання в певній предметній області. В самоосвітніх системах база знань також містить інформацію, яка є результатом вирішення попередніх завдань.',
		  button: `Перейти до ком'юніті у Телеграм`,
		}
	  
	  
	  export const createMain = () => {
		const main = createElement('main', 'blog__main');
	  
		const img = createElement('img', 'button');
		img.src = MAIN_INFO.img;
		main.appendChild(img);
	  
		const title = createElement('div', 'page__title', MAIN_INFO.title);
		main.appendChild(title);
	  
		const textContainer = createElement('div');
		const paragraph = createElement('p', 'page_text', MAIN_INFO.text);
		textContainer.appendChild(paragraph);
		main.appendChild(textContainer);
	  
		const button = createElement('button', 'button__page button', MAIN_INFO.button);
		main.appendChild(button);
	  
		return main;
	  };
	