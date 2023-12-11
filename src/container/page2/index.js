import {
  createElement,
  createHeader,
  createimage,

} from '../../script/layout'

const page = document.querySelector('.blog')

const header = createHeader()
page.append(header)
const title = createElement(
  'h1',
  'blog__title',
  'Коммьюніті',
)
page.append(title)


const nav=()=>{
	const navblock=createElement('div', 'nav')
	const navitem=createElement ('div','')
	const link=createElement('a','nav-link', 'test')
	//navitem.append(link)
	//navblock.append(navitem)
	return nav
}
page.append(nav)
const pagetext='База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. '
// const postsrc="/svg/return.svg"
const pagebutton=`Перейти до ком'юніті у Телеграм`



const creeatePost = () => {
  const postList = createElement('main', 'blog__main')

  const page2image=createimage()
  page.append(page2image)

  const title = createElement(
	'p',
	'page__title',
	'Що таке база знань?',
  )
  page.append(title)
//   const postimage=createElement ("img",'blog__section button', postsrc )
//   page.append(postimage)
  const posttext=createElement ("div",'blog__section page_text', pagetext )
  page.append(posttext)

  const postbutton=createElement ("div",'blog__section button button__page', pagebutton )
  page.append(postbutton)

  return postList
}

const post = creeatePost()
page.append(post)
