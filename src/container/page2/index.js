import {
	createContainerTab,
	createElement,
	createHeader, createMain,

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


// ===

const containerTab = createContainerTab()
page.append(containerTab)

// ===

const containerMain = createMain()
page.append(containerMain)

